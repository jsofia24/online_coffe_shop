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
  Orden,
  OrdenDetalle,
} from '../models';
import {OrdenRepository} from '../repositories';

export class OrdenOrdenDetalleController {
  constructor(
    @repository(OrdenRepository) protected ordenRepository: OrdenRepository,
  ) { }

  @get('/ordens/{id}/orden-detalles', {
    responses: {
      '200': {
        description: 'Array of Orden has many OrdenDetalle',
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
    return this.ordenRepository.ordenDetalles(id).find(filter);
  }

  @post('/ordens/{id}/orden-detalles', {
    responses: {
      '200': {
        description: 'Orden model instance',
        content: {'application/json': {schema: getModelSchemaRef(OrdenDetalle)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Orden.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OrdenDetalle, {
            title: 'NewOrdenDetalleInOrden',
            exclude: ['id'],
            optional: ['ordenId']
          }),
        },
      },
    }) ordenDetalle: Omit<OrdenDetalle, 'id'>,
  ): Promise<OrdenDetalle> {
    return this.ordenRepository.ordenDetalles(id).create(ordenDetalle);
  }

  @patch('/ordens/{id}/orden-detalles', {
    responses: {
      '200': {
        description: 'Orden.OrdenDetalle PATCH success count',
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
    return this.ordenRepository.ordenDetalles(id).patch(ordenDetalle, where);
  }

  @del('/ordens/{id}/orden-detalles', {
    responses: {
      '200': {
        description: 'Orden.OrdenDetalle DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(OrdenDetalle)) where?: Where<OrdenDetalle>,
  ): Promise<Count> {
    return this.ordenRepository.ordenDetalles(id).delete(where);
  }
}
