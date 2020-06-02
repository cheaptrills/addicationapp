import React from 'react';
const GlobalStateContext = React.createContext();
const GlobalDispatchContext = React.createContext();

function globalReducer(state, action) {
    switch(action.type){
        case 'user': {
            return {...state, user: action.value};
        }
        case 'diary': {
            return {...state, user: action.value};
        }
        case 'emergency': {
            return {...state, user: action.value};
        }
        case '': {
            return {...state, user: action.value};
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
          }
    }
}

function GlobalProvider({children}){
    const [state, dispatch] = React.useReducer(globalReducer, {user: {username:""}});
    return (
    <GlobalStateContext.Provider value={state}>
        <GlobalDispatchContext.Provider value={dispatch}>
                {children}    
        </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
    );
}

function useGlobalState(){
    const context = React.useContext(GlobalStateContext);
    if(context === undefined)
    {
        throw new Error('useCountState must be used within a GlobalStateContext')
    }
    return context;
}

function useGlobalDispatch(){
    const context = React.useContext(GlobalDispatchContext);
    if(context === undefined)
    {
        throw new Error('useCountState must be used within a GlobalDispatchContext')
    }
    return context;
}

export {GlobalProvider, useGlobalState, useGlobalDispatch};