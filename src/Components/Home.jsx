import React from 'react'
// import bg from '../assets/bg.jpg'
import b1 from '../assets/bg-1.avif'
import b2 from '../assets/bg-2.avif'
import bg from '../assets/bg.jpg'
import Products from './Products'


const Home = () => {
    return (
        <>
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <img src={bg} class="d-block w-100" alt="..." style={{height:"350px"}}/>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src={b1} class="d-block w-100" alt="..." style={{height:"350px"}}/>
                    </div>
                    <div class="carousel-item">
                        <img src={b2} class="d-block w-100" alt="..." style={{height:"350px"}}/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <Products/>
        </>


    )
}

export default Home