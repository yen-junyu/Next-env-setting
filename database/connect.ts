import mariadb from 'mariadb'
const pool = mariadb.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database:'database',
  connectionLimit: 5,
})

export default pool
