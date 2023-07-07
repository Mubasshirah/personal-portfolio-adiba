import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import portfolio from '../assets/portfolio.jpg';
import { Typewriter } from 'react-simple-typewriter';
import { Fade } from "react-awesome-reveal";
const Banner = () => {

    useEffect(() => {
        AOS.init({ duration: 3000 })
    }, [])
    return (
        <div className='md:flex pt-24 pb-4 px-5  md:ps-5 md:w-[90%] mx-auto' id='home'>
            <div className="card lg:card-side  md:w-2/3 mx-auto mb-10 border-gray-950" data-aos='fade-right'>

                <div className="card-body">
                    <h2 className="text-8xl font-bold text-white">Hello!</h2>
                    <h2 className="text-6xl font-semibold text-white">I am
                        Adiba Mubasshirah.</h2>
                    <h2 className="text-4xl font-semibold text-white">I am a <span className='text-4xl font-bold text-violet-950'>
                       

                            <Typewriter
                                words={['Front-end Web Developer.','Front-end Web Designer.']}
                                loop={5}
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={70}
                                delaySpeed={1000}
                              
                            />
                       
                    </span>
                    </h2>

                    <hr className='mt-8 border-2' />
                    <p className='pe-20 pt-4 text-1xl  text-white'>Leveraging my expertise in front-end web development and React to create highly interactive and visually appealing user interfaces.Aiming to contribute to the development of cutting-edge web applications that provide seamless user experiences, optimize performance, and staying updated with
                    emerging web technologies. </p>
                    
                  <div className='inline pt-5'>
                 
                  <Fade delay={1e3} cascade damping={1e-2}>
                               <a href="resume of Adiba.pdf" download="resume of Adiba.pdf"> <button className='py-2 px-5 border-white border-2 text-white bg-violet-950 border-0 font-semiold text-1xl hover:bg-white hover:text-violet-950 rounded-xl'>Download My Resume</button></a>
                            </Fade>
                  </div>

                </div>

            </div>
            <div className="card lg:card-side  md:w-1/3 mx-auto mb-10 flex items-center justify-center " data-aos='zoom-in'>

                <img className='border-violet-400 border-8' style={{ borderRadius: '50%', width: '400px', height: '400px' }} src={portfolio} />

            </div>
        </div>
    );
};

export default Banner;