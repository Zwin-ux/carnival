import fs from 'fs';
import path from 'path';

// Load .env from this package if present (simple parser)
const envPath = path.resolve(__dirname, '../.env');
if (fs.existsSync(envPath)) {
  const raw = fs.readFileSync(envPath, 'utf8');
  for (const line of raw.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq);
    let val = trimmed.slice(eq + 1);
    // remove surrounding quotes
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    process.env[key] = val;
  }
}

async function main() {
  try {
    const { default: sql } = await import('../src/sql');
    const r = await sql`SELECT 1 as result`;
    console.log('CONNECTION OK', r);
    await sql.end({ timeout: 5 });
  } catch (err) {
    console.error('CONNECTION ERROR', err);
    process.exitCode = 1;
  }
}

main();
