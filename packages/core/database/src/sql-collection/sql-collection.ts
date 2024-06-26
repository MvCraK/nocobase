import { Collection, CollectionContext, CollectionOptions } from '../collection';
import { SQLModel } from './sql-model';

export class SqlCollection extends Collection {
  constructor(options: CollectionOptions, context: CollectionContext) {
    options.autoGenId = false;
    options.timestamps = false;
    options.underscored = false;

    super(options, context);
  }

  isSql() {
    return true;
  }

  public collectionSchema() {
    return undefined;
  }

  get filterTargetKey() {
    const targetKey = this.options?.filterTargetKey || 'id';
    if (targetKey && this.model.getAttributes()[targetKey]) {
      return targetKey;
    }
    if (this.model.primaryKeyAttributes.length > 1) {
      return null;
    }
    return this.model.primaryKeyAttribute;
  }

  modelInit() {
    const { autoGenId, sql } = this.options;
    const model = class extends SQLModel {};
    model.init(null, {
      ...this.sequelizeModelOptions(),
      schema: undefined,
    });

    if (!autoGenId) {
      model.removeAttribute('id');
    }

    model.sql = sql;
    model.database = this.context.database;
    model.collection = this;

    this.model = new Proxy(model, {
      get(target, prop) {
        if (prop === '_schema') {
          return undefined;
        }
        return Reflect.get(target, prop);
      },
    });
  }
}
