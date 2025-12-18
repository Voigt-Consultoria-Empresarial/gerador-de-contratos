
import React from 'react';
import { Contratante } from '../types';
import { LOGO_URL_HEADER, CONTRACT_ICON_URL } from '../constants';

interface TemplateProps {
    contratante: Contratante;
}

const TemplateDistratoClassic: React.FC<TemplateProps> = ({ contratante }) => {
    
    // Parse the YYYY-MM-DD date string to avoid timezone issues with `new Date()`
    const [year, month, day] = (contratante.data || new Date().toISOString().split('T')[0]).split('-');
    
    // Create date object (Month is 0-indexed)
    const dateObj = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    
    const monthName = dateObj.toLocaleString('pt-BR', { month: 'long' }).toUpperCase();
    
    // Formatação da data original do contrato para o texto (DD/MM/YYYY)
    const formatDateBr = (dateString?: string) => {
        if (!dateString) return "30/09/2025";
        const [y, m, d] = dateString.split('-');
        return `${d}/${m}/${y}`;
    };

    const originalDateFormatted = formatDateBr(contratante.dataContratoOriginal);
    const valorDistratoFormatted = contratante.valorDistrato || "30.000,00";

    // Classes forçadas para modo claro (papel)
    return (
        <div className="bg-white text-gray-900 w-full h-full">
            <header className="p-8 sm:p-12 border-b-4 border-primary">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                    <div>
                        <img alt="Voigt Consultoria Empresarial Logo" className="h-12 w-auto" src={LOGO_URL_HEADER} crossOrigin="anonymous"/>
                    </div>
                    <div className="text-right text-xs sm:text-sm text-gray-500">
                        <p className="font-semibold text-gray-900">VOIGT CONSULTORIA EMPRESARIAL</p>
                        <p>@voigt.consultoriaempresarial</p>
                        <p>www.voigtconsultoria.com.br</p>
                    </div>
                </div>
                <h1 className="text-xl sm:text-2xl font-bold text-primary mt-8 sm:mt-10 uppercase tracking-wider">CONTRATO DE DISTRATO DE PRESTAÇÃO DE SERVIÇOS DE ASSESSORIA JURÍDICA</h1>
            </header>
            <section className="p-8 sm:p-12">
                <div className="inline-flex items-center justify-center border-2 border-primary px-6 py-2 rounded mb-6">
                    <h2 className="font-bold text-primary uppercase text-sm tracking-wider text-center m-0 p-0 pb-[6px] leading-none">Contratante</h2>
                </div>
                <div className="space-y-4 text-sm text-gray-900 mb-8">
                     <div className="grid grid-cols-1 gap-4">
                        <div className="border-b border-gray-300 pb-2">
                            <span className="font-bold">{contratante.nome || "..."}</span>, inscrito(a) no CPF/CNPJ sob nº <span className="font-bold">{contratante.cnpjCpf || "..."}</span>, com sede à <span className="font-bold">{contratante.endereco || "..."}</span>, com número de telefone para contato sendo <span className="font-bold">{contratante.telefone || "..."}</span>.
                        </div>
                    </div>
                </div>
                
                <div className="mb-6">
                    <p className="text-sm text-gray-900">
                        <span className="font-bold text-primary">CONTRATADA:</span> <span className="font-bold">VOIGT CONSULTORIA EMPRESARIAL</span>, inscrito no CNPJ sob nº 63.327.299/0001-03, com sede à Rua Doutor Campos velho, Porto Alegre/RS.
                    </p>
                </div>

                <div className="text-sm text-gray-900 mb-6">
                     <p>As partes acima identificadas têm entre si justo e contratado o seguinte:</p>
                     <p>Têm entre si, justo e acordado, o presente <span className="font-bold">CONTRATO DE DISTRATO</span>, que se regerá pelas cláusulas e condições seguintes:</p>
                </div>

            </section>
            <hr className="mx-8 sm:mx-12 border-gray-300"/>
            <section className="p-8 sm:p-12 grid grid-cols-1 gap-y-6 text-sm leading-relaxed text-gray-900">
                <article>
                    <h3 className="font-bold text-primary uppercase mb-2">CLÁUSULA PRIMEIRA – DO OBJETO</h3>
                    <p>O presente instrumento tem por objeto o distrato do contrato de prestação de serviços de assessoria jurídica firmado entre as partes em <span className="font-bold">{originalDateFormatted}</span>, referente à assessoria jurídica.</p>
                </article>
                <article>
                    <h3 className="font-bold text-primary uppercase mb-2">CLÁUSULA SEGUNDA – DA RESCISÃO</h3>
                    <p>As partes resolvem, de comum acordo, rescindir o contrato mencionado, encerrando todas as obrigações contratuais a partir da assinatura deste distrato.</p>
                </article>
                <article>
                    <h3 className="font-bold text-primary uppercase mb-2">CLÁUSULA TERCEIRA – DAS OBRIGAÇÕES PENDENTES</h3>
                    <p className="mb-2">As partes declaram que:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Não há pendências financeiras entre elas;</li>
                        <li>Os serviços prestados até a presente data foram devidamente cumpridos e reconhecidos;</li>
                        <li>Eventuais documentos, processos ou materiais serão entregues à parte interessada;</li>
                        <li>Será cancelada a redução do valor de R$ <span className="font-bold">{valorDistratoFormatted}</span> concedidos através de expertise tributária junto a Procuradoria Geral da Fazenda Nacional;</li>
                    </ul>
                </article>
                <article>
                    <h3 className="font-bold text-primary uppercase mb-2">CLÁUSULA QUARTA – DA QUITAÇÃO</h3>
                    <p>Com a assinatura deste instrumento, as partes dão-se mútua e plena quitação, nada mais tendo a reclamar, seja a que título for, em relação ao contrato ora distratado.</p>
                </article>
                <article>
                    <h3 className="font-bold text-primary uppercase mb-2">CLÁUSULA QUINTA – DO FORO</h3>
                    <p>Para dirimir quaisquer dúvidas oriundas deste distrato, as partes elegem o foro da comarca de Porto Alegre renunciando a qualquer outro, por mais privilegiado que seja.</p>
                    <p className="mt-2">E, por estarem assim justas e contratadas, assinam o presente instrumento em duas vias de igual teor e forma, juntamente com duas testemunhas.</p>
                </article>
            </section>
            <footer className="p-8 sm:p-12">
                <div className="text-center text-sm mb-12 text-gray-500">
                    Porto Alegre, <span className="font-semibold text-gray-900 px-2">{day}</span> de <span className="font-semibold text-gray-900 uppercase px-2">{monthName}</span> de <span className="font-semibold text-gray-900 px-2">{year}</span>.
                </div>
                <div className="flex flex-col gap-12 text-center text-sm items-center">
                    <div className="w-full max-w-md">
                        <div className="border-t border-gray-400 pt-2 text-gray-900 font-bold uppercase">{contratante.nome || "CONTRATANTE"}</div>
                    </div>
                    <div className="w-full max-w-md">
                        <div className="border-t border-gray-400 pt-2 text-gray-900 font-bold">VOIGT CONSULTORIA EMPRESARIAL</div>
                    </div>
                </div>
                 <div className="mt-12 grid grid-cols-2 gap-12 text-center text-xs">
                    <div>
                        <div className="border-t border-gray-300 pt-1 text-gray-500">Testemunha 1</div>
                    </div>
                    <div>
                        <div className="border-t border-gray-300 pt-1 text-gray-500">Testemunha 2</div>
                    </div>
                </div>
                <div className="mt-12 flex justify-center border-t-4 border-gold pt-6">
                    <img src={CONTRACT_ICON_URL} alt="Voigt Icon" className="h-8 w-auto" crossOrigin="anonymous" />
                </div>
            </footer>
        </div>
    );
};

export default TemplateDistratoClassic;