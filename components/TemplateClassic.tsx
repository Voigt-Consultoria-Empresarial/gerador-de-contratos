
import React from 'react';
import { Contratante } from '../types';
import { LOGO_URL_HEADER, CONTRACT_ICON_URL } from '../constants';

interface TemplateProps {
    contratante: Contratante;
}

const TemplateClassic: React.FC<TemplateProps> = ({ contratante }) => {
    
    // Parse the YYYY-MM-DD date string to avoid timezone issues with `new Date()`
    const [year, month, day] = (contratante.data || new Date().toISOString().split('T')[0]).split('-');
    
    // Create date object (Month is 0-indexed)
    const dateObj = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    
    const monthName = dateObj.toLocaleString('pt-BR', { month: 'long' }).toUpperCase();

    // Classes forçadas para modo claro (papel) para garantir impressão correta e contraste
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
                <h1 className="text-xl sm:text-2xl font-bold text-primary mt-8 sm:mt-10 uppercase tracking-wider">Plano de Recuperação Empresarial</h1>
            </header>
            <section className="p-8 sm:p-12">
                {/* Ajuste: Padding bottom de 6px no h2 para ajuste fino de centralização na impressão */}
                <div className="inline-flex items-center justify-center border-2 border-primary px-6 py-2 rounded mb-6">
                    <h2 className="font-bold text-primary uppercase text-sm tracking-wider text-center m-0 p-0 pb-[6px] leading-none">Contratante</h2>
                </div>
                <div className="space-y-4 text-sm text-gray-900">
                    <div className="grid grid-cols-1 gap-4">
                        <div className="border-b border-gray-300 pb-2">
                            <label className="font-semibold">Nome:</label>
                            <span className="ml-2">{contratante.nome || "..."}</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                        <div className="border-b border-gray-300 pb-2">
                            <label className="font-semibold">CNPJ/CPF:</label>
                            <span className="ml-2">{contratante.cnpjCpf || "..."}</span>
                        </div>
                        <div className="border-b border-gray-300 pb-2">
                            <label className="font-semibold">Telefone:</label>
                            <span className="ml-2">{contratante.telefone || "..."}</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        <div className="border-b border-gray-300 pb-2">
                            <label className="font-semibold">E-mail:</label>
                            <span className="ml-2">{contratante.email || "..."}</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        <div className="border-b border-gray-300 pb-2">
                            <label className="font-semibold">Endereço:</label>
                            <span className="ml-2">{contratante.endereco || "..."}</span>
                        </div>
                    </div>
                </div>
            </section>
            <hr className="mx-8 sm:mx-12 border-gray-300"/>
            <section className="p-8 sm:p-12 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 text-sm leading-relaxed text-gray-900">
                <div className="space-y-6">
                    <article>
                        <h3 className="font-bold text-primary uppercase mb-2">Cláusula Primeira - Objeto do Contrato</h3>
                        <p>1.1. O presente contrato tem como objeto a prestação, pelo CONTRATADO, dos seguintes serviços: ASSESSORIA JURÍDICA MENSAL.</p>
                    </article>
                    <article>
                        <h3 className="font-bold text-primary uppercase mb-2">Cláusula Segunda - Prazo</h3>
                        <p>2.1. O presente contrato terá duração de 6 meses a contar da assinatura e pagamento, podendo ser prorrogado mediante acordo entre as partes.</p>
                    </article>
                    <article>
                        <h3 className="font-bold text-primary uppercase mb-2">Cláusula Terceira - Remuneração</h3>
                        <p>3.1. Pela prestação dos serviços, o CONTRATANTE pagará ao CONTRATADO o valor descrito na área reservada para tal.</p>
                    </article>
                    <article>
                        <h3 className="font-bold text-primary uppercase mb-2">Cláusula Quarta - Obrigações do Contratado</h3>
                        <p>4.1. Realizar os serviços contratados com diligência, responsabilidade e dentro dos prazos estabelecidos.</p>
                        <p>4.2. Manter sigilo sobre todas as informações e documentos a que tiver acesso em razão do presente contrato.</p>
                    </article>
                </div>
                <div className="space-y-6">
                    <article>
                        <h3 className="font-bold text-primary uppercase mb-2">Cláusula Quinta - Obrigações do Contratante</h3>
                        <p>5.1. Fornecer todas as informações e documentos necessários para a execução dos serviços.</p>
                        <p>5.2. Efetuar o pagamento conforme estabelecido na cláusula terceira.</p>
                    </article>
                    <article>
                        <h3 className="font-bold text-primary uppercase mb-2">Cláusula Sexta - Rescisão</h3>
                        <p>6.1. O presente contrato poderá ser rescindido por qualquer das partes, mediante aviso prévio de 30 dias, desde que a outra parte não tenha cumprido suas obrigações contratuais.</p>
                    </article>
                    <article>
                        <h3 className="font-bold text-primary uppercase mb-2">Cláusula Sétima - Penalidades</h3>
                        <p>7.1. Em caso de descumprimento de qualquer cláusula deste contrato, a parte inadimplente deverá pagar à parte prejudicada uma multa equivalente a 10%.</p>
                    </article>
                    <article>
                        <h3 className="font-bold text-primary uppercase mb-2">Cláusula Oitava - Disposições Gerais</h3>
                        <p>8.1. As partes elegem o foro da Comarca de PORTO ALEGRE para dirimir quaisquer questões oriundas deste contrato, com renúncia a qualquer outro, por mais privilegiado que seja.</p>
                        <p>8.2. O presente contrato é firmado em duas vias de igual teor, sendo uma para cada parte.</p>
                    </article>
                </div>
            </section>
            <footer className="p-8 sm:p-12">
                <div className="text-center text-sm mb-16 text-gray-500">
                    Porto Alegre, <span className="font-semibold text-gray-900 px-2">{day}</span> de <span className="font-semibold text-gray-900 uppercase px-2">{monthName}</span> de <span className="font-semibold text-gray-900 px-2">{year}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-16 text-center text-sm">
                    <div>
                        <div className="border-t border-gray-400 pt-2 text-gray-900">Assinatura Contratante</div>
                    </div>
                    <div>
                        <div className="border-t border-gray-400 pt-2 text-gray-900">Assinatura Contratado</div>
                    </div>
                </div>
                <div className="mt-20 flex justify-center border-t-4 border-gold pt-6">
                    <img src={CONTRACT_ICON_URL} alt="Voigt Icon" className="h-8 w-auto" crossOrigin="anonymous" />
                </div>
            </footer>
        </div>
    );
};

export default TemplateClassic;
