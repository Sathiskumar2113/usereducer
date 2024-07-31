import { type } from "@testing-library/user-event/dist/type"

export const initialState={
    count :0
}

export const CounterReduce=(state,action)=>
{
    // if ('incement'== action.type)
    // {
    //     return({count:state.count+1});
    // }
    // else{
    //     return({count:state.count-1})
    // }
    
    //(or)
    
    switch(action.type){
        case 'incement':
            return{count:state.count+1}

            case 'decrement':
                return{count:state.count-1}
                default:
                    return state;
    }
    
}
