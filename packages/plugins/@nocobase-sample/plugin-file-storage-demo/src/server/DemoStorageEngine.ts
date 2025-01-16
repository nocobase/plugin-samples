import { StorageEngine, StorageModel } from '@nocobase/plugin-file-manager';
import fs from 'fs-extra';
import crypto from 'node:crypto';
import path from 'node:path';

/**
 * For example purposes only
 **/
export class DemoStorageEngine implements StorageEngine {
  constructor(protected storageInstance: StorageModel) {}

  generateDestination() {
    const {
      path: pathname,
      options: { documentRoot },
    } = this.storageInstance;
    const destPath = path.resolve(
      path.isAbsolute(documentRoot) ? documentRoot : path.join(process.cwd(), documentRoot),
      pathname,
    );
    fs.mkdirpSync(destPath);
    return destPath;
  }

  generateFilename(file) {
    return `${crypto.randomBytes(32).toString('hex')}${path.extname(file.originalname)}`;
  }

  _handleFile(req, file, cb) {
    const destination = this.generateDestination();
    const filename = this.generateFilename(file);
    const filePath = path.join(destination, filename);
    const outStream = fs.createWriteStream(filePath);
    file.stream.pipe(outStream);
    outStream.on('error', cb);
    outStream.on('finish', function () {
      cb(null, {
        destination: destination,
        filename: filename,
        path: filePath,
        size: outStream.bytesWritten,
      });
    });
  }

  _removeFile(req, file, cb) {
    fs.unlink(file, cb);
  }
}
