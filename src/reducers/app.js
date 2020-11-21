import { ONLY_DONE_TODOS } from '../actions';

const defaultStore = {
    onlyDone: false
};

const app = (state = defaultStore, action = {}) => {
    switch (action.type) {
        case ONLY_DONE_TODOS:
            return { ...state, onlyDone: !state.onlyDone }
    }
    return state;
}

export default app;
