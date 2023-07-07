import ProgressBar from "@ramonak/react-progress-bar";

const Skills = () => {
    return (
        <div id="skill">
            <div className='text-center' data-aos='fade-down'><h1 className='text-4xl text-violet-950 font-semibold mt-24 mb-12'>--- Skills ---</h1></div>
            <div className="w-[80%] mx-auto md:flex md:space-x-10 p-10   bg-violet-800   bg-opacity-25 shadow-lg rounded-xl z-10">
                <div className="md:w-1/2 ">
                <div className="md:flex justify-between mb-3">
                    <p className="text-white font-semibold pe-2 md:w-[20%] ">HTML5 :</p>
                    <ProgressBar
                        completed={90}
                        bgColor="#5e3685"
                        labelColor="#fffcfc"
                        transitionDuration="10s"
                        animateOnRender
                        dir="auto"
                        className="md:w-[70%] " />
                </div>
                <div className="md:flex justify-between mb-3">
                    <p className="text-white font-semibold pe-2 md:w-[20%] ">CSS3 :</p>
                    <ProgressBar
                        completed={85}
                        bgColor="#5e3685"
                        labelColor="#fffcfc"
                        transitionDuration="10s"
                        animateOnRender
                        dir="auto"
                        className="md:w-[70%] " />
                </div>
                <div className="md:flex justify-between mb-3">
                    <p className="text-white font-semibold pe-2 md:w-[20%] ">JavaScript :</p>
                    <ProgressBar
                        completed={70}
                        bgColor="#5e3685"
                        labelColor="#fffcfc"
                        transitionDuration="10s"
                        animateOnRender
                        dir="auto"
                        className="md:w-[70%] " />
                </div>
                <div className="md:flex justify-between mb-3">
                    <p className="text-white font-semibold pe-2 md:w-[20%] ">ES6 :</p>
                    <ProgressBar
                        completed={70}
                        bgColor="#5e3685"
                        labelColor="#fffcfc"
                        transitionDuration="10s"
                        animateOnRender
                        dir="auto"
                        className="md:w-[70%] " />
                </div>
                <div className="md:flex justify-between mb-3">
                    <p className="text-white font-semibold pe-2 md:w-[20%] ">React.js :</p>
                    <ProgressBar
                        completed={65}
                        bgColor="#5e3685"
                        labelColor="#fffcfc"
                        transitionDuration="10s"
                        animateOnRender
                        dir="auto"
                        className="md:w-[70%]" />
                </div>
                <div className="md:flex justify-between mb-3">
                    <p className="text-white font-semibold pe-2 md:w-[20%] ">Bootstrap :</p>
                    <ProgressBar
                        completed={70}
                        bgColor="#5e3685"
                        labelColor="#fffcfc"
                        transitionDuration="10s"
                        animateOnRender
                        dir="auto"
                        className="md:w-[70%] " />
                </div>
                </div>
                <div className="md:w-1/2 ">
                <div className="md:flex justify-between mb-3">
                    <p className="text-white font-semibold pe-2 md:w-[30%] mx-auto">React Bootstrap :</p>
                    <ProgressBar
                        completed={90}
                        bgColor="#5e3685"
                        labelColor="#fffcfc"
                        transitionDuration="10s"
                        animateOnRender
                        dir="auto"
                        className="md:w-[70%] " />
                </div>
                <div className="md:flex justify-between mb-3">
                    <p className="text-white font-semibold pe-2 md:w-[30%] mx-auto">Tailwind CSS :</p>
                    <ProgressBar
                        completed={85}
                        bgColor="#5e3685"
                        labelColor="#fffcfc"
                        transitionDuration="10s"
                        animateOnRender
                        dir="auto"
                        className="md:w-[70%] " />
                </div>
                <div className="md:flex justify-between mb-3">
                    <p className="text-white font-semibold pe-2 md:w-[30%] mx-auto">Express.js :</p>
                    <ProgressBar
                        completed={50}
                        bgColor="#5e3685"
                        labelColor="#fffcfc"
                        transitionDuration="10s"
                        animateOnRender
                        dir="auto"
                        className="md:w-[70%] " />
                </div>
                <div className="md:flex justify-between mb-3">
                    <p className="text-white font-semibold pe-2 md:w-[30%] mx-auto">MongoDB :</p>
                    <ProgressBar
                        completed={50}
                        bgColor="#5e3685"
                        labelColor="#fffcfc"
                        transitionDuration="10s"
                        animateOnRender
                        dir="auto"
                        className="md:w-[70%] " />
                </div>
                <div className="md:flex justify-between mb-3">
                    <p className="text-white font-semibold pe-2 md:w-[30%] mx-auto">Node.js :</p>
                    <ProgressBar
                        completed={50}
                        bgColor="#5e3685"
                        labelColor="#fffcfc"
                        transitionDuration="10s"
                        animateOnRender
                        dir="auto"
                        className="md:w-[70%]" />
                </div>
                <div className="md:flex justify-between mb-3">
                    <p className="text-white font-semibold pe-2 md:w-[30%] mx-auto">JWT :</p>
                    <ProgressBar
                        completed={40}
                        bgColor="#5e3685"
                        labelColor="#fffcfc"
                        transitionDuration="10s"
                        animateOnRender
                        dir="auto"
                        className="md:w-[70%] " />
                </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;