import '../styles/home .css'
const Home = () => {
    return (
        <div className="home">
           
            <div className="home1">
                <div className="image row ">
                    <div className="image col-lg-8 col-sm-12 p-0">
                        <img className="col-lg-8 col-sm-12 w-100" src="images/i5.jpeg" alt="" />
                    </div>
                    <div className="sec col-lg-4 col-sm-12 bg-warning p-5 ">
                        <p>featured Posts</p>
                        <h1 className="">love the delicious & tasty Foods</h1>
                        <hr size="5px" width="75%" color="red"/>
                        <p>A small river named Duden flows by their place   and supplies it with the necessary regelialia</p>
                        <button className="btn btn-dark btn-outline-danger text-light">Read more &rarr;</button>
                    </div>

                </div>
            </div>
            <h1 id="hg1">Recent Stories</h1>
            <section className="home3 row ">
                <div className="k1 col-lg-6 row  ">
                    <div className="k11 col-6">
                        <img src="/images/i1.jpeg" width="300px" height="280px" alt="" />
                        
                        <p>Tasty & Delicious Foods</p>
                        <a className="btn btn-light text-danger" href="">Read More   &rarr;</a>
                    </div>
                    <div className="k12 col-6">
                        <img  src="/images/i2.jpeg" width="300px" height="280px" alt="" />
                        <p>Tasty & Delicious Foods</p>
                        <a className="btn btn-light text-danger" href="">Read More   &rarr;</a>
                    </div>
                    <div className="k13 col-6">
                        <img  src="/images/i3.jpeg" width="300px" height="280px" alt="" />
                        <p>Tasty & Delicious Foods</p>
                        <a className="btn btn-light text-danger" href="">Read More   &rarr;</a>
                    </div>
                    <div className="k14 col-6">
                        <img  src="/images/i5.jpeg" width="300px" height="280px" alt="" />
                        <p>Tasty & Delicious Foods</p>
                        <a className="btn btn-light text-danger" href="">Read More   &rarr;</a>
                    </div>
                </div>
                <div className="k2 col-lg-6">
                    <img src="/images/i7.jpeg" width='600px' height='700px' alt="" />
                </div>
            </section>
        </div>);
}

export default Home;