import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  ClienteDireccion,
  Clientes,
} from '../models';
import {ClienteDireccionRepository} from '../repositories';

export class ClienteDireccionClientesController {
  constructor(
    @repository(ClienteDireccionRepository)
    public clienteDireccionRepository: ClienteDireccionRepository,
  ) { }

  @get('/cliente-direccions/{id}/clientes', {
    responses: {
      '200': {
        description: 'Clientes belonging to ClienteDireccion',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Clientes)},
          },
        },
      },
    },
  })
  async getClientes(
    @param.path.string('id') id: typeof ClienteDireccion.prototype.id_clienteDireccion,
  ): Promise<Clientes> {
    return this.clienteDireccionRepository.ClienteDireccion(id);
  }
}
