import service from "../models/service.js";

export default {

  getController: (request, response) => {
    response.send("GET");
    // response.render('../views/inde.html')
  },

  postController: (request, response) => {
    const newService = request.body;
    
    service.addService(newService);
    response.send("POST");
  },
};
