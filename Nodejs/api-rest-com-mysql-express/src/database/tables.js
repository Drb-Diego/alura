class Tables {
  
  init(connection) {
    this.connection = connection;
    this.newService();
  }

  newService() {
    const sql = `
      CREATE TABLE IF NOT EXISTS atemdimentos(
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        client VARCHAR(50) NOT NULL,
        pet VARCHAR(20) NOT NULL,
        service VARCHAR(20) NOT NULL,
        status VARCHAR(20) NOT NULL
      );`;


    this.connection.query(sql, (error) =>{

      if(error) console.log(error);

      else {
        console.log('Database: OK');
      }
    });
  }
}

export default new Tables();
