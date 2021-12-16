// import React from 'react';

const initial=[];
export default function MyReducer(state=initial,action){
const{payload}=action
    switch(action.type){
        case "ADD":
            return [...state,action.payload]
        case "REM":
            return state.filter((product)=>{
                console.log(product.name)
                console.log(payload.name)
                console.log( product.name!==payload.name)
                return product.name!==payload.name
            })
        default:
            return state
    }
}