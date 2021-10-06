import connection from "../database/connection.js";

class Service {
  addService(service) {
    const addService = `INSERT INTO atemdimentos SET ?`;

    connection.query(addService, service, (error, result) => {
      if(error)console.log(error);
      
      else {
        console.log('Cadastrado com sucesso');
        console.log(result);
      }
    });
  }
}

export default new Service();
