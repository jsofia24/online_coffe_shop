import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  ClientePago,
  Clientes,
} from '../models';
import {ClientePagoRepository} from '../repositories';

export class ClientePagoClientesController {
  constructor(
    @repository(ClientePagoRepository)
    public clientePagoRepository: ClientePagoRepository,
  ) { }

  @get('/cliente-pagos/{id}/clientes', {
    responses: {
      '200': {
        description: 'Clientes belonging to ClientePago',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Clientes)},
          },
        },
      },
    },
  })
  async getClientes(
    @param.path.string('id') id: typeof ClientePago.prototype.id_clientePago,
  ): Promise<Clientes> {
    return this.clientePagoRepository.ClientePago(id);
  }
}
