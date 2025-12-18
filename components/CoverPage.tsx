
import React from 'react';
import { TemplateType } from '../types';
import BalanceIcon from './icons/BalanceIcon';
import DocumentIcon from './icons/DocumentIcon';
import LockIcon from './icons/LockIcon';
import ScoreIcon from './icons/ScoreIcon';
import { LOGO_URL_HEADER, BACKGROUND_DESIGN_URL } from '../constants';

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    dark?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, dark = false }) => (
    <div className={`flex items-center p-3 sm:p-4 rounded-lg shadow-sm ${dark ? 'bg-primary/80' : 'bg-white'}`}>
        <div className={`mr-3 sm:mr-4 p-2 rounded-full flex-shrink-0 ${dark ? 'bg-white/20 text-white' : 'bg-primary/10 text-primary'}`}>
            {icon}
        </div>
        <span className={`text-sm sm:text-base font-semibold ${dark ? 'text-white' : 'text-primary'}`}>{title}</span>
    </div>
);

// Defined missing interface for CoverPage props
interface CoverPageProps {
    onTemplateSelect: (template: TemplateType) => void;
}

const CoverPage: React.FC<CoverPageProps> = ({ onTemplateSelect }) => {
    
    return (
        <div className="flex flex-col items-center justify-center p-4 sm:p-6 w-full">
            <header className="text-center mb-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-primary dark:text-gold">Gerador de Contrato</h1>
                <p className="text-text-secondary-light dark:text-text-secondary-dark mt-2">Escolha um modelo para começar.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
                {/* Classic Template Option */}
                <div className="border border-border-light dark:border-border-dark rounded-xl p-6 flex flex-col bg-surface-light dark:bg-surface-dark hover:shadow-2xl hover:scale-105 transition-all duration-300">
                    <div className="flex-grow">
                        <img src={LOGO_URL_HEADER} alt="Voigt Logo" className="h-12 w-auto mx-auto mb-6" crossOrigin="anonymous" />
                        <h2 className="text-xl font-bold text-primary dark:text-white text-center mb-2">PLANO DE RECUPERAÇÃO</h2>
                        <p className="text-center text-sm text-gray-500 mb-2 font-semibold">ESTILO CLÁSSICO</p>
                        <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
                        <div className="space-y-3">
                            <FeatureCard icon={<BalanceIcon />} title="Assessoria jurídica" />
                            <FeatureCard icon={<DocumentIcon />} title="Contratos bancários" />
                        </div>
                    </div>
                    <button 
                        onClick={() => onTemplateSelect(TemplateType.Classic)}
                        className="mt-6 w-full bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-background-dark">
                        Selecionar Clássico
                    </button>
                </div>
                
                {/* Modern Template Option */}
                <div className="rounded-xl p-6 flex flex-col bg-primary hover:shadow-2xl hover:scale-105 transition-all duration-300" style={{backgroundImage: `linear-gradient(rgba(10, 45, 87, 0.95), rgba(10, 45, 87, 0.95)), url(${BACKGROUND_DESIGN_URL})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    <div className="flex-grow">
                        <img src={LOGO_URL_HEADER} alt="Voigt Logo" className="h-12 w-auto mx-auto mb-6 brightness-0 invert" crossOrigin="anonymous" />
                        <h2 className="text-xl font-bold text-white text-center mb-2">PLANO DE RECUPERAÇÃO</h2>
                        <p className="text-center text-sm text-gray-300 mb-2 font-semibold">ESTILO MODERNO</p>
                        <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
                        <div className="space-y-3">
                            <FeatureCard icon={<BalanceIcon />} title="Assessoria jurídica" dark={true} />
                            <FeatureCard icon={<DocumentIcon />} title="Contratos bancários" dark={true} />
                        </div>
                    </div>
                     <button 
                        onClick={() => onTemplateSelect(TemplateType.Modern)}
                        className="mt-6 w-full bg-white text-primary font-bold py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white dark:focus:ring-offset-primary">
                        Selecionar Moderno
                    </button>
                </div>

                {/* SDR Contract Option - NOVO */}
                <div className="border border-border-light dark:border-border-dark rounded-xl p-6 flex flex-col bg-surface-light dark:bg-surface-dark hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-aqua-green text-white text-xs font-bold px-3 py-1 rounded-bl-lg">NOVO</div>
                    <div className="flex-grow">
                        <img src={LOGO_URL_HEADER} alt="Voigt Logo" className="h-12 w-auto mx-auto mb-6" crossOrigin="anonymous" />
                        <h2 className="text-xl font-bold text-primary dark:text-white text-center mb-2 uppercase">Serviços SDR Oficial</h2>
                        <p className="text-center text-sm text-gray-500 mb-2 font-semibold">COMISSIONADO (30%)</p>
                        <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
                        <div className="space-y-3">
                            <FeatureCard icon={<BalanceIcon />} title="Prospecção de Leads" />
                            <FeatureCard icon={<DocumentIcon />} title="Agendamento de Vendas" />
                        </div>
                    </div>
                    <button 
                        onClick={() => onTemplateSelect(TemplateType.ServiceClassicSDR)}
                        className="mt-6 w-full bg-aqua-green text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-aqua-green dark:focus:ring-offset-background-dark">
                        Selecionar SDR
                    </button>
                </div>

                {/* Services Contract Option - PERCENTAGE */}
                <div className="border border-border-light dark:border-border-dark rounded-xl p-6 flex flex-col bg-surface-light dark:bg-surface-dark hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden">
                    <div className="flex-grow">
                        <img src={LOGO_URL_HEADER} alt="Voigt Logo" className="h-12 w-auto mx-auto mb-6" crossOrigin="anonymous" />
                        <h2 className="text-xl font-bold text-primary dark:text-white text-center mb-2">PRESTAÇÃO DE SERVIÇOS</h2>
                        <p className="text-center text-sm text-gray-500 mb-2 font-semibold">PORCENTAGEM (%)</p>
                        <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
                        <div className="space-y-3">
                            <FeatureCard icon={<BalanceIcon />} title="Honorários de Êxito (%)" />
                            <FeatureCard icon={<DocumentIcon />} title="Gestão Tributária" />
                        </div>
                    </div>
                    <button 
                        onClick={() => onTemplateSelect(TemplateType.ServiceClassicPercentage)}
                        className="mt-6 w-full bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-background-dark">
                        Selecionar ( % )
                    </button>
                </div>

                 {/* Services Contract Option - FIXED VALUES */}
                 <div className="border border-border-light dark:border-border-dark rounded-xl p-6 flex flex-col bg-surface-light dark:bg-surface-dark hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-gold text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
                    <div className="flex-grow">
                        <img src={LOGO_URL_HEADER} alt="Voigt Logo" className="h-12 w-auto mx-auto mb-6" crossOrigin="anonymous" />
                        <h2 className="text-xl font-bold text-primary dark:text-white text-center mb-2">PRESTAÇÃO DE SERVIÇOS</h2>
                        <p className="text-center text-sm text-gray-500 mb-2 font-semibold">VALORES FIXOS (R$)</p>
                        <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
                        <div className="space-y-3">
                            <FeatureCard icon={<BalanceIcon />} title="Entrada + Parcelas" />
                            <FeatureCard icon={<DocumentIcon />} title="Gestão Tributária" />
                        </div>
                    </div>
                    <button 
                        onClick={() => onTemplateSelect(TemplateType.ServiceClassicFixed)}
                        className="mt-6 w-full bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-background-dark">
                        Selecionar ( R$ )
                    </button>
                </div>

                {/* Distrato Option */}
                <div className="border border-border-light dark:border-border-dark rounded-xl p-6 flex flex-col bg-surface-light dark:bg-surface-dark hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden">
                     <div className="flex-grow">
                        <img src={LOGO_URL_HEADER} alt="Voigt Logo" className="h-12 w-auto mx-auto mb-6" crossOrigin="anonymous" />
                        <h2 className="text-xl font-bold text-primary dark:text-white text-center mb-2">DISTRATO DE SERVIÇOS</h2>
                        <p className="text-center text-sm text-gray-500 mb-2 font-semibold">ESTILO CLÁSSICO</p>
                        <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
                        <div className="space-y-3">
                            <FeatureCard icon={<LockIcon />} title="Rescisão Contratual" />
                            <FeatureCard icon={<ScoreIcon />} title="Termo de Quitação" />
                        </div>
                    </div>
                    <button 
                        onClick={() => onTemplateSelect(TemplateType.DistratoClassic)}
                        className="mt-6 w-full bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-background-dark">
                        Selecionar Distrato
                    </button>
                </div>

            </div>
        </div>
    );
};

export default CoverPage;
