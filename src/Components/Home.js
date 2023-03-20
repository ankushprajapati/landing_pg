import React from 'react'
import Navbar from './Navbar'
import BannerImage from '../Assets/home-banner-image.png';
import { FiArrowRight } from 'react-icons/fi';
import Footer from './Footer';


const Home = () => {
  return (
    <div className='home-container'>
      <Navbar />
      <div className='home-banner-container'>

        <div className='home-text-section'>
          <h1 className='primary-heading'>
            Your Favourite Food Deliverd Hot & Fresh
          </h1>
          <p className='primary-text'>
          letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages
          </p>
          <button className='secondary-button'>
            Order Now < FiArrowRight /> { '' }
          </button>
        </div>
        <div className='home-image-section'>
          <img src={BannerImage} alt='' />
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default Home;
