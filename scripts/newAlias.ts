const aliases = require('../spaces/aliases.json');
const https = require('https');

const args = process.argv.slice(2);
if (args.length === 2) {
  const oldSpace = args[0];
  const newSpace = args[1];
  
  if (!oldSpace.endsWith('.eth') || !newSpace.endsWith('.eth')) {
    console.error('Invalid arguments')
    process.exit(1);
  }
  
  if (aliases[oldSpace]) {
    console.error('Alias already exists for ' + oldSpace)
    process.exit(1);
  }
  
  aliases[oldSpace] = newSpace
  require('fs').writeFileSync('spaces/aliases.json', JSON.stringify(aliases, null, 2), 'utf8');
} else {
  console.log('Usage: node scripts/newAlias.ts <oldSpace> <newSpace>');
}
