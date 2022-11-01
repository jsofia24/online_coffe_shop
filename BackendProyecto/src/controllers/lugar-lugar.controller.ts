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
  Lugar,
  Lugar,
} from '../models';
import {LugarRepository} from '../repositories';

export class LugarLugarController {
  constructor(
    @repository(LugarRepository) protected lugarRepository: LugarRepository,
  ) { }

  @get('/lugars/{id}/lugars', {
    responses: {
      '200': {
        description: 'Array of Lugar has many Lugar',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Lugar)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Lugar>,
  ): Promise<Lugar[]> {
    return this.lugarRepository.lugars(id).find(filter);
  }

  @post('/lugars/{id}/lugars', {
    responses: {
      '200': {
        description: 'Lugar model instance',
        content: {'application/json': {schema: getModelSchemaRef(Lugar)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Lugar.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Lugar, {
            title: 'NewLugarInLugar',
            exclude: ['id'],
            optional: ['lugarId']
          }),
        },
      },
    }) lugar: Omit<Lugar, 'id'>,
  ): Promise<Lugar> {
    return this.lugarRepository.lugars(id).create(lugar);
  }

  @patch('/lugars/{id}/lugars', {
    responses: {
      '200': {
        description: 'Lugar.Lugar PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Lugar, {partial: true}),
        },
      },
    })
    lugar: Partial<Lugar>,
    @param.query.object('where', getWhereSchemaFor(Lugar)) where?: Where<Lugar>,
  ): Promise<Count> {
    return this.lugarRepository.lugars(id).patch(lugar, where);
  }

  @del('/lugars/{id}/lugars', {
    responses: {
      '200': {
        description: 'Lugar.Lugar DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Lugar)) where?: Where<Lugar>,
  ): Promise<Count> {
    return this.lugarRepository.lugars(id).delete(where);
  }
}
