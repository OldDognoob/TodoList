import * as types from './actionType'
import uuid from 'uuid'

//STEP 7 Design action creator function
export function toggleTodo(id){
    return{
        type:types.TOGGLE_TODO,
        payload:{
            id:id
        }
    }
}
export function inputChange({task}){
    return{
        type:types.INPUT_CHANGE,
        payload:{
            task
        }
    }
}
export function addTodo({task}){
    return{
        type:types.ADD_TODO,
        payload:{
            id:uuid(),
            task,
            completed:false,
        }
    }
}
export function clearCompleted(){
    return{
        type:types.CLEAR_COMPLETED
    };
}

