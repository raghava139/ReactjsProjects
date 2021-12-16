import React, { useState } from 'react'
import './Food.css'
function Food() {
    const [searchFood,setSearchFood]=useState('');
    const [ourData,setOurData]=useState([''])
    const YOUR_APP_ID='a9c2ea2d'
    const YOUR_APP_KEY='d62cd7a7ab1409c32a60fc1b4296d029'
     const mySubmitting=(e)=>{
         e.preventDefault()
         fetch(`https://api.edamam.com/search?q=${searchFood}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`)
         .then(
             response=>response.json()
             )
        .then(
                    function hello(CorrectData){
                                return setOurData(CorrectData.hits)
                            }
                )
         console.log(ourData)
     }
    return (

<div>
        {/* header */}
            <header className='myHeader'>
                <div>
                      <a href='https://github.com/raghava139' target="_blank"><img src="https://o.remove.bg/downloads/7335f710-82a5-469f-8073-87d00c00aa77/images-removebg-preview.png"className='myImage'/>     </a>
                        <span> Raghavendra Food & Restaurants</span>
                   
                </div>
            </header>

        <div className='myCenter'>
            <h3 className='highligh'>Search Your Favourite Food</h3>
            <form onSubmit={mySubmitting}>
                <input type='text'value={searchFood} onChange={(e)=>setSearchFood(e.target.value)}className='MyInput'/>
                <br/>
                <input type='submit'className='btn btn-danger'style={{width:'200px',margin:'5px'}}/>
            </form>
            {/* {ourData>=1?<GetProducts ourData={ourData}/>:null} */}
        </div>

        {/* sliding */}

        <img className="animate w-100" src="https://homemade-nonveg.weebly.com/uploads/1/2/9/9/12996887/published/chicken-mutton-fish-bhakri-biryani-badlapur.png?1515420554" alt="First slide"/>
  


            {/* mapping */}

            <div className='row'>
            {ourData.map((data,index)=>{
                return   <div className="card col-md-3 g-2 p-4" key={index}> 
                    <img src={data?.recipe?.image} className="card-img-top img-fluid" alt={data?.recipe?.label}/>
                    <div className="card-body">
                        <h5 className="card-title">LABEL:{data?.recipe?.label}</h5>
                        <p className="card-text">MEAL TYPE:{data?.recipe?.mealType}</p>
                        <p className="card-text">CALORIES:  {data?.recipe?.calories}</p>

                        <a href="#" className="btn btn-primary"style={{textAlign:'center'}}>buy</a>
                    </div>
                    </div>
            })}
        </div>

        {/* footer */}
            <footer className='myFooter'>
              <div className='myFlex'>
                  <div>Address:Bosenagar Street| Rayachoty | kadapa(dist) | AndhraPradesh</div>
                  <div>Email:yallamandaraghavendra@gmail.com</div>
                  <div>Mobile:9676324174</div>
              </div>
            </footer>
        
</div>          
    )
}
export default Food
