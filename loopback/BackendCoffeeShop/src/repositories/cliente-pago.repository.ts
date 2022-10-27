import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {ClientePago, ClientePagoRelations, Clientes} from '../models';
import {ClientesRepository} from './clientes.repository';

export class ClientePagoRepository extends DefaultCrudRepository<
  ClientePago,
  typeof ClientePago.prototype.id_clientePago,
  ClientePagoRelations
> {

  public readonly ClientePago: BelongsToAccessor<Clientes, typeof ClientePago.prototype.id_clientePago>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('ClientesRepository') protected clientesRepositoryGetter: Getter<ClientesRepository>,
  ) {
    super(ClientePago, dataSource);
    this.ClientePago = this.createBelongsToAccessorFor('ClientePago', clientesRepositoryGetter,);
    this.registerInclusionResolver('ClientePago', this.ClientePago.inclusionResolver);
  }
}
