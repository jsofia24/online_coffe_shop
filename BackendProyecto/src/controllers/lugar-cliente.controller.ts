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
  Cliente,
} from '../models';
import {LugarRepository} from '../repositories';

export class LugarClienteController {
  constructor(
    @repository(LugarRepository) protected lugarRepository: LugarRepository,
  ) { }

  @get('/lugars/{id}/clientes', {
    responses: {
      '200': {
        description: 'Array of Lugar has many Cliente',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Cliente)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Cliente>,
  ): Promise<Cliente[]> {
    return this.lugarRepository.clientes(id).find(filter);
  }

  @post('/lugars/{id}/clientes', {
    responses: {
      '200': {
        description: 'Lugar model instance',
        content: {'application/json': {schema: getModelSchemaRef(Cliente)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Lugar.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cliente, {
            title: 'NewClienteInLugar',
            exclude: ['id'],
            optional: ['lugarId']
          }),
        },
      },
    }) cliente: Omit<Cliente, 'id'>,
  ): Promise<Cliente> {
    return this.lugarRepository.clientes(id).create(cliente);
  }

  @patch('/lugars/{id}/clientes', {
    responses: {
      '200': {
        description: 'Lugar.Cliente PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cliente, {partial: true}),
        },
      },
    })
    cliente: Partial<Cliente>,
    @param.query.object('where', getWhereSchemaFor(Cliente)) where?: Where<Cliente>,
  ): Promise<Count> {
    return this.lugarRepository.clientes(id).patch(cliente, where);
  }

  @del('/lugars/{id}/clientes', {
    responses: {
      '200': {
        description: 'Lugar.Cliente DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Cliente)) where?: Where<Cliente>,
  ): Promise<Count> {
    return this.lugarRepository.clientes(id).delete(where);
  }
}
