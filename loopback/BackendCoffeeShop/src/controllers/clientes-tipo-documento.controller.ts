import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Clientes,
  TipoDocumento,
} from '../models';
import {ClientesRepository} from '../repositories';

export class ClientesTipoDocumentoController {
  constructor(
    @repository(ClientesRepository)
    public clientesRepository: ClientesRepository,
  ) { }

  @get('/clientes/{id}/tipo-documento', {
    responses: {
      '200': {
        description: 'TipoDocumento belonging to Clientes',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(TipoDocumento)},
          },
        },
      },
    },
  })
  async getTipoDocumento(
    @param.path.string('id') id: typeof Clientes.prototype.id_cliente,
  ): Promise<TipoDocumento> {
    return this.clientesRepository.TipoDocumentoCliente(id);
  }
}
