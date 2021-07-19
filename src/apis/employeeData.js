import axios from 'axios';

export default axios.create({
  baseURL: 'https://randomuser.me/api/?results=100&nat=us&inc=name,email,picture'
});