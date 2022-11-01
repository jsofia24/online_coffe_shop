import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Orden} from './orden.model';
import {Producto} from './producto.model';

@model()
export class OrdenDetalle extends Entity {
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

  @belongsTo(() => Orden)
  ordenId: string;

  @belongsTo(() => Producto)
  productoId: string;

  constructor(data?: Partial<OrdenDetalle>) {
    super(data);
  }
}

export interface OrdenDetalleRelations {
  // describe navigational properties here
}

export type OrdenDetalleWithRelations = OrdenDetalle & OrdenDetalleRelations;
