import API from './api';

class FilmeService {
  api;

  constructor(api) {
    this.api = api;
  }

  pegarFilmes() {
    return this.api
      .get('/r-api/?api=filmes')
      .then(filmes => filmes.data)
      .catch(error => error);
  }
}

export default new FilmeService(API);
