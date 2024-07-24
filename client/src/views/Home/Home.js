import React, { useEffect, useState } from 'react'
import "./Home.css"
import PlantCard from "../../components/PlantCard/PlantCard"
import axios from "axios"
import toast,{Toaster} from "react-hot-toast"
import {Link} from "react-router-dom"

function Home() {
    const [plants,setPlants]=useState([])

    const loadPlants = async () => {
      toast.loading("Loading Plants...")
        const response = await axios.get(`${'https://nursary-plant-project-2.onrender.com'}/plants`)

        toast.dismiss()


        toast.success("Plants Loaded Successfully")

        setPlants(response.data.data)
    }

    useEffect(()=>{
  
        loadPlants()
    },[])

  return ( 
    <div>
      <div className='form-heading-cont'>

      <div className='form-heading' >Nursery Plant</div>
      <Link
        className='button-add add-button'
        
        to={`/add`}>
        Add New Plant
        
      </Link>

       {/* <Link to="/add">
      <img src={ImgAdd}className='add-btn'/>
      </Link>  */}

      </div>



     
      {
        plants.map((plant,i)=>{
            const {
                _id,
                name,
                category,
                price,
                image,
                description
             }=plant
            return (<PlantCard
                 key={i}
                 _id={_id} 
                 name={name} 
                 category={category} 
                 price={price} 
                 image={image} 
                 description={description}
                 loadPlants ={loadPlants }/>
                )
        })
      }
      {

    
      }
      <Toaster/>
    
    </div>
  )
}

export default Home
