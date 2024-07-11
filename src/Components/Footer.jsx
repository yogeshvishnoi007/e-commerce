import React from 'react'

const Footer = () => {
    return (

        <footer>
            <div className='footer-col'>
                <h4>Products</h4>
                <ul>
                    <li><a href="">team</a></li>
                    <li><a href="">advertising</a></li>
                    <li><a href="">talest</a></li>
                </ul>
            </div>
            <div className='footer-col'>
                <h4>Network</h4>
                <ul>
                    <li><a href="">technology</a></li>
                    <li><a href="">science</a></li>
                    <li><a href="">business</a></li>
                    <li><a href="">professional</a></li>
                    <li><a href="">API</a></li>
                </ul>
            </div>
            <div className='footer-col'>
                <h4>Company</h4>
                <ul>
                    <li><a href="">about</a></li>
                    <li><a href="">legal</a></li>
                    <li><a href="">contact</a></li>
                </ul>
            </div>
            <div className='footer-col'>
                <h4>Follow Us</h4>
                <div className='links'>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </footer>

    )
}

export default Footer