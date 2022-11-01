import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Cliente, ClienteRelations, Lugar, Orden} from '../models';
import {LugarRepository} from './lugar.repository';
import {OrdenRepository} from './orden.repository';

export class ClienteRepository extends DefaultCrudRepository<
  Cliente,
  typeof Cliente.prototype.id,
  ClienteRelations
> {

  public readonly lugar: BelongsToAccessor<Lugar, typeof Cliente.prototype.id>;

  public readonly ordenes: HasManyRepositoryFactory<Orden, typeof Cliente.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('LugarRepository') protected lugarRepositoryGetter: Getter<LugarRepository>, @repository.getter('OrdenRepository') protected ordenRepositoryGetter: Getter<OrdenRepository>,
  ) {
    super(Cliente, dataSource);
    this.ordenes = this.createHasManyRepositoryFactoryFor('ordenes', ordenRepositoryGetter,);
    this.registerInclusionResolver('ordenes', this.ordenes.inclusionResolver);
    this.lugar = this.createBelongsToAccessorFor('lugar', lugarRepositoryGetter,);
    this.registerInclusionResolver('lugar', this.lugar.inclusionResolver);
  }
}
