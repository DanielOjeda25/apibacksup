import { config } from 'dotenv'
config()

let dbConfig
export default dbConfig = {
  server: process.env.SERVER || '18.228.185.185',
  port: process.env.PORT || 35863,
  user: process.env.USER || 'cubos',
  password: process.env.PASSWORD || 'cubos',
  database: process.env.DATABASE || 'Bamana',
  driver: 'msnodesqlv8',
  connectionTimeout: '15000',
  requestTimeout: '15000'
}
