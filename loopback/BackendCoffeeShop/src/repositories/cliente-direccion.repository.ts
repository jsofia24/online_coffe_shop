import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {ClienteDireccion, ClienteDireccionRelations, Clientes} from '../models';
import {ClientesRepository} from './clientes.repository';

export class ClienteDireccionRepository extends DefaultCrudRepository<
  ClienteDireccion,
  typeof ClienteDireccion.prototype.id_clienteDireccion,
  ClienteDireccionRelations
> {

  public readonly ClienteDireccion: BelongsToAccessor<Clientes, typeof ClienteDireccion.prototype.id_clienteDireccion>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('ClientesRepository') protected clientesRepositoryGetter: Getter<ClientesRepository>,
  ) {
    super(ClienteDireccion, dataSource);
    this.ClienteDireccion = this.createBelongsToAccessorFor('ClienteDireccion', clientesRepositoryGetter,);
    this.registerInclusionResolver('ClienteDireccion', this.ClienteDireccion.inclusionResolver);
  }
}
