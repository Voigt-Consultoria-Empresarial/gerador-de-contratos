
import React from 'react';
import { Contratante } from '../types';
import { LOGO_URL_HEADER, CONTRACT_ICON_URL } from '../constants';

interface TemplateProps {
    contratante: Contratante;
    mode: 'percentage' | 'fixed'; // Prop para definir qual versão renderizar
}

const TemplateServiceClassic: React.FC<TemplateProps> = ({ contratante, mode }) => {
    
    // Parse the YYYY-MM-DD date string
    const [year, month, day] = (contratante.data || new Date().toISOString().split('T')[0]).split('-');
    
    const dateObj = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    
    const monthName = dateObj.toLocaleString('pt-BR', { month: 'long' }).toUpperCase();

    // Default values if empty
    const percentual = contratante.percentualHonorarios || "15";
    const foro = contratante.foro || "IMBITUBA/SC";
    
    // Fixed values defaults
    const valorTotal = contratante.valorTotal || "28.656,77";
    const valorEntrada = contratante.valorEntrada || "2.865,68";
    const valorSaldo = contratante.valorSaldo || "25.791,09";
    const numParcelas = contratante.numParcelas || "5";
    const valorParcela = contratante.valorParcela || "5.158,22";

    // Dados para o novo modo
    const valorExtenso = contratante.valorExtenso || "";
    const datasPagamento = contratante.datasPagamento || "";
    const tipoPagamento = contratante.tipoPagamento || 'padrao';

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
                <h1 className="text-xl sm:text-2xl font-bold text-primary mt-8 sm:mt-10 uppercase tracking-wider">CONTRATO DE PRESTAÇÃO DE SERVIÇOS</h1>
            </header>
            
            <section className="p-8 sm:p-12">
                <div className="inline-flex items-center justify-center border-2 border-primary px-6 py-2 rounded mb-6">
                    <h2 className="font-bold text-primary uppercase text-sm tracking-wider text-center m-0 p-0 pb-[6px] leading-none">Contratante</h2>
                </div>
                <div className="space-y-4 text-sm text-gray-900 mb-8">
                     <div className="grid grid-cols-1 gap-4">
                        <div className="border-b border-gray-300 pb-2 leading-relaxed">
                             <span className="font-bold">{contratante.nome || "..."}</span>, pessoa jurídica de direito privado, regularmente inscrita no CNPJ <span className="font-bold">{contratante.cnpjCpf || "..."}</span>, com sede à <span className="font-bold">{contratante.endereco || "..."}</span>, neste ato representada pelo seu administrador Sr(a). <span className="font-bold">{contratante.socioNome || "..."}</span>, inscrito(a) no CPF sob nº <span className="font-bold">{contratante.socioCpf || "..."}</span>.
                        </div>
                    </div>
                </div>
                
                <div className="mb-6 border-b border-gray-200 pb-4">
                    <p className="text-sm text-gray-900">
                        <span className="font-bold text-primary">CONTRATADA:</span> <span className="font-bold">VOIGT CONSULTORIA EMPRESARIAL LTDA</span>, sociedade empresarial inscrita no CNPJ sob o nº 63.327.299/0001-03, com sede na Rua Dr Campos Velho, nº 1695, bairro Crista, cidade de Porto Alegre/RS, CEP 90830-410.
                    </p>
                </div>
            </section>

            <section className="px-8 sm:px-12 pb-8 grid grid-cols-1 gap-y-6 text-sm leading-relaxed text-gray-900">
                <article>
                    <h3 className="font-bold text-primary uppercase mb-2">CLÁUSULA PRIMEIRA</h3>
                    <p>O presente contrato caracteriza-se como prestação de serviços técnicos/intelectuais de execução continuada na gestão de passivo tributário, que consiste em buscar a forma menos onerosa de regularização tributária e redução da dívida, tudo de acordo com a legislação vigente e devidamente processado nos sistemas oficiais da Procuradoria Geral da Fazenda Nacional (PGFN).</p>
                </article>
                <article>
                    <h3 className="font-bold text-primary uppercase mb-2">CLÁUSULA SEGUNDA</h3>
                    <p>A assessoria acima discriminada consiste na tomada de medidas e administração, tomando por base a expertise da CONTRATADA e visando sempre ao interesse da CONTRATANTE.</p>
                </article>
                <article>
                    <h3 className="font-bold text-primary uppercase mb-2">CLÁUSULA TERCEIRA – PRAZO DE DURAÇÃO</h3>
                    <p>Para o fiel desenvolvimento dos trabalhos contratados, as partes convencionam que o presente pacto perdurará até o atingimento do objetivo, qual seja, entrega da nova negociação junto a PGFN.</p>
                </article>
                
                {mode === 'percentage' ? (
                    <article>
                        <h3 className="font-bold text-primary uppercase mb-2">CLÁUSULA QUARTA – DO PREÇO E DO PAGAMENTO</h3>
                        <p>Será devido à titulo de honorários de êxito, ou seja, mediante entrega dos serviços a porcentagem de <span className="font-bold">{percentual}%</span> sob o proveito econômico auferido, valor a ser pago pela CONTRATANTE.</p>
                    </article>
                ) : (
                    <article>
                        <h3 className="font-bold text-primary uppercase mb-2">CLÁUSULA QUARTA – DO PREÇO E DO PAGAMENTO</h3>
                        {tipoPagamento === 'datas' ? (
                            <>
                                <p>O valor de R$ <span className="font-bold">{valorTotal}</span> ({valorExtenso}) à CONTRATADA. Divididos em <span className="font-bold">{numParcelas}</span> parcelas de R$ <span className="font-bold">{valorParcela}</span>. Nas datas {datasPagamento}.</p>
                                <p className="mt-2 font-semibold">PARÁGRAFO ÚNICO: O pagamento dos honorários só será realizado após a entrega das negociações.</p>
                            </>
                        ) : (
                            <>
                                <p>Será devido a título de honorários de êxito, ou seja, mediante a entrega do serviço, o valor de R$ <span className="font-bold">{valorTotal}</span>. O valor será pago pela CONTRATANTE com uma entrada de R$ <span className="font-bold">{valorEntrada}</span> e o saldo de R$ <span className="font-bold">{valorSaldo}</span> em <span className="font-bold">{numParcelas}</span> prestações iguais de R$ <span className="font-bold">{valorParcela}</span>.</p>
                                <p className="mt-2 font-semibold">PARÁGRAFO ÚNICO: O pagamento dos honorários só será realizado após a entrega das negociações.</p>
                            </>
                        )}
                    </article>
                )}

                <article>
                    <h3 className="font-bold text-primary uppercase mb-2">CLÁUSULA QUINTA – DA INADIMPLÊNCIA E RESCISÃO CONTRATUAL</h3>
                    <p>As partes convencionam que sobre as parcelas em atraso incidirá multa de 2% (dois por cento) mais juros legais de 2% (dois por cento) ao mês, capitalizado anualmente.</p>
                    <p className="mt-2"><span className="font-semibold">Parágrafo único:</span> Em caso de rescisão unilateral por parte da CONTRATANTE após a consecução dos serviços, esta pagará a totalidade dos honorários, em razão do “Know how” e propriedade intelectual aplicados na execução dos serviços prestados, salvo negociação em contrário. Neste caso, fica convencionado que, desde já, servirá o presente instrumento contratual como título executivo.</p>
                </article>
                <article>
                    <h3 className="font-bold text-primary uppercase mb-2">CLÁUSULA SEXTA – DO COMPROMISSO</h3>
                    <p>A CONTRATADA se compromete a empreender com todo o zelo e cuidado possível a execução dos serviços, utilizando-se da melhor técnica e tecnologia profissional necessária, sempre visando obter, respeitados os limites legais, o melhor resultado à CONTRATANTE.</p>
                </article>
                <article>
                    <h3 className="font-bold text-primary uppercase mb-2">CLÁUSULA SÉTIMA – DA CONFIDENCIALIDADE</h3>
                    <p>Todas as informações, dados, segredos comerciais e operacionais, formas de trabalho, projetos, documentos e outros elementos que integrem a atividade da CONTRATANTE, ou de clientes ou fornecedores desta, que venham a ser de conhecimento da CONTRATADA e seus Representantes em virtude do presente contrato são consideradas "Informações Confidenciais" e NÃO SERÃO disseminadas, divulgadas ou publicadas.</p>
                    <p className="mt-2"><span className="font-semibold">Parágrafo único:</span> Não serão consideradas Informações Confidenciais aquelas em que ficar provado que estavam no domínio público antes do seu recebimento pela CONTRATADA ou por seus Representantes.</p>
                </article>
                 <article>
                    <h3 className="font-bold text-primary uppercase mb-2">CLÁUSULA OITAVA – DO FORO</h3>
                    <p>Fica eleito o Foro da Comarca de <span className="font-bold uppercase">{foro}</span> para qualquer ação ou procedimento judicial resultante de obrigações ou direitos decorrentes do presente Contrato.</p>
                </article>
            </section>
            
            <footer className="p-8 sm:p-12">
                <div className="text-center text-sm mb-16 text-gray-500">
                    Porto Alegre/RS, <span className="font-semibold text-gray-900 px-2">{day}</span> de <span className="font-semibold text-gray-900 uppercase px-2">{monthName}</span> de <span className="font-semibold text-gray-900 px-2">{year}</span>.
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-8">
                     <div className="flex flex-col items-center">
                        <div className="w-full border-t border-gray-400 mb-2"></div>
                        <div className="text-gray-900 font-bold text-center text-xs sm:text-sm uppercase leading-tight">
                            {contratante.nome || "CONTRATANTE"}
                        </div>
                        {contratante.socioNome && (
                            <div className="text-gray-900 text-xs text-center mt-1">
                                Por: {contratante.socioNome}
                            </div>
                        )}
                        <div className="text-gray-500 text-xs mt-1">
                            Assinatura do Contratante
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-full border-t border-gray-400 mb-2"></div>
                        <div className="text-gray-900 font-bold text-center text-xs sm:text-sm uppercase leading-tight">
                            VOIGT CONSULTORIA EMPRESARIAL LTDA
                        </div>
                        <div className="text-gray-500 text-xs mt-1">
                            Assinatura da Contratada
                        </div>
                    </div>
                </div>

                <div className="mt-16 flex justify-center border-t-4 border-gold pt-6">
                    <img src={CONTRACT_ICON_URL} alt="Voigt Icon" className="h-8 w-auto" crossOrigin="anonymous" />
                </div>
            </footer>
        </div>
    );
};

export default TemplateServiceClassic;
