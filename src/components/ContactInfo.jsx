import React from "react";
import { Link } from 'react-router-dom';
import './ContactInfo.css';
import instagram_icon from '../img/Instagram--2.svg';
import facebook_icon from '../img/Vector--2.svg';
import twitter_icon from '../img/Twitter--2.svg';
import linkedin_icon from '../img/Linkdin--2.svg';
import phone1_icon from '../img/phone (1).svg';
import phone2_icon from '../img/phone (2).svg';
export function ContactInfo() {
    return (
        <footer class="row g-0 footer">
            <section class="col-lg-6 col-md-6">


                <div class=" m-5 inner-2">
                    <h2 class="parag-2">A-EYE</h2>

                    <article>
                        <p class="article">
                            A-EYE for designing and visualizing your space with your creativity and power of modern technology.
                        </p>
                    </article>
        
        
                    <section class="icon-3">
                        <Link to="https://www.instagram.com/aeye.s2024/"  className='link'>
                            <img src={instagram_icon} class="img-fluid" alt=""/>
                        </Link>
                        <Link to="https://www.facebook.com/profile.php?id=61554231302002"  className='link'>
                            <img src={facebook_icon} class="img-fluid" alt=""/>
                        </Link>
                        <Link to="https://twitter.com/aeye_s2024"  className='link'>
                            <img src={twitter_icon} class="img-fluid" alt=""/>
                        </Link>
                        <Link to="https://www.linkedin.com/in/a-eye-ba92522a3/"  className='link'>
                            <img src={linkedin_icon} alt=""/>
                        </Link>
                        
                    </section>
                </div>

            </section>


            <section class="col-lg-6 col-md-6 pt-3 ">


                <div class=" m-5 inner-2  ">
                    <h2 class="parag-2">
                        Contact Us
                    </h2>
        
                    <div class="mt-2">
                        <span>
                            <img src={phone1_icon} class="img-fluid img-3"   alt=""/>
                        </span>
                        <span>
                            <Link to="" class="tel_num">  +20 109 252 7462</Link>
                        </span>
                    </div>
        
                    <div class="mt-2">
                        <span>
                            <img src={phone2_icon} class="img-fluid img-3"   alt=""/>
                        </span>
                        <span>
                            <Link to="aeye.s2024@gmail.com" class="tel_num"> aeye.s2024@gmail.com</Link>
                        </span>
                    </div>
        
                </div>

            </section>
    </footer>
    )
}