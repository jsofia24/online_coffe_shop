import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Orden,
  Cliente,
} from '../models';
import {OrdenRepository} from '../repositories';

export class OrdenClienteController {
  constructor(
    @repository(OrdenRepository)
    public ordenRepository: OrdenRepository,
  ) { }

  @get('/ordens/{id}/cliente', {
    responses: {
      '200': {
        description: 'Cliente belonging to Orden',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Cliente)},
          },
        },
      },
    },
  })
  async getCliente(
    @param.path.string('id') id: typeof Orden.prototype.id,
  ): Promise<Cliente> {
    return this.ordenRepository.cliente(id);
  }
}
