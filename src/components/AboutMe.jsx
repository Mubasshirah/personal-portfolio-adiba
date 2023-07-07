import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
const AboutMe = () => {
    useEffect(() => {
        AOS.init({ duration: 3000 })
    }, [])
    return (
        <div id='aboutme'>
   <div className='text-center' data-aos='fade-down'><h1 className='text-4xl text-violet-950 font-semibold'>--- About Me ---</h1></div>
   <div className='w-[80%] p-5 m-5 my-12 bg-violet-800 text-white mx-auto bg-opacity-25 shadow-lg rounded-xl' data-aos='flip-down'>
          <p className='text-2xl'>I am Adiba, a junior front-end web developer with a focus on React from Bangladesh. Though my major was pure Mathematics, I switched my career and dive into learning web development due to my passion for web development. I have 6 months of experience with 10 finished projects and 1 satisfied client.

</p>
<p className='pt-5 pb-2 text-1xl'>Email:  adibaju1994@gmail.com</p>
<p className='text-1xl'>Contact No.:  01303411574</p>
<div className='text-center text-white text-4xl flex py-5 justify-center items-center   '>
<a target='_blank' rel='noreferrer' href="https://github.com/Mubasshirah" className='pe-2'><FaGithub></FaGithub></a> 
 <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/adiba-mubasshirah-892407183//"   className='ps-2'><FaLinkedin></FaLinkedin></a>
</div>
   </div>
    </div>
    );
};

export default AboutMe;