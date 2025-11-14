import postgres from 'postgres';

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error('DATABASE_URL must be set in the environment');
}

// Create a reusable Postgres client. Keep this module server-only.
const sql = postgres(connectionString, {
  // By default postgres.js will use TLS when the connection string requests it.
  // Adjust options here if you need to tweak pooling or ssl settings.
  max: 5,
});

export default sql;
