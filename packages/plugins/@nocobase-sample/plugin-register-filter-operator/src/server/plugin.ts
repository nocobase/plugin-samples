import { DataSource, SequelizeCollectionManager } from '@nocobase/data-source-manager';
import { Op } from '@nocobase/database';
import { Plugin } from '@nocobase/server';

export class PluginRegisterFilterOperatorServer extends Plugin {
  async load() {
    this.app.dataSourceManager.beforeAddDataSource((dataSource: DataSource) => {
      const collectionManager = dataSource.collectionManager;
      if (collectionManager instanceof SequelizeCollectionManager) {
        collectionManager.db.registerOperators({
          $customOperator(val: any) {
            if (Array.isArray(val)) {
              return {
                [Op.in]: val,
              };
            }
            return {
              [Op.eq]: val,
            };
          },
        });
      }
    });
  }
}

export default PluginRegisterFilterOperatorServer;
