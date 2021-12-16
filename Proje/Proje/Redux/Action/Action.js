
export const ADDTODO=(myValue)=>function(dispatch){
        dispatch({ 
            type:'ADD',
            payload:myValue         
    })
}
export const REMOVE=(value)=>function (dispatch){
    dispatch({ 
        type:'REM',
        payload:{name:value}       

})
}