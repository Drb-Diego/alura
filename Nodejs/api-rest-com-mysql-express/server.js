import expressConfig from "./src/config/expressConfig.js";
import connection from "./src/database/connection.js";
import tables from "./src/database/tables.js"


connection.connect(error => {
  if (error) console.log(error);
  else {

    const app = expressConfig();
    const PORT = process.env.PORT || 9000;

    tables.init(connection);

    app.listen(PORT, () => console.log(`Server up !\nPort: ${PORT}`));
  }
});
