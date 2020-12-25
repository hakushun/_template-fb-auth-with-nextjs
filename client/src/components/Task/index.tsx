import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withAuth } from '../../helpers/withAuth';
import { selectActivitiesRelatedTask } from '../../redux/modules/activities';
import { add as addActivity } from '../../redux/modules/activity';
import {
  selectStatusList,
  toggleStatusList,
} from '../../redux/modules/dropdown';
import { focus, selectProjectByTask } from '../../redux/modules/project';
import {
  add as addTask,
  edit as editTask,
  selectTask,
} from '../../redux/modules/task';
import { selectRelatedTasks } from '../../redux/modules/tasks';
import { PageLoader } from '../PageLoader';
import { Task as Presentational } from './Task';

const Component: React.VFC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const isOpened = useSelector(selectStatusList);
  const project = useSelector(selectProjectByTask);
  const task = useSelector(selectTask);
  const relatedTasks = useSelector(selectRelatedTasks);
  const relatedActivities = useSelector(selectActivitiesRelatedTask);
  const [loading, setLoading] = useState<boolean>(true);

  const toggleList = () => {
    dispatch(toggleStatusList());
  };
  const handleFocus = (id: string) => {
    dispatch(focus({ id }));
  };
  const hadleAddTask = (projectId: string) => {
    dispatch(addTask({ projectId }));
  };
  const hadleEditTask = (id: string) => {
    dispatch(editTask({ id }));
  };
  const hadleAddActivity = (taskId: string) => {
    dispatch(addActivity({ taskId }));
  };

  useEffect(() => {
    if (!task.id) {
      router.push('/mypage');
      return;
    }
    setLoading(false);
  }, [router, task]);
  return (
    <>
      {loading ? (
        <PageLoader />
      ) : (
        <Presentational
          isOpened={isOpened}
          project={project}
          task={task}
          relatedTasks={relatedTasks}
          relatedActivities={relatedActivities}
          toggleList={toggleList}
          handleFocus={handleFocus}
          hadleAddTask={hadleAddTask}
          hadleEditTask={hadleEditTask}
          hadleAddActivity={hadleAddActivity}
        />
      )}
    </>
  );
};

export const Task = withAuth(Component);
