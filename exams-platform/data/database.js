import { Pool } from "pg";

var db;

if (!db) {
    db = new Pool({
        host: "localhost",
        user: "postgres",
        password: "sxgbz1106",
        database: "postgres",
        port: "5432"
    })
}

export default db