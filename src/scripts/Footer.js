import React, {Component} from 'react';
import twitter from '../images/twitter.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';

class Footer extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="row text-center footer py-5">
                    <div className="col-md-4">
                        <ul>
                            <li>News</li>
                            <li>About Us</li>
                            <li>Products</li>
                            <li>Resources</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul>
                            <li>Shop</li>
                            <li>Contact Us</li>
                            <li>
                                <address className="navbar-text p-0  mt-3">
                                    Los Angeles Skate Co.<br />
                                    5401 Santa Monica Blvd<br />
                                    Los Angeles, CA 90029<br />
                                    Phone: (323)-46-SKATE<br />
                                    <a href="https://www.facebook.com/LA-Skate-Co-158723624240308/"><img src={facebook} alt="Facebook logo" /></a>
                                    <a href="https://www.instagram.com/lask8/"><img src={instagram} alt="Instagram logo"/></a>
                                    <a href="https://twitter.com/lask8?lang=en"><img src={twitter} alt="Twitter logo" /></a>
                                </address>
                            </li>

                        </ul>
                    </div>
                    <div className="col-md-4">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3998.001006942465!2d-118.30924084070782!3d34.09131309625192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c0cb1e52d8b9%3A0x8348296386b1e25c!2sL.+A.+Skate+Co.!5e0!3m2!1sen!2sus!4v1522005604018" width="300" height="300" frameborder="0" style={{border:"0"}} allowfullscreen></iframe>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Footer;