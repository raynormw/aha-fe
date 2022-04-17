import axios from 'axios';

import { base_api } from 'services/api';

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {

  getTags: async function(page) {
    try {
      let url = base_api + 'tags';
      const response = await axios.get(url);
      return response.data;
    } catch(error) {
      throw error;
    }
  }
}
