import { AttachmentModel, StorageEngine, StorageModel, StorageType } from '@nocobase/plugin-file-manager';
import { DemoStorageEngine } from './DemoStorageEngine';

/**
 * For example purposes only
 **/
export class DemoStorageType extends StorageType {
  make(instance: StorageModel): StorageEngine {
    return new DemoStorageEngine(instance);
  }
  delete(instance: StorageModel, records: AttachmentModel[]): Promise<[number, AttachmentModel[]]> {
    // TODO: delete files
    return [] as any;
  }
}
