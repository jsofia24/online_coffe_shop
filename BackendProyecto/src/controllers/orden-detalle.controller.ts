import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {OrdenDetalle} from '../models';
import {OrdenDetalleRepository} from '../repositories';

export class OrdenDetalleController {
  constructor(
    @repository(OrdenDetalleRepository)
    public ordenDetalleRepository : OrdenDetalleRepository,
  ) {}

  @post('/orden-detalles')
  @response(200, {
    description: 'OrdenDetalle model instance',
    content: {'application/json': {schema: getModelSchemaRef(OrdenDetalle)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OrdenDetalle, {
            title: 'NewOrdenDetalle',
            exclude: ['id'],
          }),
        },
      },
    })
    ordenDetalle: Omit<OrdenDetalle, 'id'>,
  ): Promise<OrdenDetalle> {
    return this.ordenDetalleRepository.create(ordenDetalle);
  }

  @get('/orden-detalles/count')
  @response(200, {
    description: 'OrdenDetalle model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(OrdenDetalle) where?: Where<OrdenDetalle>,
  ): Promise<Count> {
    return this.ordenDetalleRepository.count(where);
  }

  @get('/orden-detalles')
  @response(200, {
    description: 'Array of OrdenDetalle model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(OrdenDetalle, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(OrdenDetalle) filter?: Filter<OrdenDetalle>,
  ): Promise<OrdenDetalle[]> {
    return this.ordenDetalleRepository.find(filter);
  }

  @patch('/orden-detalles')
  @response(200, {
    description: 'OrdenDetalle PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OrdenDetalle, {partial: true}),
        },
      },
    })
    ordenDetalle: OrdenDetalle,
    @param.where(OrdenDetalle) where?: Where<OrdenDetalle>,
  ): Promise<Count> {
    return this.ordenDetalleRepository.updateAll(ordenDetalle, where);
  }

  @get('/orden-detalles/{id}')
  @response(200, {
    description: 'OrdenDetalle model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(OrdenDetalle, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(OrdenDetalle, {exclude: 'where'}) filter?: FilterExcludingWhere<OrdenDetalle>
  ): Promise<OrdenDetalle> {
    return this.ordenDetalleRepository.findById(id, filter);
  }

  @patch('/orden-detalles/{id}')
  @response(204, {
    description: 'OrdenDetalle PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OrdenDetalle, {partial: true}),
        },
      },
    })
    ordenDetalle: OrdenDetalle,
  ): Promise<void> {
    await this.ordenDetalleRepository.updateById(id, ordenDetalle);
  }

  @put('/orden-detalles/{id}')
  @response(204, {
    description: 'OrdenDetalle PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() ordenDetalle: OrdenDetalle,
  ): Promise<void> {
    await this.ordenDetalleRepository.replaceById(id, ordenDetalle);
  }

  @del('/orden-detalles/{id}')
  @response(204, {
    description: 'OrdenDetalle DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.ordenDetalleRepository.deleteById(id);
  }
}
