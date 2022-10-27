import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  TipoDocumento,
  Clientes,
} from '../models';
import {TipoDocumentoRepository} from '../repositories';

export class TipoDocumentoClientesController {
  constructor(
    @repository(TipoDocumentoRepository)
    public tipoDocumentoRepository: TipoDocumentoRepository,
  ) { }

  @get('/tipo-documentos/{id}/clientes', {
    responses: {
      '200': {
        description: 'Clientes belonging to TipoDocumento',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Clientes)},
          },
        },
      },
    },
  })
  async getClientes(
    @param.path.string('id') id: typeof TipoDocumento.prototype.id_tipoDocumento,
  ): Promise<Clientes> {
    return this.tipoDocumentoRepository.TipoDocumento(id);
  }
}
