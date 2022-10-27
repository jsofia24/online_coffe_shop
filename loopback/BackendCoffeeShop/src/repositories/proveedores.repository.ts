import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Proveedores, ProveedoresRelations} from '../models';

export class ProveedoresRepository extends DefaultCrudRepository<
  Proveedores,
  typeof Proveedores.prototype.id_proveedor,
  ProveedoresRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Proveedores, dataSource);
  }
}
