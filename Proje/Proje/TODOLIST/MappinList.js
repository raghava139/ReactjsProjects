import React from 'react'
import './TOdo.css'
function MappinList({Lists,deleteList}) {
    
    return (
        <div className='myMap'>
            {Lists.map((AllITems,index)=>{
                return <h3 key={index}>{AllITems}&nbsp;<button onClick={()=>deleteList(index)} className='myCOLOr btn-danger'>Delete<i class="bi bi-trash"></i></button></h3>
            })}
        </div>
    )
}

export default MappinList
