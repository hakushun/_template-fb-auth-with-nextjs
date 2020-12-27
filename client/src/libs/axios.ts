import axios from 'axios';
import { CreatePayload as CreateActivity } from '../redux/modules/activities';
import { CreatePayload as CreateProject } from '../redux/modules/projects';
import { CreatePayload as CreateTask } from '../redux/modules/tasks';

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export const postProject = async (data: CreateProject): Promise<void> =>
  instance.post('/api/projects', data);

export const postTask = async (data: CreateTask): Promise<void> =>
  instance.post('/api/tasks', data);

export const postActivity = async (data: CreateActivity): Promise<void> =>
  instance.post('/api/activities', data);
