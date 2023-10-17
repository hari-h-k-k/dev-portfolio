import './Hero.css';

function Hero() {
  return (
    <div className="hero">
        <div className="hero-content">
            <h1>Empowering Ideas, Crafting Solutions</h1>
            <div style={{display:'flex',justifyContent:'center'}}>
              <div className="hero-name">
                <h1>Zoid Labs</h1>
              </div>
            </div>
            <h1>Robotics | Automation | Design</h1>
            <h3>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh 
                euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat.</h3>
            <button className="get-started-button">Get Started</button>
        </div>
      
    </div>
  );
}

export default Hero;
