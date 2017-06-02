exports.DATABASE_URL = process.env.DATABASE_URL || global.DATABASE_URL || 'mongodb://localhost:27017';
exports.PORT = process.env.PORT || 3001;