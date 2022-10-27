import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {TipoDocumento, TipoDocumentoRelations, Clientes} from '../models';
import {ClientesRepository} from './clientes.repository';

export class TipoDocumentoRepository extends DefaultCrudRepository<
  TipoDocumento,
  typeof TipoDocumento.prototype.id_tipoDocumento,
  TipoDocumentoRelations
> {

  public readonly TipoDocumento: BelongsToAccessor<Clientes, typeof TipoDocumento.prototype.id_tipoDocumento>;

  public readonly tipoDocumentoClientes: HasManyRepositoryFactory<Clientes, typeof TipoDocumento.prototype.id_tipoDocumento>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('ClientesRepository') protected clientesRepositoryGetter: Getter<ClientesRepository>,
  ) {
    super(TipoDocumento, dataSource);
    this.tipoDocumentoClientes = this.createHasManyRepositoryFactoryFor('tipoDocumentoClientes', clientesRepositoryGetter,);
    this.registerInclusionResolver('tipoDocumentoClientes', this.tipoDocumentoClientes.inclusionResolver);
    this.TipoDocumento = this.createBelongsToAccessorFor('TipoDocumento', clientesRepositoryGetter,);
    this.registerInclusionResolver('TipoDocumento', this.TipoDocumento.inclusionResolver);
  }
}
