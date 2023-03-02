import Navbar from "./navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Addpost from "./addPost";
import Food from "./food";
import SinglePost from "./singlePost";

const HomePortel = () => {
     return (
          <div className="homeportel">
               <Navbar />
               <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/add-posts" element={<Addpost />} />
                    <Route path='/food' element={<Food/>} />
                    <Route path='/food/:id' element={<SinglePost/>} />
               </Routes>
          </div>
     );
}

export default HomePortel;