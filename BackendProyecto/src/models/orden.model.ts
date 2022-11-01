import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Cliente} from './cliente.model';
import {OrdenDetalle} from './orden-detalle.model';

@model()
export class Orden extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @belongsTo(() => Cliente)
  clienteId: string;

  @hasMany(() => OrdenDetalle)
  ordenDetalles: OrdenDetalle[];

  constructor(data?: Partial<Orden>) {
    super(data);
  }
}

export interface OrdenRelations {
  // describe navigational properties here
}

export type OrdenWithRelations = Orden & OrdenRelations;
