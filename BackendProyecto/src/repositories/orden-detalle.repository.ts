import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {OrdenDetalle, OrdenDetalleRelations, Orden, Producto} from '../models';
import {OrdenRepository} from './orden.repository';
import {ProductoRepository} from './producto.repository';

export class OrdenDetalleRepository extends DefaultCrudRepository<
  OrdenDetalle,
  typeof OrdenDetalle.prototype.id,
  OrdenDetalleRelations
> {

  public readonly orden: BelongsToAccessor<Orden, typeof OrdenDetalle.prototype.id>;

  public readonly producto: BelongsToAccessor<Producto, typeof OrdenDetalle.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('OrdenRepository') protected ordenRepositoryGetter: Getter<OrdenRepository>, @repository.getter('ProductoRepository') protected productoRepositoryGetter: Getter<ProductoRepository>,
  ) {
    super(OrdenDetalle, dataSource);
    this.producto = this.createBelongsToAccessorFor('producto', productoRepositoryGetter,);
    this.registerInclusionResolver('producto', this.producto.inclusionResolver);
    this.orden = this.createBelongsToAccessorFor('orden', ordenRepositoryGetter,);
    this.registerInclusionResolver('orden', this.orden.inclusionResolver);
  }
}
