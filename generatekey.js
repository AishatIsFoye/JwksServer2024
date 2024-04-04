const crypto = require('crypto');

// Generate a random 256-bit (32-byte) secret key
const secretKey = crypto.randomBytes(32).toString('hex');

// Print the secret key to the console
console.log('Generated Secret Key:', secretKey);

