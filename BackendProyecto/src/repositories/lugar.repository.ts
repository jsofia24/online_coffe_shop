import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Lugar, LugarRelations, Proveedor, Cliente} from '../models';
import {ProveedorRepository} from './proveedor.repository';
import {ClienteRepository} from './cliente.repository';

export class LugarRepository extends DefaultCrudRepository<
  Lugar,
  typeof Lugar.prototype.id,
  LugarRelations
> {

  public readonly proveedores: HasManyRepositoryFactory<Proveedor, typeof Lugar.prototype.id>;

  public readonly clientes: HasManyRepositoryFactory<Cliente, typeof Lugar.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('ProveedorRepository') protected proveedorRepositoryGetter: Getter<ProveedorRepository>, @repository.getter('ClienteRepository') protected clienteRepositoryGetter: Getter<ClienteRepository>,
  ) {
    super(Lugar, dataSource);
    this.clientes = this.createHasManyRepositoryFactoryFor('clientes', clienteRepositoryGetter,);
    this.registerInclusionResolver('clientes', this.clientes.inclusionResolver);
    this.proveedores = this.createHasManyRepositoryFactoryFor('proveedores', proveedorRepositoryGetter,);
    this.registerInclusionResolver('proveedores', this.proveedores.inclusionResolver);
  }
}
