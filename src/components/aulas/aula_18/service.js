import API from "./API";

class Service {
  api;

  constructor(API) {
    this.api = API;
  }

  pegarCEP(cep) {
    return this.api
      .get(`/${cep}/json`)
      .then(cep => cep.data)
      .catch((error) => error);
  }
}

export default new Service(API);
