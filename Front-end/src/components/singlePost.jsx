import Banner from "./banner";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const SinglePost = () => {
    const { id } = useParams('')
    let title = "single post information"

    let [posts, setposts] = useState([])

    useEffect(() => {
        let fecthing = async () => {
            let response = await axios.get(`http://localhost:4000/posts/${id}`)
            let data = await response.data
            // console.log(data);
            setposts(data)
        }
        fecthing()
    }, [])

    return (
        <div className="singlepost">
            <Banner data={title} />
            <div className="cc m-5 border bg-light">
                <div className="content d-flex">
                    <div className="img p-3">
                        <img height={500} width={550} src={posts.image} alt="" />
                    </div>
                    <div className="details p-3">
                        <h1>Title : {posts.title}</h1>
                        <h1>Author : {posts.author}</h1>
                        <h3>Summary :{posts.summary}</h3>
                        <h4>Location :</h4>
                        <iframe className="border m-5" frameborder="0">{posts.location}</iframe>
                    </div>
                </div>
                <div className="bb text-center mb-3">
                <Link className="btn btn-primary" to={`/home/food`} >Back</Link>
                </div>
            </div>
        </div>
    );
}

export default SinglePost;