import { useEffect, useState } from "react";
import Banner from "./banner";
import axios from "axios";
import { Link } from "react-router-dom";


const Food = () => {
    let title="All Post"
let[posts,setposts]=useState([])

useEffect(()=>{
    let fecthing =async ()=>{
        let response= await axios.get("http://localhost:4000/posts")
        let data= await response.data
        console.log(data);
        setposts(data)
    }
    fecthing()
})

    return ( 
        <div className="food">
            <Banner data={title}/>
            <div className="post_list d-flex flex-wrap">
                { posts.map((x)=>(
                    <div className="pp m-2 p-2 border bg-light">
                        <img height={200} width={250} src={x.image} alt="" />
                        <h3>Title : {x.title}</h3>
                        <h3>Author : {x.author}</h3>
                        {/* <iframe>{x.location}</iframe><br /> */}
                        <Link className="btn btn-primary" to={`/home/food/${x._id}`}>Read_Post</Link>
                    </div>
                )) }
            </div>
        </div>
     );
}
 
export default Food;