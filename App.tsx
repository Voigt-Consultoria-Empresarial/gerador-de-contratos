
import React, { useState, useEffect } from 'react';
import { Contratante, TemplateType } from './types';
import CoverPage from './components/CoverPage';
import ContractForm from './components/ContractForm';
import ContractPreview from './components/ContractPreview';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { TOPSTACK_LOGO_3X1, TOPSTACK_URL, TOPSTACK_FAVICON } from './constants';

type Page = 'cover' | 'form';

const Footer: React.FC = () => (
    <footer className="w-full flex flex-col items-center justify-center p-6 bg-surface-light dark:bg-surface-dark border-t border-border-light dark:border-border-dark space-y-3">
        <div className="flex items-center gap-2 text-xs text-text-secondary-light dark:text-text-secondary-dark uppercase tracking-widest">
            <span>Powered by</span>
            <a href={TOPSTACK_URL} target="_blank" rel="noopener noreferrer">
                <img src={TOPSTACK_LOGO_3X1} alt="TOPSTACK" className="h-5 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" />
            </a>
        </div>
        <p className="text-[10px] text-text-secondary-light dark:text-text-secondary-dark text-center">
            © 2025 VOIGT CONSULTORIA EMPRESARIAL — Todos os direitos reservados. 
            <br />
            Solução desenvolvida com foco em inovação e propósito pela <a href={TOPSTACK_URL} target="_blank" rel="noopener noreferrer" className="font-bold text-primary dark:text-gold">TOPSTACK</a>.
        </p>
    </footer>
);


const App: React.FC = () => {
    const [page, setPage] = useState<Page>('cover');
    const [template, setTemplate] = useState<TemplateType>(TemplateType.Modern);
    
    // Initialize with current date in YYYY-MM-DD format
    const today = new Date().toISOString().split('T')[0];

    const [contratante, setContratante] = useState<Contratante>({
        nome: '',
        cnpjCpf: '',
        telefone: '',
        email: '',
        endereco: '',
        data: today,
        // Distrato Defaults
        dataContratoOriginal: '2025-09-30', 
        valorDistrato: '30.000,00',
        // Service Defaults (Percentage)
        percentualHonorarios: '15',
        // Service Defaults (Fixed Values)
        tipoPagamento: 'padrao',
        valorTotal: '28.656,77',
        valorExtenso: 'Vinte e oito mil, seiscentos e cinquenta e seis reais e setenta e sete centavos',
        valorEntrada: '2.865,68',
        valorSaldo: '25.791,09',
        numParcelas: '5',
        valorParcela: '5.158,22',
        datasPagamento: '20 de dezembro de 2025, 10 de janeiro de 2026 e 25 de janeiro de 2026',
        // SDR Defaults
        socioNacionalidade: 'brasileira',
        socioEstadoCivil: 'solteiro(a)',
        socioProfissao: 'empresário(a)',
        socioIdentidade: '',
        socioOrgaoExpedidor: 'SSP',
        // Common
        foro: 'Porto Alegre/RS',
        socioNome: '',
        socioCpf: ''
    });
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [page]);

    const handleTemplateSelect = (selectedTemplate: TemplateType) => {
        setTemplate(selectedTemplate);
        setPage('form');
    };

    const handleGeneratePdf = async () => {
        const input = document.getElementById('pdf-content');
        if (!input) {
            console.error("Element with id 'pdf-content' not found.");
            return;
        }
        setLoading(true);

        try {
            const canvas = await html2canvas(input, {
                scale: 3, 
                useCORS: true,
                logging: false,
                backgroundColor: '#ffffff' 
            });

            const imgData = canvas.toDataURL('image/png');
            
            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: 'a4'
            });

            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const canvasWidth = canvas.width;
            const canvasHeight = canvas.height;
            const canvasAspectRatio = canvasWidth / canvasHeight;
            
            let imgWidth = pdfWidth;
            let imgHeight = imgWidth / canvasAspectRatio;

            if (imgHeight > pdfHeight) {
                imgHeight = pdfHeight;
                imgWidth = imgHeight * canvasAspectRatio;
            }
            
            const x = (pdfWidth - imgWidth) / 2;

            pdf.addImage(imgData, 'PNG', x, 0, imgWidth, imgHeight);
            pdf.save('contrato-voigt.pdf');

        } catch (error) {
            console.error('Error generating PDF:', error);
        } finally {
            setLoading(false);
        }
    };
    
    if (page === 'cover') {
        return (
            <div className="flex flex-col min-h-screen">
                <main className="flex-grow flex items-center justify-center">
                    <CoverPage onTemplateSelect={handleTemplateSelect} />
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="bg-background-light dark:bg-background-dark">
            <div className="relative flex flex-col xl:flex-row min-h-screen">
                <aside className="w-full xl:w-96 h-auto xl:h-screen xl:fixed left-0 top-0 bg-surface-light dark:bg-surface-dark xl:shadow-2xl flex flex-col z-20 shrink-0">
                    
                    <header className="p-6 flex justify-between items-center border-b border-border-light dark:border-border-dark flex-shrink-0">
                        <button
                            onClick={() => setPage('cover')}
                            className="flex items-center gap-2 text-sm text-text-secondary-light dark:text-text-secondary-dark hover:text-primary dark:hover:text-gold transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                            <span>Voltar</span>
                        </button>
                        <a href={TOPSTACK_URL} target="_blank" rel="noopener noreferrer" title="Visitar TOPSTACK">
                            <img 
                                src={TOPSTACK_FAVICON} 
                                alt="TOPSTACK Icon" 
                                className="w-[42px] h-[42px] hover:scale-110 transition-transform"
                                crossOrigin="anonymous"
                            />
                        </a>
                    </header>
                    
                    <div className="flex-grow xl:overflow-y-auto">
                        <ContractForm
                            contratante={contratante}
                            setContratante={setContratante}
                            onGeneratePdf={handleGeneratePdf}
                            loading={loading}
                            templateType={template}
                        />
                    </div>

                    <div className="hidden xl:block flex-shrink-0">
                        <Footer />
                    </div>
                </aside>

                <main className="w-full xl:ml-96 p-4 sm:p-6 lg:p-8 flex flex-col">
                     <div className="flex-grow p-4 bg-gray-200 dark:bg-gray-900 rounded-lg overflow-x-auto">
                        <ContractPreview contratante={contratante} template={template} />
                    </div>
                    <div className="block xl:hidden mt-8">
                        <Footer />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default App;
