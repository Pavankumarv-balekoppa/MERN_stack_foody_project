import Banner from "./banner";

const About = () => {
    let title="About page"
    return (
        <div className="about">
            <Banner data={title}/>
        </div>
      );
}
 
export default About;