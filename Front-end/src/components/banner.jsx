import '../styles/banner.css'
const Banner = (props) => {
    let title=props.data
    return ( 
        <div className="banner">
            <div className="title1">
                <h1>{title}</h1>
            </div>
        </div>
     );
}
export default Banner;