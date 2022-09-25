import axios from 'axios';
import Config from 'react-native-config';

class Network {
  client;

  constructor() {
    this._bootstrapAsync();
  }


  _bootstrapAsync = async () => {
    this.client = axios.create({
      baseURL: Config.API_URL,
      timeout: 10000,
      headers: {
        Accept: 'application/json',
        //Authorization: `Bearer ${apiToken}`,
      },
    });

    this.client.interceptors.response.use(
      response => response,
      error => {
        return Promise.reject(error);
      },
    );
  };
}

const network = new Network();
export default network;
