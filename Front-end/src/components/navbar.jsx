import '../styles/navbar.css'
const Navbar = () => {
    return ( 
        <div className="navbar">
          <div className="title">
            <h1>FOODIE</h1>
          </div>
          <div className="links1  ">
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/home/about">About</a></li>
                <li><a href="/home/food">Foods</a></li>
                <li><a href="/home/add-posts">Add post</a></li>
                <li><a href="/">logout</a></li>
            </ul>
          </div>
        </div>
     );
}
 
export default Navbar;