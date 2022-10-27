import {Entity, model, property} from '@loopback/repository';

@model()
export class Proveedores extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id_proveedor?: string;

  @property({
    type: 'string',
    required: true,
  })
  razon_social: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  telefono: string;

  @property({
    type: 'string',
    required: true,
  })
  direccion: string;


  constructor(data?: Partial<Proveedores>) {
    super(data);
  }
}

export interface ProveedoresRelations {
  // describe navigational properties here
}

export type ProveedoresWithRelations = Proveedores & ProveedoresRelations;
