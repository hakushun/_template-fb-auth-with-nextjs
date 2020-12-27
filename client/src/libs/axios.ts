import axios from 'axios';
import {
  CreatePayload as CreateActivity,
  UpdatePayload as UpdateActivity,
} from '../redux/modules/activities';
import {
  CreatePayload as CreateProject,
  UpdatePayload as UpdateProject,
} from '../redux/modules/projects';
import {
  CreatePayload as CreateTask,
  UpdatePayload as UpdateTask,
} from '../redux/modules/tasks';

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

export const putProject = async (data: UpdateProject): Promise<void> =>
  instance.put('/api/projects', data);

export const putTask = async (data: UpdateTask): Promise<void> =>
  instance.put('/api/tasks', data);

export const putActivity = async (data: UpdateActivity): Promise<void> =>
  instance.put('/api/activities', data);
