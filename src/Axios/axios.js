import * as axios from 'axios';

const instance = axios.create();
instance.defaults.baseURL =
  'http://carga.sendexus.net/webservice/RESTfulPHPService.php';

export {instance as default};
