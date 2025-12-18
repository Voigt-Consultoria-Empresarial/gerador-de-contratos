
import React from 'react';
import { Contratante } from '../types';
import { LOGO_URL_HEADER, CONTRACT_ICON_URL } from '../constants';

interface TemplateProps {
    contratante: Contratante;
}

const TemplateServiceSDR: React.FC<TemplateProps> = ({ contratante }) => {
    
    const [year, month, day] = (contratante.data || new Date().toISOString().split('T')[0]).split('-');
    const dateObj = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    const monthName = dateObj.toLocaleString('pt-BR', { month: 'long' }).toUpperCase();

    const foro = contratante.foro || "PORTO ALEGRE/RS";

    return (
        <div className="bg-white text-gray-900 w-full h-full font-sans">
            {/* Header Padrão Classic */}
            <header className="p-8 sm:p-12 border-b-4 border-primary">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                    <div>
                        <img alt="Voigt Consultoria Empresarial Logo" className="h-12 w-auto" src={LOGO_URL_HEADER} crossOrigin="anonymous"/>
                    </div>
                    <div className="text-right text-xs sm:text-sm text-gray-500">
                        <p className="font-semibold text-gray-900 uppercase">VOIGT CONSULTORIA EMPRESARIAL</p>
                        <p>@voigt.consultoriaempresarial</p>
                        <p>www.voigtconsultoria.com.br</p>
                    </div>
                </div>
                <h1 className="text-xl sm:text-2xl font-bold text-primary mt-8 sm:mt-10 uppercase tracking-wider">CONTRATO DE PRESTAÇÃO DE SERVIÇOS SDR</h1>
            </header>
            
            {/* Bloco de Qualificação das Partes */}
            <section className="p-8 sm:p-12">
                <div className="inline-flex items-center justify-center border-2 border-primary px-6 py-2 rounded mb-6">
                    <h2 className="font-bold text-primary uppercase text-sm tracking-wider text-center m-0 p-0 pb-[6px] leading-none">Contratante</h2>
                </div>
                <div className="text-sm text-gray-900 mb-8 leading-relaxed text-justify">
                    <p>
                        <span className="font-bold">VOIGT CONSULTORIA EMPRESARIAL</span>, Microempresa inscrita no CNPJ sob o nº 63.327.299/0001-03, com sede na RUA Dr Campos Velho, número 1695, bairro Cavalhada, município de PORTO ALEGRE - RS, CEP: 90.820-001., regularmente representada por seu Sócio Administrador, o Sr. <span className="font-bold uppercase">LUCAS DA ROSA DA SILVA</span>, nacionalidade BRASILEIRA, Solteiro, nascido em 10/02/1998, profissão: EMPRESÁRIO, nº do CPF: 866.571.190-20, identidade: 8098103909, órgão expedidor: SSP-RS, residente e domiciliado na RUA GREGORIO PEREZ, número 251, bairro CAVALHADA, município PORTO ALEGRE - RS, CEP: 91.740-350.
                    </p>
                </div>

                <div className="inline-flex items-center justify-center border-2 border-primary px-6 py-2 rounded mb-6">
                    <h2 className="font-bold text-primary uppercase text-sm tracking-wider text-center m-0 p-0 pb-[6px] leading-none">Contratada</h2>
                </div>
                <div className="text-sm text-gray-900 mb-8 leading-relaxed text-justify">
                    <p>
                        <span className="font-bold uppercase">{contratante.nome || "[NOME DA EMPRESA]"}</span>, inscrito(a) no CNPJ sob o nº <span className="font-bold">{contratante.cnpjCpf || "[XXXXX]"}</span>, com sede na <span className="font-bold">{contratante.endereco || "[ENDEREÇO]"}</span>, regularmente representada por seu Sócio Administrador, o Sr. <span className="font-bold uppercase">{contratante.socioNome || "[NOME DO SÓCIO]"}</span>, {contratante.socioNacionalidade || "brasileiro(a)"}, {contratante.socioEstadoCivil || "solteiro(a)"}, {contratante.socioProfissao || "profissional"}, portador da cédula de identidade sob o nº {contratante.socioIdentidade || "[XXXXX]"} {contratante.socioOrgaoExpedidor || "[ÓRGÃO]"}, inscrito no CPF sob o nº <span className="font-bold">{contratante.socioCpf || "[XXXXX]"}</span>.
                    </p>
                </div>
            </section>

            {/* Cláusulas Espaçadas e Padronizadas */}
            <section className="px-8 sm:px-12 pb-12 grid grid-cols-1 gap-y-8 text-sm leading-relaxed text-gray-900 text-justify">
                <article>
                    <h3 className="font-bold text-primary uppercase mb-2">CLÁUSULA PRIMEIRA – DO OBJETO</h3>
                    <p>O presente contrato tem por objeto a prestação de serviços profissionais pela CONTRATADA, na qualidade de SDR (Sales Development Representative), consistentes na prospecção ativa de potenciais clientes, qualificação de leads, primeiro contato comercial e agendamento de oportunidades de negócio em favor da CONTRATANTE.</p>
                    <p className="mt-2 font-semibold">Parágrafo Único — Entende-se por serviços de SDR a atividade de identificação, abordagem inicial e qualificação de potenciais clientes com o objetivo de gerar oportunidades comerciais reais para a CONTRATANTE.</p>
                </article>

                <article>
                    <h3 className="font-bold text-primary uppercase mb-2">CLÁUSULA SEGUNDA – DAS OBRIGAÇÕES DA CONTRATADA</h3>
                    <p>Obriga-se a CONTRATADA a executar os serviços descritos com zelo, diligência e boa-fé. Deve realizar atividades contínuas de prospecção, efetuar contato inicial lícito com leads e registrar oportunidades em relatórios periódicos.</p>
                    <p className="mt-2 font-semibold">Parágrafo Único — A execução será realizada em regime de autonomia técnica e organizacional, inexistindo qualquer subordinação jurídica.</p>
                </article>

                <article>
                    <h3 className="font-bold text-primary uppercase mb-2">CLÁUSULA TERCEIRA — DA REMUNERAÇÃO E DO COMISSIONAMENTO</h3>
                    <p>Não haverá remuneração fixa. A contraprestação será exclusivamente por comissão de <span className="font-bold">30% (trinta por cento)</span> do valor líquido efetivamente recebido pela CONTRATANTE em decorrência dos negócios prospectados.</p>
                    <p className="mt-2">I — Pagamento à vista: comissão de 30% paga até a sexta-feira da mesma semana da confirmação do recebimento;</p>
                    <p>II — Pagamento parcelado: comissão de 30% sobre cada parcela, paga até a sexta-feira da semana do recebimento.</p>
                </article>

                <article>
                    <h3 className="font-bold text-primary uppercase mb-2">CLÁUSULA QUARTA — DO INADIMPLEMENTO DOS CLIENTES</h3>
                    <p>Na hipótese de inadimplemento, atraso ou cancelamento dos valores devidos pelos clientes, a CONTRATANTE fica desobrigada do pagamento da comissão até o efetivo recebimento.</p>
                </article>

                <article>
                    <h3 className="font-bold text-primary uppercase mb-2">CLÁUSULA QUINTA – DA RESCISÃO CONTRATUAL</h3>
                    <p>O contrato poderá ser rescindido por qualquer das partes mediante comunicação escrita com antecedência mínima de 10 (dez) dias. Em caso de rescisão imotivada, devida multa de 10% sobre a média das comissões dos últimos 3 meses.</p>
                </article>

                <article>
                    <h3 className="font-bold text-primary uppercase mb-2">CLÁUSULA SEXTA – ENCARGOS E VÍNCULO</h3>
                    <p>A CONTRATADA é responsável por todos os tributos e encargos decorrentes desta prestação, inexistindo qualquer vínculo empregatício com a CONTRATANTE.</p>
                </article>

                <article>
                    <h3 className="font-bold text-primary uppercase mb-2">CLÁUSULA SÉTIMA – OBRIGAÇÕES DA CONTRATANTE</h3>
                    <p>A CONTRATANTE obriga-se a fornecer informações essenciais sobre produtos, fornecer treinamentos básicos e informar os resultados das negociações para apuração das comissões.</p>
                </article>

                <article>
                    <h3 className="font-bold text-primary uppercase mb-2">CLÁUSULA DÉCIMA PRIMEIRA – FORO</h3>
                    <p>Fica eleito o Foro da Comarca de <span className="font-bold uppercase">{foro}</span> para dirimir quaisquer controvérsias oriundas deste instrumento.</p>
                </article>
            </section>
            
            {/* Footer Padrão Classic */}
            <footer className="p-8 sm:p-12 pt-0">
                <div className="text-center text-sm mb-16 text-gray-500">
                    {foro.split('/')[0]}, <span className="font-semibold text-gray-900 px-2">{day}</span> de <span className="font-semibold text-gray-900 uppercase px-2">{monthName}</span> de <span className="font-semibold text-gray-900 px-2">{year}</span>.
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-8">
                     <div className="flex flex-col items-center">
                        <div className="w-full border-t border-gray-400 mb-2"></div>
                        <div className="text-gray-900 font-bold text-center text-xs sm:text-sm uppercase leading-tight">
                            VOIGT CONSULTORIA EMPRESARIAL
                        </div>
                        <div className="text-gray-500 text-xs mt-1">CONTRATANTE</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-full border-t border-gray-400 mb-2"></div>
                        <div className="text-gray-900 font-bold text-center text-xs sm:text-sm uppercase leading-tight">
                            {contratante.nome || "A CONTRATADA"}
                        </div>
                        <div className="text-gray-500 text-xs mt-1">CONTRATADA</div>
                    </div>
                </div>

                <div className="mt-16 flex justify-center border-t-4 border-gold pt-6">
                    <img src={CONTRACT_ICON_URL} alt="Voigt Icon" className="h-8 w-auto" crossOrigin="anonymous" />
                </div>
            </footer>
        </div>
    );
};

export default TemplateServiceSDR;
