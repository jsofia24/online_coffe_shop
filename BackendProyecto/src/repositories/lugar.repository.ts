import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory, BelongsToAccessor} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Lugar, LugarRelations, Proveedor, Cliente} from '../models';
import {ProveedorRepository} from './proveedor.repository';
import {ClienteRepository} from './cliente.repository';
import {LugarRepository} from './lugar.repository';

export class LugarRepository extends DefaultCrudRepository<
  Lugar,
  typeof Lugar.prototype.id,
  LugarRelations
> {

  public readonly proveedors: HasManyRepositoryFactory<Proveedor, typeof Lugar.prototype.id>;

  public readonly clientes: HasManyRepositoryFactory<Cliente, typeof Lugar.prototype.id>;

  public readonly lugars: HasManyRepositoryFactory<Lugar, typeof Lugar.prototype.id>;

  public readonly lugar: BelongsToAccessor<Lugar, typeof Lugar.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('ProveedorRepository') protected proveedorRepositoryGetter: Getter<ProveedorRepository>, @repository.getter('ClienteRepository') protected clienteRepositoryGetter: Getter<ClienteRepository>, @repository.getter('LugarRepository') protected lugarRepositoryGetter: Getter<LugarRepository>,
  ) {
    super(Lugar, dataSource);
    this.lugar = this.createBelongsToAccessorFor('lugar', lugarRepositoryGetter,);
    this.registerInclusionResolver('lugar', this.lugar.inclusionResolver);
    this.lugars = this.createHasManyRepositoryFactoryFor('lugars', lugarRepositoryGetter,);
    this.registerInclusionResolver('lugars', this.lugars.inclusionResolver);
    this.clientes = this.createHasManyRepositoryFactoryFor('clientes', clienteRepositoryGetter,);
    this.registerInclusionResolver('clientes', this.clientes.inclusionResolver);
    this.proveedors = this.createHasManyRepositoryFactoryFor('proveedors', proveedorRepositoryGetter,);
    this.registerInclusionResolver('proveedors', this.proveedors.inclusionResolver);
  }
}
