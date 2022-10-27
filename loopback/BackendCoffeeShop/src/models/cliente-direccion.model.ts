import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Clientes} from './clientes.model';

@model()
export class ClienteDireccion extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id_clienteDireccion?: string;
  @property({
    type: 'string',
    required: true,
  })
  direccion: string;

  @property({
    type: 'string',
    required: true,
  })
  departamento: string;

  @property({
    type: 'string',
    required: true,
  })
  ciudad: string;

  @property({
    type: 'string',
    required: true,
  })
  codigo_postal: string;

  @belongsTo(() => Clientes, {name: 'ClienteDireccion'})
  id_cliente: string;

  constructor(data?: Partial<ClienteDireccion>) {
    super(data);
  }
}

export interface ClienteDireccionRelations {
  // describe navigational properties here
}

export type ClienteDireccionWithRelations = ClienteDireccion & ClienteDireccionRelations;
