import pg from 'pg'

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "tiendaderopa",
    password: "falcon",
    port: 5432,
});

db.connect() 
export default db