import http from '../http-common';
import { TaskProps } from '../interfaces';

const getAll = () => {
  return http.get<TaskProps[]>('/tasks');
};

const get = (id: any) => {
  return http.get<TaskProps>(`/tasks/${id}`);
};

const TaskServices = {
  getAll,
  get
};

export default TaskServices;
