// scripts/publish-docs.js
import { existsSync, renameSync, rmSync } from 'fs';

if (existsSync('docs')) {
  rmSync('docs', { recursive: true, force: true });
}

if (existsSync('dist')) {
  renameSync('dist', 'docs');
  console.log('✅ Moved dist/ to docs/');
} else {
  console.error('❌ dist/ not found — run `npm run build` first.');
  process.exit(1);
}
