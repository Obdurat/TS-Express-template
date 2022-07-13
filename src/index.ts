import Server from "./server"

new Server().app.listen(3000, () => console.log("server listening on port 3000"));