import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Clientes} from './clientes.model';

@model()
export class TipoDocumento extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id_tipoDocumento?: string;

  @property({
    type: 'string',
    required: true,
  })
  tipo: string;

  @belongsTo(() => Clientes, {name: 'TipoDocumento'})
  id_cliente: string;

  @hasMany(() => Clientes, {keyTo: 'id_tipoDocumento'})
  tipoDocumentoClientes: Clientes[];

  constructor(data?: Partial<TipoDocumento>) {
    super(data);
  }
}

export interface TipoDocumentoRelations {
  // describe navigational properties here
}

export type TipoDocumentoWithRelations = TipoDocumento & TipoDocumentoRelations;
