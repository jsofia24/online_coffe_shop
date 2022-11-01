import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  OrdenDetalle,
  Orden,
} from '../models';
import {OrdenDetalleRepository} from '../repositories';

export class OrdenDetalleOrdenController {
  constructor(
    @repository(OrdenDetalleRepository)
    public ordenDetalleRepository: OrdenDetalleRepository,
  ) { }

  @get('/orden-detalles/{id}/orden', {
    responses: {
      '200': {
        description: 'Orden belonging to OrdenDetalle',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Orden)},
          },
        },
      },
    },
  })
  async getOrden(
    @param.path.string('id') id: typeof OrdenDetalle.prototype.id,
  ): Promise<Orden> {
    return this.ordenDetalleRepository.orden(id);
  }
}
