import axios from 'axios';
import { CreatePayload } from '../redux/modules/projects';

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export const postProject = async (data: CreatePayload): Promise<void> =>
  instance.post('/api/projects', data);
