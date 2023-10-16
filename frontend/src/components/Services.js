import './Services.css';

function Services() {
  return (
    <div className="services">
        <div>
            <div className="services-title">
                <h1>What I Do</h1>
            </div>
            <div className="services-list">
                <div className="services-item">
                    <div style={{display:"flex",flex:"1", border: "2px solid #000",justifyContent:"center"}}>
                        <div className="services-item-icon">

                        </div>
                    </div>
                    <div className="services-item-content">
                        <div className="services-item-title">
                            UI &UX
                        </div>
                        <div className="services-item-discrip">
                        <h5>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh 
                euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat.</h5>
                        </div>
                    </div>
                </div>

                <div className="services-item">

                </div>
                <div className="services-item">

                </div>
            </div>
        </div>
    </div>
  );
}

export default Services;
