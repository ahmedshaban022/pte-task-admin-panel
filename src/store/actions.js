export const addUser=(newUser)=>({
    type:"ADD_NEW_USER",
    newUser
});

export const deleteUser=(userID)=>({
    type:"DELETE_USER",
    userID
});

export const EditUser=(editedUser)=>({
    type:"EDIT_USER",
    editedUser
});





