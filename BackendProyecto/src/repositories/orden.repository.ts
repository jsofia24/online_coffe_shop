import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Orden, OrdenRelations, Cliente, OrdenDetalle} from '../models';
import {ClienteRepository} from './cliente.repository';
import {OrdenDetalleRepository} from './orden-detalle.repository';

export class OrdenRepository extends DefaultCrudRepository<
  Orden,
  typeof Orden.prototype.id,
  OrdenRelations
> {

  public readonly cliente: BelongsToAccessor<Cliente, typeof Orden.prototype.id>;

  public readonly ordenDetalles: HasManyRepositoryFactory<OrdenDetalle, typeof Orden.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('ClienteRepository') protected clienteRepositoryGetter: Getter<ClienteRepository>, @repository.getter('OrdenDetalleRepository') protected ordenDetalleRepositoryGetter: Getter<OrdenDetalleRepository>,
  ) {
    super(Orden, dataSource);
    this.ordenDetalles = this.createHasManyRepositoryFactoryFor('ordenDetalles', ordenDetalleRepositoryGetter,);
    this.registerInclusionResolver('ordenDetalles', this.ordenDetalles.inclusionResolver);
    this.cliente = this.createBelongsToAccessorFor('cliente', clienteRepositoryGetter,);
    this.registerInclusionResolver('cliente', this.cliente.inclusionResolver);
  }
}
