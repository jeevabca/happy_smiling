import React from 'react'
import image1 from './images/image1.jpg'
import image2 from './images/image2.jpg'
import image3 from './images/image3.jpg'
import image4 from './images/image4.jpg'
import image5 from './images/image5.jpg'
import image6 from './images/image6.jpg'
import image7 from './images/image7.jpg'
import image8 from './images/image8.jpg'
const Works = () => {
  return (
    <div className="product-section">
        <form className="product-search">
            <input type="text" id="search" placeholder="Search"/>
            
        </form>

        <div className="products" id="product">
            <div className="product-box">
                <img src={image1} alt="" style={{ width: '250px', height: '200px' }} />
                <p>puberty function </p>
            </div>
            <div className="product-box">
                <img src={image2} alt="" style={{ width: '250px', height: '200px' }} />
                <p>coco-melon theme</p>
            </div>
            <div className="product-box">
                <img src={image3} alt="" style={{ width: '250px', height: '200px' }} />
                <p>chrome ballo0n theme</p>
            </div>
            <div className="product-box">
                <img src={image4} alt="" style={{ width: '250px', height: '200px' }} />
                <p>chrome ballo0n theme</p>
            </div>
            <div className="product-box">
                <img src={image5} alt="" style={{ width: '250px', height: '200px' }} />
                <p>simple cloth theme</p>
            </div>
            <div className="product-box">
                <img src={image6} alt="" style={{ width: '250px', height: '200px' }} />
                <p>jungle theme</p>
            </div>
            <div className="product-box">
                <img src={image7} alt="" style={{ width: '250px', height: '200px' }} />
                <p>Enagement theme</p>
            </div>
            <div className="product-box">
                <img src={image8} alt="" style={{ width: '250px', height: '200px' }} />
                <p>general theme</p>
            </div>
            
        </div>
    </div>

  )
}

export default Works