import * as fs from 'fs';
import * as path from 'path';

export const run = (open: boolean, callback: Function) => {
  if (open) {
    callback();
  }
};


export const filter = (file: string): boolean => {
  const stat = fs.statSync(file);
  const isDirectory = stat.isDirectory();
  const isFile = stat.isFile();

  if (isDirectory) {
    return true;
  }

  if (isFile) {
    return path.extname(file) === '.js';
  }

  return false;
};

export const iteratorDir = (dir: string): string[] => {
  const stat = fs.statSync(dir);
  const isDirectory = stat.isDirectory();
  const isFile = stat.isFile();

  if (isDirectory) {
    const childs = fs.readdirSync(dir);
    return childs
      .filter(child => filter(path.join(dir, child)))
      .map(child => {
        const childPath = path.join(dir, child);
        return iteratorDir(childPath);
      }).reduce((pre, now) => {
        return pre.concat(now);
      }, []);
  }
  return [dir];
};


export const exec = async (file: string): Promise<boolean> => {
  const instance = require(file);
  if (instance.open) {
    const label = `running ${ path.relative(__dirname, file) } `;
    console.time(label);
    console.log('---------------------------------------------\n');
    await run(instance.open, instance.runner);
    console.timeEnd(label);
    return true;
  } else {
    return false;
  }
};


export const execAsync = async (files: string[]): Promise<void> => {
  for (const item of files) {
    await exec(item);
  }
};
