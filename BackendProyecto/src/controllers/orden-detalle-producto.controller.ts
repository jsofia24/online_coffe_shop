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
  Producto,
} from '../models';
import {OrdenDetalleRepository} from '../repositories';

export class OrdenDetalleProductoController {
  constructor(
    @repository(OrdenDetalleRepository)
    public ordenDetalleRepository: OrdenDetalleRepository,
  ) { }

  @get('/orden-detalles/{id}/producto', {
    responses: {
      '200': {
        description: 'Producto belonging to OrdenDetalle',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Producto)},
          },
        },
      },
    },
  })
  async getProducto(
    @param.path.string('id') id: typeof OrdenDetalle.prototype.id,
  ): Promise<Producto> {
    return this.ordenDetalleRepository.producto(id);
  }
}
