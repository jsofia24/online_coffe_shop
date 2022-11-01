import {Entity, model, property} from '@loopback/repository';

@model()
export class OrdenDetalle extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  ordenId: string;

  @property({
    type: 'string',
    required: true,
  })
  productoId: string;

  @property({
    type: 'number',
    required: true,
  })
  cantidad: number;

  @property({
    type: 'number',
    required: true,
  })
  total: number;


  constructor(data?: Partial<OrdenDetalle>) {
    super(data);
  }
}

export interface OrdenDetalleRelations {
  // describe navigational properties here
}

export type OrdenDetalleWithRelations = OrdenDetalle & OrdenDetalleRelations;
