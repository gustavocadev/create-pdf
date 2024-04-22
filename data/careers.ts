import { createId } from '@paralleldrive/cuid2';

export const computacionInformaticaId = createId();
export const contabilidadId = createId();

export const careers = [
  {
    id: computacionInformaticaId,
    name: 'COMPUTACIÓN E INFORMÁTICA',
    code: 'COMPU001',
    requiredCredits: 98,
  },
  {
    id: contabilidadId,
    name: 'CONTABILIDAD',
    code: 'CONTA002',
    requiredCredits: 92,
  },
];
