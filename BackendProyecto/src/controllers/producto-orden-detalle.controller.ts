import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Producto,
  OrdenDetalle,
} from '../models';
import {ProductoRepository} from '../repositories';

export class ProductoOrdenDetalleController {
  constructor(
    @repository(ProductoRepository) protected productoRepository: ProductoRepository,
  ) { }

  @get('/productos/{id}/orden-detalles', {
    responses: {
      '200': {
        description: 'Array of Producto has many OrdenDetalle',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(OrdenDetalle)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<OrdenDetalle>,
  ): Promise<OrdenDetalle[]> {
    return this.productoRepository.ordenDetalles(id).find(filter);
  }

  @post('/productos/{id}/orden-detalles', {
    responses: {
      '200': {
        description: 'Producto model instance',
        content: {'application/json': {schema: getModelSchemaRef(OrdenDetalle)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Producto.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OrdenDetalle, {
            title: 'NewOrdenDetalleInProducto',
            exclude: ['id'],
            optional: ['productoId']
          }),
        },
      },
    }) ordenDetalle: Omit<OrdenDetalle, 'id'>,
  ): Promise<OrdenDetalle> {
    return this.productoRepository.ordenDetalles(id).create(ordenDetalle);
  }

  @patch('/productos/{id}/orden-detalles', {
    responses: {
      '200': {
        description: 'Producto.OrdenDetalle PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OrdenDetalle, {partial: true}),
        },
      },
    })
    ordenDetalle: Partial<OrdenDetalle>,
    @param.query.object('where', getWhereSchemaFor(OrdenDetalle)) where?: Where<OrdenDetalle>,
  ): Promise<Count> {
    return this.productoRepository.ordenDetalles(id).patch(ordenDetalle, where);
  }

  @del('/productos/{id}/orden-detalles', {
    responses: {
      '200': {
        description: 'Producto.OrdenDetalle DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(OrdenDetalle)) where?: Where<OrdenDetalle>,
  ): Promise<Count> {
    return this.productoRepository.ordenDetalles(id).delete(where);
  }
}
