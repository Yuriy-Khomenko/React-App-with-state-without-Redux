import { createSelector } from 'reselect';

const getTodos = state => state.todo;
const getOnlyDoneStatus = state => state.app.onlyDone;

export const getDoneTodos = createSelector(
    [getTodos, getOnlyDoneStatus],
    (todos, onlyDone) => {
        return onlyDone ? todos.filter(itemTodo => itemTodo.done !== true) : todos;
    }
)
