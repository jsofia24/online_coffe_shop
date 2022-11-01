import {Entity, model, property, hasMany} from '@loopback/repository';
import {Proveedor} from './proveedor.model';
import {Cliente} from './cliente.model';

@model()
export class Lugar extends Entity {
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
  ubicadoId: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
  })
  tipoLugar?: string;

  @hasMany(() => Proveedor)
  proveedores: Proveedor[];

  @hasMany(() => Cliente)
  clientes: Cliente[];

  constructor(data?: Partial<Lugar>) {
    super(data);
  }
}

export interface LugarRelations {
  // describe navigational properties here
}

export type LugarWithRelations = Lugar & LugarRelations;
