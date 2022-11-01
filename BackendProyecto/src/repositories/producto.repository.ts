import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Producto, ProductoRelations, Proveedor, OrdenDetalle} from '../models';
import {ProveedorRepository} from './proveedor.repository';
import {OrdenDetalleRepository} from './orden-detalle.repository';

export class ProductoRepository extends DefaultCrudRepository<
  Producto,
  typeof Producto.prototype.id,
  ProductoRelations
> {

  public readonly proveedor: BelongsToAccessor<Proveedor, typeof Producto.prototype.id>;

  public readonly ordenDetalles: HasManyRepositoryFactory<OrdenDetalle, typeof Producto.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('ProveedorRepository') protected proveedorRepositoryGetter: Getter<ProveedorRepository>, @repository.getter('OrdenDetalleRepository') protected ordenDetalleRepositoryGetter: Getter<OrdenDetalleRepository>,
  ) {
    super(Producto, dataSource);
    this.ordenDetalles = this.createHasManyRepositoryFactoryFor('ordenDetalles', ordenDetalleRepositoryGetter,);
    this.registerInclusionResolver('ordenDetalles', this.ordenDetalles.inclusionResolver);
    this.proveedor = this.createBelongsToAccessorFor('proveedor', proveedorRepositoryGetter,);
    this.registerInclusionResolver('proveedor', this.proveedor.inclusionResolver);
  }
}
