const State = {
  tasks: [],
};

export default function TasksReducer(state = State, action) {
  if (action.type === "ADD_TASK") {
    const copyState = { ...state };

    copyState.tasks.push({ ...action.payload.task, id: Date.now() });

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
