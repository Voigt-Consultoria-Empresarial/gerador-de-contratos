
import React from 'react';
import { Contratante, TemplateType } from '../types';
import DownloadIcon from './icons/DownloadIcon';

interface ContractFormProps {
    contratante: Contratante;
    setContratante: React.Dispatch<React.SetStateAction<Contratante>>;
    onGeneratePdf: () => void;
    loading: boolean;
    templateType?: TemplateType;
}

const ContractForm: React.FC<ContractFormProps> = ({ contratante, setContratante, onGeneratePdf, loading, templateType }) => {
    
    const formatPhone = (value: string) => {
        const numbers = value.replace(/\D/g, '');
        const limited = numbers.substring(0, 11);
        if (limited.length <= 10) {
            return limited.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
        } else {
            return limited.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
        }
    };

    const formatCnpjCpf = (value: string) => {
        const numbers = value.replace(/\D/g, '');
        const limited = numbers.substring(0, 14);
        if (limited.length <= 11) {
            return limited.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, '$1.$2.$3-$4').replace(/(-\d{2})\d+?$/, '$1');
        } else {
            return limited.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{0,2})/, '$1.$2.$3/$4-$5').replace(/(-\d{2})\d+?$/, '$1');
        }
    };
    
    const formatCurrency = (value: string) => {
        let numbers = value.replace(/\D/g, '');
        if (numbers === '') return '';
        const amount = parseFloat(numbers) / 100;
        return amount.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        let fv = value;
        if (name === 'telefone') fv = formatPhone(value);
        else if (name === 'cnpjCpf' || name === 'socioCpf') fv = formatCnpjCpf(value);
        else if (['valorDistrato', 'valorTotal', 'valorEntrada', 'valorSaldo', 'valorParcela'].includes(name)) fv = formatCurrency(value);
        setContratante(prev => ({ ...prev, [name]: fv }));
    };

    const isSDR = templateType === TemplateType.ServiceClassicSDR;

    return (
        <div className="p-6">
            <h2 className="text-lg font-bold text-primary dark:text-gold mb-5 pb-1 border-b-2 border-gold inline-block">
                {isSDR ? "Dados da Contratada" : "Dados do Contratante"}
            </h2>
            
            <div className="space-y-4">
                <div>
                    <label className="block text-xs font-semibold text-text-secondary-light dark:text-text-secondary-dark mb-1 uppercase tracking-wider">Empresa / Razão Social</label>
                    <input type="text" name="nome" value={contratante.nome} onChange={handleChange} className="w-full text-sm bg-background-light dark:bg-background-dark border-border-light dark:border-border-dark rounded-md focus:ring-gold focus:border-gold shadow-sm"/>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label className="block text-xs font-semibold text-text-secondary-light dark:text-text-secondary-dark mb-1 uppercase tracking-wider">CNPJ/CPF</label>
                        <input type="text" name="cnpjCpf" value={contratante.cnpjCpf} onChange={handleChange} maxLength={18} className="w-full text-sm bg-background-light dark:bg-background-dark border-border-light dark:border-border-dark rounded-md shadow-sm"/>
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-text-secondary-light dark:text-text-secondary-dark mb-1 uppercase tracking-wider">Telefone</label>
                        <input type="tel" name="telefone" value={contratante.telefone} onChange={handleChange} maxLength={15} className="w-full text-sm bg-background-light dark:bg-background-dark border-border-light dark:border-border-dark rounded-md shadow-sm"/>
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-semibold text-text-secondary-light dark:text-text-secondary-dark mb-1 uppercase tracking-wider">Endereço Completo</label>
                    <input type="text" name="endereco" value={contratante.endereco} onChange={handleChange} className="w-full text-sm bg-background-light dark:bg-background-dark border-border-light dark:border-border-dark rounded-md shadow-sm"/>
                </div>

                {/* Bloco de Sócio Organizado */}
                <div className="mt-6 pt-4 border-t border-border-light dark:border-border-dark">
                    <h3 className="text-sm font-bold text-primary dark:text-gold mb-4 uppercase tracking-wider">Sócio / Representante</h3>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-xs font-semibold text-text-secondary-light dark:text-text-secondary-dark mb-1 uppercase">Nome Completo</label>
                            <input type="text" name="socioNome" value={contratante.socioNome || ''} onChange={handleChange} className="w-full text-sm bg-background-light dark:bg-background-dark border-border-light dark:border-border-dark rounded-md shadow-sm"/>
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-text-secondary-light dark:text-text-secondary-dark mb-1 uppercase">CPF</label>
                            <input type="text" name="socioCpf" value={contratante.socioCpf || ''} onChange={handleChange} maxLength={14} className="w-full text-sm bg-background-light dark:bg-background-dark border-border-light dark:border-border-dark rounded-md shadow-sm"/>
                        </div>

                        {isSDR && (
                            <div className="grid grid-cols-2 gap-3">
                                <div className="col-span-2">
                                    <label className="block text-xs font-semibold text-text-secondary-light dark:text-text-secondary-dark mb-1 uppercase">Profissão</label>
                                    <input type="text" name="socioProfissao" value={contratante.socioProfissao || ''} onChange={handleChange} className="w-full text-sm bg-background-light dark:bg-background-dark border-border-light dark:border-border-dark rounded-md shadow-sm"/>
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-text-secondary-light dark:text-text-secondary-dark mb-1 uppercase">Identidade (RG)</label>
                                    <input type="text" name="socioIdentidade" value={contratante.socioIdentidade || ''} onChange={handleChange} className="w-full text-sm bg-background-light dark:bg-background-dark border-border-light dark:border-border-dark rounded-md shadow-sm"/>
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-text-secondary-light dark:text-text-secondary-dark mb-1 uppercase">Órgão Exp.</label>
                                    <input type="text" name="socioOrgaoExpedidor" value={contratante.socioOrgaoExpedidor || ''} onChange={handleChange} className="w-full text-sm bg-background-light dark:bg-background-dark border-border-light dark:border-border-dark rounded-md shadow-sm"/>
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-text-secondary-light dark:text-text-secondary-dark mb-1 uppercase">Nacionalidade</label>
                                    <input type="text" name="socioNacionalidade" value={contratante.socioNacionalidade || ''} onChange={handleChange} className="w-full text-sm bg-background-light dark:bg-background-dark border-border-light dark:border-border-dark rounded-md shadow-sm"/>
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-text-secondary-light dark:text-text-secondary-dark mb-1 uppercase">Est. Civil</label>
                                    <input type="text" name="socioEstadoCivil" value={contratante.socioEstadoCivil || ''} onChange={handleChange} className="w-full text-sm bg-background-light dark:bg-background-dark border-border-light dark:border-border-dark rounded-md shadow-sm"/>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Datas e Local */}
                <div className="pt-4 border-t border-border-light dark:border-border-dark">
                    <div className="grid grid-cols-2 gap-3">
                        <div className="col-span-2">
                            <label className="block text-xs font-semibold text-text-secondary-light dark:text-text-secondary-dark mb-1 uppercase">Foro (Cidade/UF)</label>
                            <input type="text" name="foro" value={contratante.foro || ''} onChange={handleChange} className="w-full text-sm bg-background-light dark:bg-background-dark border-border-light dark:border-border-dark rounded-md shadow-sm"/>
                        </div>
                        <div className="col-span-2">
                            <label className="block text-xs font-semibold text-text-secondary-light dark:text-text-secondary-dark mb-1 uppercase">Data do Contrato</label>
                            <input type="date" name="data" value={contratante.data} onChange={handleChange} className="w-full text-sm bg-background-light dark:bg-background-dark border-border-light dark:border-border-dark rounded-md shadow-sm"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <button
                    onClick={onGeneratePdf}
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-3 bg-gold text-primary font-bold py-3 rounded-lg hover:brightness-110 active:scale-95 transition-all shadow-lg disabled:opacity-50"
                >
                    {loading ? "Processando..." : <><DownloadIcon /> Gerar PDF</>}
                </button>
            </div>
        </div>
    );
};

export default ContractForm;
