import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Cliente,
  Lugar,
} from '../models';
import {ClienteRepository} from '../repositories';

export class ClienteLugarController {
  constructor(
    @repository(ClienteRepository)
    public clienteRepository: ClienteRepository,
  ) { }

  @get('/clientes/{id}/lugar', {
    responses: {
      '200': {
        description: 'Lugar belonging to Cliente',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Lugar)},
          },
        },
      },
    },
  })
  async getLugar(
    @param.path.string('id') id: typeof Cliente.prototype.id,
  ): Promise<Lugar> {
    return this.clienteRepository.lugar(id);
  }
}
