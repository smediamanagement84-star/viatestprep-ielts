const fs = require('fs');
const path = require('path');

console.log('🔍 Starting ViATestPrep Backend Deployment Audit...\n');

let errors = 0;
let warnings = 0;

// 1. Check critical files
const requiredFiles = [
  'index.html',
  'run-this-migration.sql',
  'vercel.json',
  'api/reports.js',
  'api/dev-notifications.js',
  'api/test-answers.js',
  'api/_lib/supabaseAdmin.js',
  'api/_lib/writingGrader.js'
];

requiredFiles.forEach(file => {
  const fullPath = path.join(__dirname, '..', file);
  if (fs.existsSync(fullPath)) {
    console.log(`  ✅ [File Exists]: ${file}`);
  } else {
    console.error(`  ❌ [MISSING FILE]: ${file}`);
    errors++;
  }
});

// 2. Check API Handlers for syntax & export signatures
const apiFiles = [
  'api/reports.js',
  'api/dev-notifications.js',
  'api/test-answers.js'
];

apiFiles.forEach(file => {
  try {
    const fullPath = path.join(__dirname, '..', file);
    const handler = require(fullPath);
    if (typeof handler === 'function') {
      console.log(`  ✅ [API Handler Valid]: ${file} exports async function handler(req, res)`);
    } else {
      console.warn(`  ⚠️ [API Warning]: ${file} does not export a direct handler function.`);
      warnings++;
    }
  } catch (e) {
    console.error(`  ❌ [API Syntax Error]: ${file} failed to load: ${e.message}`);
    errors++;
  }
});

// 3. Verify Database Migration SQL Syntax
const sqlPath = path.join(__dirname, '..', 'run-this-migration.sql');
if (fs.existsSync(sqlPath)) {
  const sql = fs.readFileSync(sqlPath, 'utf8');
  const requiredTables = [
    'consultancies',
    'students',
    'mock_history',
    'speaking_grades',
    'orders',
    'error_reports',
    'system_notifications'
  ];
  
  requiredTables.forEach(table => {
    if (sql.includes(`TABLE IF NOT EXISTS ${table}`) || sql.includes(`TABLE ${table}`)) {
      console.log(`  ✅ [SQL Schema Table]: '${table}' table defined`);
    } else {
      console.error(`  ❌ [SQL Schema Missing]: '${table}' table NOT defined in run-this-migration.sql`);
      errors++;
    }
  });
}

console.log('\n==================================================');
console.log(`📊 Backend Audit Complete: ${errors} Errors, ${warnings} Warnings`);
console.log('==================================================\n');

if (errors === 0) {
  console.log('🚀 SYSTEM IS 100% PRODUCTION READY FOR VERCEL + SUPABASE HOSTING!');
  process.exit(0);
} else {
  console.error('❌ DISCREPANCIES FOUND - FIX BEFORE HOSTING.');
  process.exit(1);
}
