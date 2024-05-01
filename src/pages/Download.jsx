import React from 'react';
import './Download.css';
import { Link } from 'react-router-dom';
import section1 from '../img/Computer.svg';
import section2 from '../img/Mobile.svg';
import unity_icon from '../img/devicon_unity.svg';
import playstore_icon from '../img/button m1.svg';
import appstore_icon from '../img/button m2.svg';


function Download() {
return (
        <div className='download-page '>


            <section class="sec-1 row g-0 mx-auto mt-0">

                <div class="col-lg-9">
                    <img src={section1} class="img-fluid border-0" alt=""/>
                </div>


                <div class="col-lg-3">
                    <button class="btn button-1">
                        <span className='unity_icon '><img src={unity_icon} alt=""/> </span>
                        <p class="parag-1">
                            Download
                        </p>
                    </button>
                </div>
            </section>


            <section class="sec-1 row g-0 container mx-auto mt-5 ">


                <div class="col-lg-3 inner-1 ">
                <Link to={'/'} > 
                    <img src={playstore_icon} class="img-fluid img-2 border-0" alt=""/>

                </Link>
                
                <Link to={'/'}>
                    <img src={appstore_icon} class="img-fluid img-2 border-0" alt=""/>
                </Link>

                </div>



                <div class="col-lg-9 mx-auto">
                    <img src={section2} class="img-fluid border-0" alt=""/>
                </div>


            </section>
        </div>
    )
}

export default Download;