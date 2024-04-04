import React from 'react'
import image1 from './images/image1.jpg'
import image2 from './images/image2.jpg'
import image3 from './images/image3.jpg'
import image4 from './images/image4.jpg'


const Home = () => {
  const myStyle = {
    padding : '20px',
  };
  return (
    <div className='Home-page'>
        <div className='top'>
              <div>
                  <h1>You're in the right place</h1>
                  <p>for planning your Big Day!</p>
                  <button className ="header-button">Book Now</button>
              </div>

              <div>
                  <img className="header-image" src = "https://source.unsplash.com/random/300x300/?birthdayparty" alt=""/>
              </div>
          </div>

        <div className="service">
              <div className="service-container">
                  <div>
                      <h2>we Provide Best</h2>
                      <h2>Customer Experience</h2>
                  </div>
                  <div>
                      <p>|| we ensure that our customer have the best experience</p>
                  </div>
                </div>

              <div className="service-container-2">
                    <div>
                        <i className="fa-regular fa-face-smile"></i>
                        <h4>Satisfaction Guarantee</h4>
                        <p>lorem ipsum, dolor sit amet consectueru adipiscing elit.</p>
                    </div>
                    <div>
                        <i className="fa-regular fa-face-smile"></i>
                        <h4>Experienced workers</h4>
                        <p>lorem ipsum, dolor sit amet consectueru adipiscing elit.</p>
                    </div>
                    <div>
                        <i className="fa-regular fa-face-smile"></i>
                        <h4>Other Shows</h4>
                        <p>Magic Show, balloon castle for kids, caligraphy, painting and etc</p>
                    </div>
                </div>

          </div>
    <div style={myStyle}>
        <h2 style={myStyle}>Most Wanted</h2>
            <div className="new-arrival">
                <div className="new-arrival-container">
                    <img src={image1} alt="" style={{ width: '250px', height: '200px' }}/>
                    <button>Book Now <i className="fa-solid fa-arrow-right"></i></button>
                </div>
                <div className="new-arrival-container">
                    <img src={image2} alt="" style={{ width: '250px', height: '200px' }}/>
                    <button>Book Now <i className="fa-solid fa-arrow-right"></i></button>
                </div>
                <div className="new-arrival-container">
                    <img src={image3} alt="" style={{ width: '250px', height: '200px' }}/>
                    <button>Book Now <i className="fa-solid fa-arrow-right"></i></button>
                </div>
                <div className="new-arrival-container">
                    <img src={image4} alt="" style={{ width: '250px', height: '200px' }}/>
                    <button>Book Now <i className="fa-solid fa-arrow-right"></i></button>
                </div>
             </div>
      </div>
       
    
    </div>
    
  )
}

export default Home