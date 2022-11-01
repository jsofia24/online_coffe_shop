import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {OrdenDetalle, OrdenDetalleRelations} from '../models';

export class OrdenDetalleRepository extends DefaultCrudRepository<
  OrdenDetalle,
  typeof OrdenDetalle.prototype.id,
  OrdenDetalleRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(OrdenDetalle, dataSource);
  }
}
