import Server from "./server"
import db from "./Database/models";

db.sequelize.sync().then(() => {
    new Server().app.listen(3000, () => console.log("server listening on port 3000"));
});
