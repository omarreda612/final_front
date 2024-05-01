import React from 'react';
import './About.css';
import Ar_bot from '../img/Ar-bot.png';
import Eng_bot from '../img/Eng-bot.jpg';
import female from '../img/Leen.jpg'
import { Reviews } from '../components/Reviews';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function About() {


    return (
        <div className='about-page'>
            <header className='mt-0'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>ABOUT US</h1>
                </div>
            </header>

            <div className='container my-5'>
                <p> هي شركة ناشئة متخصصة في تقنيات التصميم ثلاثي الأبعاد وتصميم الأثاث. نحن نهتم بتقديم حلول إبداعية ومبتكرة من خلال استخدام التكنولوجيا لتحسين تجربة تصميم وتجربة الأثاث. فريقنا مكون من محترفين متحمسين ومبدعين يسعون لتحقيق أعلى مستويات رضا العملاء وتحقيق الريادة في هذا المجا</p>
                <p>A-EYE! We're a trailblazer in the world of 3D VR design. Our main service, Full Eye, lets users interact with their environment in virtual reality, and design their interior in a way that feels almost lifelike. And if you're looking for something a little more... augmented, we've got Half Eye, which brings interior design to life in augmented reality. We're all about empowering people to unleash their creativity and bring their ideas to life in ways they never thought possible</p>

                <div className='row justify-content-center'>
                <Card style={{ width: '27rem', border:'none' ,textAlign:'center',}}>
                    <Card.Img variant="top" src={Ar_bot} className='img-fluid my-4 rounded' />
                    <Card.Body>
                        <Card.Title >انا زين</Card.Title>
                        <Card.Text >
                          مساعدك افتراضي يتحدث اللغة العربية ويمكنه مساعدتك في العديد من الأمور
                        </Card.Text>
                        <Button variant="dark"><Link to={'https://convai.com/shared-character/?id=1af7cf64-0587-11ef-a064-42010a7be00e'} target='_blank' className='text-decoration-none'> تحدث الان</Link></Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '27rem', border:'none' ,textAlign:'center',}}>
                    <Card.Img variant="top" src={Eng_bot} className='img-fluid my-4 rounded' />
                    <Card.Body>
                        <Card.Title > I am Omar</Card.Title>
                        <Card.Text >
                       I am your virtual assistant that speaks English and can help you with many things
                        </Card.Text>
                        <Button variant="dark"><Link to={'https://arcade.inworld.ai/characters/diPN7LIxCl2smXUk'} target='_blank' className='text-decoration-none'> Chat now</Link></Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '27rem', border:'none' ,textAlign:'center',}}>
                    <Card.Img variant="top" src={female} className='img-fluid my-4 rounded' />
                    <Card.Body>
                        <Card.Title > I am Leen</Card.Title>
                        <Card.Text >
                        I am your female virtual assistant that speaks English and can help you with many things
                        </Card.Text>
                        <Button variant="dark"><Link to={'https://arcade.inworld.ai/characters/diPN7LIxCl2smXUk'} target='_blank' className='text-decoration-none'> Chat now</Link></Button>
                    </Card.Body>
                </Card>
                </div>
            </div>


            <div className='my-5'>
                <Reviews />
            </div>
        </div>
    )
}

export default About;