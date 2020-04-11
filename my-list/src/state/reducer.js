import * as types from "./actionType";

//STEP 3: Create one reducer function per slice of state

const initialStateForm={todoList:[], task:""};
export function formReducer(state=initialStateForm, action){
    switch(action.type){
        case types.INPUT_CHANGE:
            return{
                ...state,
                task:action.payload.task
            }
        case types.ADD_TODO:
            return initialStateForm;
        default:
            return state;
    }
}
const initialStateForm=[];
export function formReducer(state=initialStateTodos, action){
    switch(action.type){
        case types.ADD_TODO:
            console.log(state)
        return[...state,action.payload]
        case types.TOGGLE_TODO:
            const id = action.payload.id
        return state.map(todo=> {
            if (todo.id ===id){
                todo.completed =!todo.completed;
            }
            return todo;
        });
        case types.CLEAR_COMPLETED:
            return state.filter(todo => todo.completed === false);
            default:
                return state;
    }
}

