import React, { useState } from 'react';
import MappinList from './MappinList';
import './TOdo.css'
function Mylist(){
    const [state,setState]=useState("")
    const[Array,setArray]=useState([])
    // console.log(State)
    const mySubmit=(e)=>{
        e.preventDefault()
        setArray([...Array,state]);
        setState("");
    }
    const deleteList=(myValue)=>{

       const ListOfItems= Array.filter((AllITems,index)=>{
        //   console.log(index)
        //   console.log(AllITems)
        //   console.log(myValue)
        //   console.log(index!==myValue)
       return index!==myValue;
       })
       setArray(ListOfItems)
    }

    return(
        <div className='myForm'>
            <h1 className='text-center text-light'>ENTER YOUR LIST </h1>
            <form onSubmit={mySubmit} className='text-center'>          
                    <input type='text'value={state} onChange={((e)=>setState(e.target.value))}/>&nbsp;
                    <input type='submit'value='ADD TODO'className='btn-primary'/>
            </form><br/>
            <MappinList Lists={Array} deleteList={deleteList}/>
          
        </div>
    )
}
export default Mylist;