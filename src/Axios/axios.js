import * as axios from 'axios';

const instance = axios.create();
instance.defaults.baseURL =
  'https://carga.sendexus.net/webservice/RESTfulPHPService.php';

export {instance as default};
