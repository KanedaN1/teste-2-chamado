
export const PRIORIDADE = [  
  'Baixa',
  'Média',
  'Urgente'
];

export const TICKET_STATUS = [
  'Aberto',
  'Em Atendimento',
  'Finalizado'
];

export const SERVICE_TYPE = [
  'Presencial',
  'E-mail'
];

export const TI_STAFF = [
  'Pedro Dias',
  'Tiago Henrique'
];

/*export interface Ticket {
  id: string;
  nome: string;
  setor: string;
  email: string;
  descricao: string;
  prioridade: Priority;
  prefAtendente: TiStaff;
  status: TicketStatus;
  criadoEm: number;
  inicioEm: number;
  finalizadoEm: number;
  tipo: ServiceType;
  resolucao?: string;
}
*/

export interface SLAConfig {
  [key: string]: number; 
}

export const ADMIN_PASSWORD = 'TI#2026@DEV';

export const SECTORS = [
  'Arquivos',
  'Comercial',
  'Departamento Operacional',
  'Departamento Pessoal',
  'Financeiro',
  'Juridico',
  'Recursos Humanos',
  'Sesmet',
] as const;

export type Sector = (typeof SECTORS)[number];

export const SECTOR_COLORS: Record<Sector, string> = {
  'Arquivos': 'bg-slate-100 text-slate-700 dark:bg-slate-900/40 dark:text-slate-300',
  'Comercial': 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  'Departamento Operacional': 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300',
  'Departamento Pessoal': 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300',
  'Financeiro': 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
  'Juridico': 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300',
  'Recursos Humanos': 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
  'Sesmet': 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300'
};

export const SLATimes: SLAConfig = {
  [PRIORIDADE[0]]: 8,
  [PRIORIDADE[1]]: 4,
  [PRIORIDADE[2]]: 2,
};

export const MOTIVOS_PREDEFINIDOS = [
  "Dúvida",
  "Problema no sistema Sar2g",
  "Problema no sistema Datamace",
  "Problema de rede",
  "Problema no ambiente da área de trabalho",
  "Alterações de sistema",
  "Problema no sistema Contele"
] as const;

export type Motivo = (typeof MOTIVOS_PREDEFINIDOS)[number];