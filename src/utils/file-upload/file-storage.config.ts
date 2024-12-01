import * as multer from 'multer';
import { join } from 'path';
import * as fs from 'fs'; // Import fs for file system operations

// Use memory storage to keep the file in memory
export const fileStorage = multer.memoryStorage();