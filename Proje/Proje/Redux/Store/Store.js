// import React from 'react'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import MyReducer from '../Reducer/Reducer'

const Store=createStore(MyReducer,composeWithDevTools(applyMiddleware(thunk)))
export default Store;