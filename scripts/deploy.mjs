/**
 * Deploy & Launch script for Pasdiu Website
 * 
 * 1. Builds Firebase Cloud Functions (tsc)
 * 2. Runs `npm run generate` in www/
 * 3. Replaces hosting static files in `firebase/www/` with `.output/public/`
 * 4. Deploys to Firebase via `firebase deploy`
 * 
 * Usage:
 *   node scripts/deploy.mjs
 *   node scripts/deploy.mjs --only-hosting
 *   node scripts/deploy.mjs --dry-run
 */

import { execSync } from 'node:child_process';
import { rmSync, mkdirSync, cpSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, '..');
const wwwDir = join(projectRoot, 'www');
const staticOutputDir = join(wwwDir, '.output', 'public');
const firebaseDir = join(projectRoot, 'firebase');
const hostingTargetDir = join(firebaseDir, 'www');
const functionsDir = join(firebaseDir, 'functions');

const args = process.argv.slice(2);
const skipFunctions = args.includes('--skip-functions');
const hostingOnly = args.includes('--only-hosting');
const dryRun = args.includes('--dry-run');

function runCommand(command, cwd) {
  console.log(`   > (${cwd}) ${command}`);
  execSync(command, { cwd, stdio: 'inherit' });
}

async function main() {
  console.log('\n🚀 ============================================');
  console.log('   Pasdiu Website — Build & Firebase Deploy');
  console.log('============================================\n');

  // 1. Build Cloud Functions
  if (!skipFunctions && existsSync(functionsDir)) {
    console.log('📦 Step 1/4: Building Firebase Cloud Functions...');
    if (!dryRun) {
      runCommand('npm run build', functionsDir);
    } else {
      console.log('   → [DRY RUN] Would run `npm run build` in firebase/functions');
    }
  } else {
    console.log('⏭️  Step 1/4: Skipping Cloud Functions build.');
  }

  // 2. Generate Nuxt static site
  console.log('\n⚡ Step 2/4: Generating Nuxt static site (npm run generate)...');
  if (!dryRun) {
    runCommand('npm run generate', wwwDir);
  } else {
    console.log('   → [DRY RUN] Would run `npm run generate` in www');
  }

  // 3. Stage generated static site into firebase/www/
  console.log('\n📂 Step 3/4: Syncing static output to `firebase/www/`...');
  if (!dryRun) {
    if (!existsSync(staticOutputDir)) {
      throw new Error(`Static output directory not found at: ${staticOutputDir}`);
    }

    if (existsSync(hostingTargetDir)) {
      console.log('   Cleaning existing firebase/www/ contents...');
      rmSync(hostingTargetDir, { recursive: true, force: true });
    }

    mkdirSync(hostingTargetDir, { recursive: true });
    cpSync(staticOutputDir, hostingTargetDir, { recursive: true });
    console.log('   ✓ Static files successfully copied into firebase/www/');
  } else {
    console.log('   → [DRY RUN] Would copy www/.output/public -> firebase/www');
  }

  // 4. Firebase Deploy
  console.log('\n🔥 Step 4/4: Deploying to Firebase...');
  const deployCmd = hostingOnly ? 'firebase deploy --only hosting' : 'firebase deploy';
  if (!dryRun) {
    runCommand(deployCmd, firebaseDir);
    console.log('\n🎉 Deploy completed successfully!');
  } else {
    console.log(`   → [DRY RUN] Would run \`${deployCmd}\` in firebase/`);
  }
}

main().catch(err => {
  console.error('\n❌ Deployment failed:', err.message);
  process.exit(1);
});
