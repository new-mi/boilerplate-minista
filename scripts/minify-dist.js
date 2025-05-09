import glob from 'tiny-glob';
import { readFile, writeFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import * as terser from 'terser';
import cssnano from 'cssnano';
import postcss from 'postcss';

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * Минифицирует все .min.js и .min.css файлы в директории dist
 */
export async function minifyMinifiedFilesInDist() {
  const distDir = join(__dirname, 'dist');

  try {
    console.log(`Поиск .min.js и .min.css файлов в ${distDir}...`);

    // Ищем именно минифицированные файлы
    const filesToProcess = await glob('dist/**/*.min.{js,css}', { absolute: true });

    if (filesToProcess.length === 0) {
      console.log('Минифицированные файлы не найдены');
      return;
    }

    await Promise.all(filesToProcess.map(processMinFile));
    console.log(`Успешно обработано ${filesToProcess.length} файлов`);
  } catch (error) {
    console.error('Ошибка при минификации:', error);
    throw error;
  }
}

async function processMinFile(filePath) {
  try {
    if (filePath.endsWith('.min.js')) {
      await minifyJsFile(filePath);
    } else if (filePath.endsWith('.min.css')) {
      await minifyCssFile(filePath);
    }
  } catch (error) {
    console.error(`Ошибка при обработке ${filePath}:`, error.message);
    throw error;
  }
}

async function minifyJsFile(filePath) {
  const code = await readFile(filePath, 'utf8');
  const result = await terser.minify(code, {
    format: {
      comments: false,
    },
  });

  await writeFile(filePath, result.code);
  console.log(`Обновлен: ${filePath}`);
}

async function minifyCssFile(filePath) {
  const css = await readFile(filePath, 'utf8');
  const result = await postcss([cssnano({ preset: 'default' })]).process(css, {
    from: filePath,
    to: filePath,
  });

  await writeFile(filePath, result.css);
  console.log(`Обновлен: ${filePath}`);
}

// Автозапуск при прямом вызове
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  minifyMinifiedFilesInDist().catch(() => process.exit(1));
}
