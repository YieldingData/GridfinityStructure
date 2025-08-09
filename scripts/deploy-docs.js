// scripts/deploy-docs.js
import { execSync } from 'node:child_process';
import { existsSync, rmSync, renameSync } from 'node:fs';

const run = (cmd) => execSync(cmd, { stdio: 'inherit' });

try {
  // 1) Build
  run('npm run build');

  // 2) Replace docs with fresh build
  if (existsSync('docs')) rmSync('docs', { recursive: true, force: true });
  if (!existsSync('dist')) {
    console.error('❌ dist/ not found — did the build fail?');
    process.exit(1);
  }
  renameSync('dist', 'docs');
  console.log('✅ Moved dist/ → docs/');

  // 3) Commit and push
  run('git add docs');
  try {
    run(`git commit -m "deploy: update docs (auto)"`);
  } catch {
    console.log('ℹ️ No changes to commit (docs already up to date).');
  }
  run('git push origin main');

  console.log('\n🎉 Deployed! GitHub Pages will update shortly.');
} catch (e) {
  console.error('\n❌ Deployment failed.');
  process.exit(1);
}
