import React from 'react';
const DiaryStateContext = React.createContext();
const DiaryDispatchContext = React.createContext();

function diaryReducer(state, action) {
    switch(action.type){
        case 'addDiary': {
            let {diaries,lastid} = state;
            //adds id to diary
            let diary = {...action.value, id:lastid};
            diaries.push(diary);
            //adds an ID to your diary entry and does +1 to ID
            return {...state,diaries,lastid:lastid++};
        }
        case 'removeDiary': {
            let {diaries} = state;
            //verwijderen van 1 diary
            diaries = diaries.filter(item => item.id !== action.value);
            return {...state,diaries};
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
          }
    }
}

function DiaryProvider({children}){
    const [state, dispatch] = React.useReducer(diaryReducer, {diaries: [], lastid: null});

    return (
    <DiaryStateContext.Provider value={state}>
        <DiaryDispatchContext.Provider value={dispatch}>
                {children}    
        </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
    );
}

function useDiaryState(){
    const context = React.useContext(DiaryStateContext);
    if(context === undefined)
    {
        throw new Error('useCountState must be used within a DiaryStateContext')
    }
    return context;
}

function useDiaryDispatch(){
    const context = React.useContext(DiaryDispatchContext);
    if(context === undefined)
    {
        throw new Error('useCountState must be used within a DiaryDispatchContext')
    }
    return context;
}

export {DiaryProvider, useDiaryState, useDiaryDispatch};