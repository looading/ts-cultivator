import { run, iteratorDir, exec } from './util';

import * as fs from 'fs';
import * as path from 'path';


const samplePath = path.join(__dirname, 'sample');

const files = iteratorDir(samplePath);
files.map(exec);
