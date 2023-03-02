import axios from "axios";
import { useState } from "react";

const Addpost = () => {


    let [author,setauther]=useState('')
    let[title,settitle]=useState('')
    let[summary,setsummary]=useState('')
    let[image,setimage]=useState('')
    let[location,setlocation]=useState('')

    let addPost=(e)=>{

        e.preventDefault()
        let data={author,title,summary,image,location}
        console.log(data);

        if(author && title && summary&& image && location)
        {
            axios.post('http://localhost:4000/add-posts',data)
            .then(res=>{
                alert(res.data.message)
            }).catch(err=>{
                alert(err.data.message)
            })
        }
        else{
            alert("Please fill all the fields")
        }


    }
    return (
        <div className="addpost">

            <div className="row justify-content-center">
                <div className="images col-6">
                    <img src="/images/i6.jpeg" alt="" />
                </div>
                <div className="frome col-5 ms-5 ">
                    <h1>Add Post</h1>
                    <hr />
                    <form action="" onSubmit={addPost}>
                        <div className="author">
                            <label class="form-label" htmlFor="">Author</label>
                            <input type="text" placeholder="Author"name="author" 
                            // value={author}
                            onChange={(e)=>setauther(e.target.value)} className="form-control" />
                        </div>
                        <div className="title">
                            <label htmlFor="" className="form-label">Titel</label>
                            <input type="text" className="form-control"  name="title"
                            // value={title} 
                            onChange={(e)=>settitle(e.target.value)}/>
                        </div>
                        <div className="summary">
                            <label htmlFor="" className="form-label">Summary</label>

                            <textarea rows="4" cols="50" type="text-area" name="summary" 
                            // value={summary}
                            onChange={(e)=>setsummary(e.target.value)} className="form-control"  placeholder="Summary"/>
                            
                        </div>
                        <div className="image">
                            <label htmlFor="" className="form-label">Image</label>
                            <input type="text" className="form-control"
                            // value={image} 
                            onChange={(e)=>setimage(e.target.value)} name="image" placeholder="imges of the project" />

                        </div>
                        <div className="location">
                            <label htmlFor="" className="form-label">Location</label>
                            <input type="text" className="form-control"
                            // value={location}
                            onChange={(e)=>setlocation(e.target.value)}
                             name="location" placeholder="Location of the post" />
                        </div>
                        
                        <button  className="btn btn-danger">Add Post</button>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default Addpost;