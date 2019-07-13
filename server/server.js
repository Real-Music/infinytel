const http = require("http");
const config = require("./api/config/config");
const app = require("./app");
const { sequelize } = require("./api/models");

const server = http.createServer(app);

sequelize.sync({ force: true }).then(() => {
  server.listen(config.port, () => {
    console.log();
    console.log(`Infinytel now listening to port: ${config.port}`);
  });
});
