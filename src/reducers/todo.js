import { ADD_TODO, GET_TODO, CHANGE_DONE, DELETE_TODO, TODOS_FROM_JSONPLACEHOLDER } from '../actions';

const defaultTodo = [
    {
        name: 'some todo',
        done: false,
        id: new Date().getTime()
    }
];

const todo = (store = defaultTodo, action = {}) => {
    switch (action.type) {
        case ADD_TODO:
            const { name, id } = action;
            return [...store, { name, done: false, id }];

        case GET_TODO:
            return store;

        case DELETE_TODO:
            return store.filter(({ id }) => action.id !== id);

        case TODOS_FROM_JSONPLACEHOLDER:
            return [...store, ...action.todos];

        case CHANGE_DONE:
            const todo = store.find(item => item.id === action.id);
            todo.done = action.status
            return [...store];
    }
    return store;
}

export default todo;
