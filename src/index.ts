import { run, iteratorDir, execAsync } from './util';

import * as fs from 'fs';
import * as path from 'path';


const samplePath = path.join(__dirname, 'sample');

const files = iteratorDir(samplePath);

execAsync(files);
