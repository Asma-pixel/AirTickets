const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

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

server.listen(3000, () => {
  console.log('JSON Server is running');
});
