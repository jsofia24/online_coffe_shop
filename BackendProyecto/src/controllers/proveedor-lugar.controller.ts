import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Proveedor,
  Lugar,
} from '../models';
import {ProveedorRepository} from '../repositories';

export class ProveedorLugarController {
  constructor(
    @repository(ProveedorRepository)
    public proveedorRepository: ProveedorRepository,
  ) { }

  @get('/proveedors/{id}/lugar', {
    responses: {
      '200': {
        description: 'Lugar belonging to Proveedor',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Lugar)},
          },
        },
      },
    },
  })
  async getLugar(
    @param.path.string('id') id: typeof Proveedor.prototype.id,
  ): Promise<Lugar> {
    return this.proveedorRepository.lugar(id);
  }
}
