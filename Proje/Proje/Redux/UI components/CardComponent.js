import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import { ADDTODO } from '../Action/Action'
import { REMOVE } from '../Action/Action'
function CardComponent({myProducts,ADDTODO,REMOVE}) {
    const[result,setResult]=useState('')
    const submitHandler=(e)=>{
        e.preventDefault()
        // console.log(result)
        if(result!=="")
        {
            ADDTODO({name:result})
            setResult("")
        }
    }
    return (
          <center>
                    <div className="card w-23">
                <div className="card-body">
                    <form onSubmit={submitHandler}>
                        <input type="text" placeholder="Add Products"value={result}onChange={(e)=>setResult(e.target.value)}/> <br />
                        <button type="submit" className="btn btn-success">Add Product</button> 
                    </form>
                    {myProducts.map((product,index)=> {
                        return<div className="item p-1"key={index}>
                            {product.name}<span onClick={()=> REMOVE(product.name)} class="badge square-pill bg-danger" style={{"float": "right","padding":"6px 10px 6px 10px"}}>
                            X</span> </div>

                    })}
                       
                </div>
                </div>
    
     </center>

    )
}
const mapStateToProps=(state)=>({
    myProducts:state
})

export default connect(mapStateToProps,{ADDTODO,REMOVE})(CardComponent);
