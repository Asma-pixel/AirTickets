const { createServer } = require('http');
const jsonServer = require('json-server');

const router = jsonServer.router('../db.json');
const middlewares = jsonServer.defaults();

const handler = async (req, res) => {
  const server = jsonServer.create();
  server.use(middlewares);
  server.use(jsonServer.bodyParser);

  // Обработка пользовательских запросов
  server.use((req, res, next) => {
    if (req.query.stops) {
      const stops = req.query.stops.split(',').map(Number);
      req.query.stops = undefined;
      const allData = router.db.get('tickets').value();
      const filtered = allData.filter(ticket => stops.includes(ticket.stops));
      res.json(filtered);
    } else {
      next();
    }
  });

  server.use(router);

  // Обработка запроса через сервер jsonServer
  return new Promise((resolve, reject) => {
    const serverInstance = createServer(server);
    serverInstance.once('close', resolve);
    serverInstance.once('error', reject);
    serverInstance.emit('request', req, res);
  });
};

module.exports = handler;
