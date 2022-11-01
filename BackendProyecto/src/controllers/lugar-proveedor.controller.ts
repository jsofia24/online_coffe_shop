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
  Proveedor,
} from '../models';
import {LugarRepository} from '../repositories';

export class LugarProveedorController {
  constructor(
    @repository(LugarRepository) protected lugarRepository: LugarRepository,
  ) { }

  @get('/lugars/{id}/proveedors', {
    responses: {
      '200': {
        description: 'Array of Lugar has many Proveedor',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Proveedor)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Proveedor>,
  ): Promise<Proveedor[]> {
    return this.lugarRepository.proveedors(id).find(filter);
  }

  @post('/lugars/{id}/proveedors', {
    responses: {
      '200': {
        description: 'Lugar model instance',
        content: {'application/json': {schema: getModelSchemaRef(Proveedor)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Lugar.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Proveedor, {
            title: 'NewProveedorInLugar',
            exclude: ['id'],
            optional: ['lugarId']
          }),
        },
      },
    }) proveedor: Omit<Proveedor, 'id'>,
  ): Promise<Proveedor> {
    return this.lugarRepository.proveedors(id).create(proveedor);
  }

  @patch('/lugars/{id}/proveedors', {
    responses: {
      '200': {
        description: 'Lugar.Proveedor PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Proveedor, {partial: true}),
        },
      },
    })
    proveedor: Partial<Proveedor>,
    @param.query.object('where', getWhereSchemaFor(Proveedor)) where?: Where<Proveedor>,
  ): Promise<Count> {
    return this.lugarRepository.proveedors(id).patch(proveedor, where);
  }

  @del('/lugars/{id}/proveedors', {
    responses: {
      '200': {
        description: 'Lugar.Proveedor DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Proveedor)) where?: Where<Proveedor>,
  ): Promise<Count> {
    return this.lugarRepository.proveedors(id).delete(where);
  }
}
