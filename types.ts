
export interface Contratante {
  nome: string;
  cnpjCpf: string;
  telefone: string;
  email: string;
  endereco: string;
  data: string;
  // Campos opcionais para o Distrato
  dataContratoOriginal?: string;
  valorDistrato?: string;
  // Campos opcionais para Prestação de Serviços
  percentualHonorarios?: string;
  foro?: string;
  socioNome?: string;
  socioCpf?: string;
  // Novos campos para o modelo SDR
  socioNacionalidade?: string;
  socioEstadoCivil?: string;
  socioProfissao?: string;
  socioIdentidade?: string;
  socioOrgaoExpedidor?: string;
  // Campos financeiros (Versão Valores Fixos)
  tipoPagamento?: 'padrao' | 'datas'; 
  valorTotal?: string;
  valorExtenso?: string; 
  valorEntrada?: string;
  valorSaldo?: string;
  numParcelas?: string;
  valorParcela?: string;
  datasPagamento?: string; 
}

export enum TemplateType {
  Modern = 'modern',
  Classic = 'classic',
  DistratoClassic = 'distrato_classic',
  ServiceClassicPercentage = 'service_classic_percentage', 
  ServiceClassicFixed = 'service_classic_fixed',           
  ServiceClassicSDR = 'service_classic_sdr', // Nova versão SDR
}
