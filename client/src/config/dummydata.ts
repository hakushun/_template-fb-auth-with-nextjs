import { Activity } from '../redux/modules/activity';
import { Project } from '../redux/modules/project';
import { Task } from '../redux/modules/task';

export const dummyProjects: Project[] = [
  {
    id: Math.round(Math.random() * 10000000).toString(),
    title: 'テストデータ1',
    dueDate: new Date(),
    overview: 'テストデータ1テストデータ1テストデータ1テストデータ1',
    userId: '01234567890',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: Math.round(Math.random() * 10000000).toString(),
    title: 'テストデータ2',
    dueDate: new Date(),
    overview:
      'テストデータ2テストデータ2テストデータ2テストデータ2テストデータ2テストデータ2',
    userId: '01234567890',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: Math.round(Math.random() * 10000000).toString(),
    title: 'テストデータ3',
    dueDate: new Date(),
    overview:
      'テストデータ3テストデータ3テストデータ3テストデータ3テストデータ3',
    userId: '01234567890',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const dummyTasks: Task[] = [
  {
    id: Math.round(Math.random() * 10000000).toString(),
    projectId: dummyProjects[0].id!,
    title: 'テストデータ1-1',
    dueDate: new Date(),
    description: 'テストデータ1-1テストデータ1-1テストデータ1-1',
    status: 'NEW',
    userId: '01234567890',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: Math.round(Math.random() * 10000000).toString(),
    projectId: dummyProjects[0].id!,
    title: 'テストデータ1-2',
    dueDate: new Date(),
    description: 'テストデータ1-2テストデータ1-2テストデータ1-2テストデータ1-2',
    status: 'COMPLETE',
    userId: '01234567890',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: Math.round(Math.random() * 10000000).toString(),
    projectId: dummyProjects[1].id!,
    title: 'テストデータ2-1',
    dueDate: new Date(),
    description: 'テストデータ2-1テストデータ2-1テストデータ2-1',
    status: 'IN_PROGRESS',
    userId: '01234567890',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: Math.round(Math.random() * 10000000).toString(),
    projectId: dummyProjects[2].id!,
    title: 'テストデータ3-1',
    dueDate: new Date(),
    description:
      'テストデータ3-1テストデータ3-1テストデータ3-1テストデータ3-1テストデータ3-1テストデータ3-1',
    status: 'COMPLETE',
    userId: '01234567890',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: Math.round(Math.random() * 10000000).toString(),
    projectId: dummyProjects[2].id!,
    title: 'テストデータ3-2',
    dueDate: new Date(),
    description:
      'テストデータ3-2テストデータ3-2テストデータ3-2テストデータ3-2テストデータ3-2',
    status: 'COMPLETE',
    userId: '01234567890',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: Math.round(Math.random() * 10000000).toString(),
    projectId: dummyProjects[2].id!,
    title: 'テストデータ3-3',
    dueDate: new Date(),
    description: 'テストデータ3-3テストデータ3-3テストデータ3-3',
    status: 'COMPLETE',
    userId: '01234567890',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const dummyActivities: Activity[] = [
  {
    id: Math.round(Math.random() * 10000000).toString(),
    projectId: dummyProjects[0].id!,
    comment: 'テストデータ1テストデータ1テストデータ1テストデータ1',
    userId: '01234567890',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: Math.round(Math.random() * 10000000).toString(),
    projectId: dummyProjects[1].id!,
    comment: 'テストデータ2テストデータ2テストデータ2テストデータ2',
    userId: '01234567890',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: Math.round(Math.random() * 10000000).toString(),
    projectId: dummyProjects[2].id!,
    comment:
      'テストデータ3テストデータ3テストデータ3テストデータ3テストデータ3',
    userId: '01234567890',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: Math.round(Math.random() * 10000000).toString(),
    taskId: dummyTasks[0].id!,
    comment: 'テストデータ1-1テストデータ1-1テストデータ1-1',
    userId: '01234567890',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: Math.round(Math.random() * 10000000).toString(),
    taskId: dummyTasks[1].id!,
    comment: 'テストデータ1-2テストデータ1-2テストデータ1-2テストデータ1-2',
    userId: '01234567890',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: Math.round(Math.random() * 10000000).toString(),
    taskId: dummyTasks[2].id!,
    comment: 'テストデータ2-1テストデータ2-1テストデータ2-1',
    userId: '01234567890',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: Math.round(Math.random() * 10000000).toString(),
    taskId: dummyTasks[0].id!,
    comment:
      'テストデータ1-1テストデータ1-1テストデータ1-1テストデータ1-1テストデータ1-1テストデータ1-1',
    userId: '01234567890',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: Math.round(Math.random() * 10000000).toString(),
    taskId: dummyTasks[1].id!,
    comment: 'テストデータ1-2テストデータ1-2テストデータ1-2テストデータ1-2',
    userId: '01234567890',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: Math.round(Math.random() * 10000000).toString(),
    taskId: dummyTasks[2].id!,
    comment: 'テストデータ2-1テストデータ2-1テストデータ2-1',
    userId: '01234567890',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
