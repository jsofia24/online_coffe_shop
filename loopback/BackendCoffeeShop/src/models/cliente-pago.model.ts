import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Clientes} from './clientes.model';

@model()
export class ClientePago extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id_clientePago?: string;

  @property({
    type: 'string',
    required: true,
  })
  metodo_pago: string;

  @property({
    type: 'string',
    required: true,
  })
  banco: string;

  @property({
    type: 'number',
    required: true,
  })
  no_cuenta: number;

  @property({
    type: 'date',
    required: true,
  })
  expiracion: string;

  @belongsTo(() => Clientes, {name: 'ClientePago'})
  id_cliente: string;

  constructor(data?: Partial<ClientePago>) {
    super(data);
  }
}

export interface ClientePagoRelations {
  // describe navigational properties here
}

export type ClientePagoWithRelations = ClientePago & ClientePagoRelations;
