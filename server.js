const http = require("http");
const addonInterface = require("./index");

const PORT = process.env.PORT || 7000;

const server = http.createServer((req, res) => {
    addonInterface.getRouter()(req, res);
});

server.listen(PORT, () => {
    console.log("Stremio UI Override Addon running on port " + PORT);
});