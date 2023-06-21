import API from './api';
import CONFIG from './config';

class ConversorService {
  api;

  constructor(API) {
    this.api = API;
  }

  async converter(de_para) {
    return await this.api.get(
      `convert?q=${de_para}&compact=ultra&apiKey=${CONFIG.apiKey}`,
    );
  }
}

export default new ConversorService(API);
