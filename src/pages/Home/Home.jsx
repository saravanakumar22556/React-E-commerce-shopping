import React from 'react'
import {Link} from 'react-router-dom'
import image from '../Home/pic.jpg'
import './Home.css'

const Home = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${image})` }}>
      <div className="headerContainer">
        <h1> Mobile Oceans</h1>
        <p> PHONES THAT FIT FOR ANY GENERATIONS</p>
        <Link to="shop">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home