import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Clientes, ClientesRelations, TipoDocumento} from '../models';
import {TipoDocumentoRepository} from './tipo-documento.repository';

export class ClientesRepository extends DefaultCrudRepository<
  Clientes,
  typeof Clientes.prototype.id_cliente,
  ClientesRelations
> {

  public readonly TipoDocumentoCliente: BelongsToAccessor<TipoDocumento, typeof Clientes.prototype.id_cliente>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('TipoDocumentoRepository') protected tipoDocumentoRepositoryGetter: Getter<TipoDocumentoRepository>,
  ) {
    super(Clientes, dataSource);
    this.TipoDocumentoCliente = this.createBelongsToAccessorFor('TipoDocumentoCliente', tipoDocumentoRepositoryGetter,);
    this.registerInclusionResolver('TipoDocumentoCliente', this.TipoDocumentoCliente.inclusionResolver);
  }
}
