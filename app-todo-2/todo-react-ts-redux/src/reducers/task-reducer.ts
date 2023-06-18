interface Task {
  title: string;
  date: string;
  description: string;
  category: string;
  id: string;
}

interface State {
  tasks: Task[];
}

const initialState: State = {
  tasks: [],
};

/* interface AddTaskAction {
  type: "ADD_TASK";
  payload: { task: Task };
}

interface ClearListAction {
  type: "CLEAR_LIST";
}

interface RemoveTaskAction {
  type: "REMOVE_TASK";
  payload: { index: number };
}

type Action = AddTaskAction | ClearListAction | RemoveTaskAction; */ 

enum ActionTypes {
  ADD_TASK = "ADD_TASK",
  CLEAR_LIST = "CLEAR_LIST",
  REMOVE_TASK = "REMOVE_TASK",
}

interface Action {
  type: ActionTypes;
  payload?: any;
}

export default function TasksReducer(
  state = initialState,
  action: Action
): State {
  if (action.type === "ADD_TASK") {
    const copyState = { ...state };

    copyState.tasks.push({ ...action.payload.task, id: Date.now().toString() });

    return { ...copyState };
  }

  if (action.type === "CLEAR_LIST") {
    return {
      ...state,
      tasks: [],
    };
  }

  if (action.type === "REMOVE_TASK") {
    const copyState = { ...state };
    copyState.tasks.splice(action.payload.index, 1);
    return { ...copyState };
  }

  return state;
}
