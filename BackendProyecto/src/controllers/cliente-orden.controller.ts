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
  Cliente,
  Orden,
} from '../models';
import {ClienteRepository} from '../repositories';

export class ClienteOrdenController {
  constructor(
    @repository(ClienteRepository) protected clienteRepository: ClienteRepository,
  ) { }

  @get('/clientes/{id}/ordens', {
    responses: {
      '200': {
        description: 'Array of Cliente has many Orden',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Orden)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Orden>,
  ): Promise<Orden[]> {
    return this.clienteRepository.ordens(id).find(filter);
  }

  @post('/clientes/{id}/ordens', {
    responses: {
      '200': {
        description: 'Cliente model instance',
        content: {'application/json': {schema: getModelSchemaRef(Orden)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Cliente.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Orden, {
            title: 'NewOrdenInCliente',
            exclude: ['id'],
            optional: ['clienteId']
          }),
        },
      },
    }) orden: Omit<Orden, 'id'>,
  ): Promise<Orden> {
    return this.clienteRepository.ordens(id).create(orden);
  }

  @patch('/clientes/{id}/ordens', {
    responses: {
      '200': {
        description: 'Cliente.Orden PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Orden, {partial: true}),
        },
      },
    })
    orden: Partial<Orden>,
    @param.query.object('where', getWhereSchemaFor(Orden)) where?: Where<Orden>,
  ): Promise<Count> {
    return this.clienteRepository.ordens(id).patch(orden, where);
  }

  @del('/clientes/{id}/ordens', {
    responses: {
      '200': {
        description: 'Cliente.Orden DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Orden)) where?: Where<Orden>,
  ): Promise<Count> {
    return this.clienteRepository.ordens(id).delete(where);
  }
}
