const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.HOST,
  user: process.env.USER_MYSQL,
  password: process.env.PASSWORD_MYSQL,
  database: process.env.DATABASE_MYSQL,
  connectTimeout: 10000 // 10 segundos
});

export const GetGondolas = (req, res) => {
  pool.getConnection(function (err, connection) {
    if (err) {
      console.error(err);
      res.status(500).send('Error al obtener las góndolas.');
      return;
    }

    connection.query('SELECT * FROM `Gondolas` ORDER BY `cliente` ASC', (error, results) => {
      connection.release();
      if (error) {
        console.error(error);
        res.status(500).send('Error al obtener las góndolas.');
      } else {
        res.json(results);
        console.log('Datos obtenidos');
      }
    });
  });
};

export const POSTGondola = async (req, res) => {
  pool.getConnection(function (err, connection) {
    if (err) {
      console.error(err);
      res.status(500).send('Error al obtener las góndolas.');
      return;
    }

    const query = queryDB(req.body["cliente"], req.body["rubro"], req.body["imagen"]);

    connection.query(query, (error, results) => {
      connection.release();
      if (error) {
        console.error(error);
        res.status(500).send('Error al agregar la góndola.');
      } else {
        res.json(results[0]);
        console.log('post agregado');
      }
    });
  });
};

const queryDB = (rubro, cliente, imagen) => {
  return `INSERT INTO Gondolas (cliente ,rubro, imagen) VALUES ('${cliente}', '${rubro}', '${imagen}')`;
};
