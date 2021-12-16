import React from 'react';
import { connect } from 'react-redux';
function BadgeComponent({BadgeProd}){
    return(
       
            
        <div style={{"margin":"80px 0px 10px 0px"}}>
            <center>
            <button type="button" className="btn btn-primary position-relative">
            Total Products
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {BadgeProd.length}
            </span>
            </button>
            </center>
        </div>
    
      
    )
}
const mapStatetoProps=(state)=>({
    BadgeProd:state
})
export default connect(mapStatetoProps)(BadgeComponent)