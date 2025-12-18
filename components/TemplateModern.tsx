
import React from 'react';
import { Contratante } from '../types';
import { LOGO_URL_HEADER, CONTRACT_ICON_URL } from '../constants';

interface TemplateProps {
    contratante: Contratante;
}

const TemplateModern: React.FC<TemplateProps> = ({ contratante }) => {
    
    // Parse the YYYY-MM-DD date string to avoid timezone issues with `new Date()`
    const [year, month, day] = (contratante.data || new Date().toISOString().split('T')[0]).split('-');
    
    // Create date object (Month is 0-indexed)
    const dateObj = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    
    const monthName = dateObj.toLocaleString('pt-BR', { month: 'long' }).toUpperCase();

    // Classes forçadas para modo claro (papel) para garantir impressão correta e contraste
    return (
        <div className="bg-white text-gray-900 w-full h-full">
             <header className="bg-primary shadow-md print:shadow-none">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-24">
                        <div className="flex-shrink-0">
                            <img alt="Voigt Consultoria Empresarial Logo" className="h-12 w-auto brightness-0 invert" src={LOGO_URL_HEADER} crossOrigin="anonymous"/>
                        </div>
                        <div className="flex items-center space-x-3">
                            <img src={CONTRACT_ICON_URL} alt="Icon" className="h-8 w-auto" crossOrigin="anonymous" />
                            <div className="w-px h-8 bg-white/70"></div>
                            <p className="text-white text-sm hidden sm:block">@voigt.consultoriaempresarial</p>
                        </div>
                    </div>
                </div>
                <div className="h-1.5 bg-gradient-to-r from-primary via-white/70 to-primary"></div>
            </header>
            
            <div className="p-6 sm:p-10">
                <div className="text-center border-b border-gray-200 pb-6 mb-6">
                    <h1 className="text-2xl sm:text-3xl font-bold text-primary uppercase tracking-wider">Plano de Recuperação Empresarial</h1>
                </div>

                <section className="mb-12">
                    {/* Forçando text-primary (#0A2D57) explicitamente para garantir visibilidade */}
                    <h2 className="text-xl font-bold text-primary mb-6 pb-2 border-b-2 border-primary inline-block">CONTRATANTE</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-base">
                        <div className="flex flex-col"><label className="font-semibold text-gray-600 mb-1">Nome:</label><span className="p-3 bg-gray-50 rounded-md border border-gray-200 min-h-[44px]">{contratante.nome || "..."}</span></div>
                        <div className="flex flex-col"><label className="font-semibold text-gray-600 mb-1">CNPJ/CPF:</label><span className="p-3 bg-gray-50 rounded-md border border-gray-200 min-h-[44px]">{contratante.cnpjCpf || "..."}</span></div>
                        <div className="flex flex-col"><label className="font-semibold text-gray-600 mb-1">Telefone:</label><span className="p-3 bg-gray-50 rounded-md border border-gray-200 min-h-[44px]">{contratante.telefone || "..."}</span></div>
                        <div className="flex flex-col"><label className="font-semibold text-gray-600 mb-1">E-mail:</label><span className="p-3 bg-gray-50 rounded-md border border-gray-200 min-h-[44px]">{contratante.email || "..."}</span></div>
                        <div className="flex flex-col md:col-span-2"><label className="font-semibold text-gray-600 mb-1">Endereço:</label><span className="p-3 bg-gray-50 rounded-md border border-gray-200 min-h-[44px]">{contratante.endereco || "..."}</span></div>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-primary mb-8 pb-2 border-b-2 border-primary inline-block">CLÁUSULAS CONTRATUAIS</h2>
                    <div className="space-y-8 text-base leading-relaxed prose prose-sm max-w-none text-gray-900">
                        <article>
                            <h3 className="font-bold text-primary uppercase mb-2">Cláusula Primeira - Objeto do Contrato</h3>
                            <p className="text-gray-600">1.1. O presente contrato tem como objeto a prestação, pelo CONTRATADO, dos seguintes serviços: ASSESSORIA JURÍDICA MENSAL.</p>
                        </article>
                        <article>
                            <h3 className="font-bold text-primary uppercase mb-2">Cláusula Segunda - Prazo</h3>
                            <p className="text-gray-600">2.1. O presente contrato terá duração de 6 meses a contar da assinatura e pagamento, podendo ser prorrogado mediante acordo entre as partes.</p>
                        </article>
                        <article>
                            <h3 className="font-bold text-primary uppercase mb-2">Cláusula Terceira - Remuneração</h3>
                            <p className="text-gray-600">3.1. Pela prestação dos serviços, o CONTRATANTE pagará ao CONTRATADO o valor descrito na área reservada para tal.</p>
                        </article>
                         <article>
                            <h3 className="font-bold text-primary uppercase mb-2">Cláusula Quarta - Obrigações do Contratado</h3>
                            <p className="text-gray-600">4.1. Realizar os serviços contratados com diligência, responsabilidade e dentro dos prazos estabelecidos.</p>
                            <p className="text-gray-600">4.2. Manter sigilo sobre todas as informações e documentos a que tiver acesso em razão do presente contrato.</p>
                        </article>
                        <article>
                            <h3 className="font-bold text-primary uppercase mb-2">Cláusula Quinta - Obrigações do Contratante</h3>
                            <p className="text-gray-600">5.1. Fornecer todas as informações e documentos necessários para a execução dos serviços.</p>
                            <p className="text-gray-600">5.2. Efetuar o pagamento conforme estabelecido na cláusula terceira.</p>
                        </article>
                        <article>
                            <h3 className="font-bold text-primary uppercase mb-2">Cláusula Sexta - Rescisão</h3>
                            <p className="text-gray-600">6.1. O presente contrato poderá ser rescindido por qualquer das partes, mediante aviso prévio de 30 dias, desde que a outra parte não tenha cumprido suas obrigações contratuais.</p>
                        </article>
                        <article>
                            <h3 className="font-bold text-primary uppercase mb-2">Cláusula Sétima - Penalidades</h3>
                            <p className="text-gray-600">7.1. Em caso de descumprimento de qualquer cláusula deste contrato, a parte inadimplente deverá pagar à parte prejudicada uma multa equivalente a 10%.</p>
                        </article>
                        <article>
                            <h3 className="font-bold text-primary uppercase mb-2">Cláusula Oitava - Disposições Gerais</h3>
                            <p className="text-gray-600">8.1. As partes elegem o foro da Comarca de PORTO ALEGRE para dirimir quaisquer questões oriundas deste contrato, com renúncia a qualquer outro, por mais privilegiado que seja.</p>
                            <p className="text-gray-600">8.2. O presente contrato é firmado em duas vias de igual teor, sendo uma para cada parte.</p>
                        </article>
                    </div>
                </section>
            </div>
             <footer className="bg-white p-6 sm:p-10">
                <div className="text-center mb-10">
                    <p className="text-gray-600">Porto Alegre, <span className="font-semibold text-gray-900">{day}</span> de <span className="font-semibold text-gray-900 uppercase">{monthName}</span> de <span className="font-semibold text-gray-900">{year}</span></p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="flex flex-col items-center">
                        <div className="w-full max-w-sm h-12 border-b-2 border-gray-400"></div>
                        <p className="mt-3 font-semibold text-center text-gray-900">Assinatura Contratante</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-full max-w-sm h-12 border-b-2 border-gray-400"></div>
                        <p className="mt-3 font-semibold text-center text-gray-900">Assinatura Contratado</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default TemplateModern;
