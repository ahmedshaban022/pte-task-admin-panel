import { bake_cookie, read_cookie } from "sfcookies";

let intial=[];


export  const usersReducer=(state=intial,action)=>{
    state=read_cookie('users');
    switch(action.type)
    {
        case "ADD_NEW_USER":
            state=[...state,action.newUser];
            bake_cookie('users',state);
            return state;
            // return state=[...state,action.newUser];

        case "DELETE_USER":
            const newArray =state.filter(user=>user.id!==action.userID);
            bake_cookie('users',newArray);
            return state=[...newArray];
            //  return state.filter(user=>user.id!==action.userID);
     
            case "EDIT_USER": {
                const index = state.findIndex(
                    user => user.id === action.editedUser.id); //finding index of the ite                                                                    action.payload); //finding index of the item
                const newArray = [...state]; //making a new array
                newArray[index] = action.editedUser;//changing value in the new array
                bake_cookie('users',newArray);
                return state=[...newArray]
               }
        


        default:return state;
    }
}