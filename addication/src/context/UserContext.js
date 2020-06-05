import React from 'react';
const UserStateContext = React.createContext();
const UserDispatchContext = React.createContext();

function userReducer(state, action) {
    switch(action.type){
        case 'setUser': {
            return {...state, user: action.value};
        }
        case 'unSetUser':{
            return {};
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
          }
    }
}

function UserProvider({children}){
    const [state, dispatch] = React.useReducer(userReducer, {});
    return (
    <UserStateContext.Provider value={state}>
        <UserDispatchContext.Provider value={dispatch}>
                {children}    
        </UserDispatchContext.Provider>
    </UserStateContext.Provider>
    );
}

function useUserState(){
    const context = React.useContext(UserStateContext);
    if(context === undefined)
    {
        throw new Error('useCountState must be used within a UserStateContext')
    }
    return context;
}

function useUserDispatch(){
    const context = React.useContext(UserDispatchContext);
    if(context === undefined)
    {
        throw new Error('useCountState must be used within a UserDispatchContext')
    }
    return context;
}

export {UserProvider, useUserState, useUserDispatch};