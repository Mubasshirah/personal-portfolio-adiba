import './Projects.css';

const Projects = () => {
    return (
        <div id="project" >
            <div className='text-center' data-aos='fade-down'><h1 className='text-4xl text-violet-950 font-semibold mt-24 mb-12'>--- Projects ---</h1></div>

            <div className="w-[80%] mx-auto">
                <div className="card lg:card-side bg-violet-400 bg-opacity-25 shadow-xl">
                    <div className='md:w-[50%] imgdiv md:h-[500px] h-[200px]'></div>
                    <div className="card-body md:w-[50%]">
                        <h2 className="card-title text-white">Features in this project ---</h2>
                        <ol className='text-white text-1xl'>
                            <li>1. Users are authenticated.</li>
                            <li>2. Some routes of this website are private. That means users cannot enter some routes if he/she is not logged in.</li>
                            <li>3. This website Is responsive.</li>
                        </ol>
                        <p className='text-white text-2xl mt-10'><span className='font-bold'>Technologies: </span>react.js, react-router-dom, react-bootstrap, react icons, express.js, firebase, vercel.</p>
                        <div className="">
                            <a target='_blank' rel='noreferrer' href="https://assignment-10-chef-table.web.app/">
                                <button className="btn bg-violet-950 rounded-full border-0 px-10 text-white font-semibold">Live Link</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-16 card lg:card-side bg-violet-400 bg-opacity-25 shadow-xl">
                    <div className='md:w-[50%] imgdiv2 md:h-[500px] h-[200px]'></div>
                    <div className="card-body md:w-[50%]">
                        <h2 className="card-title text-white">Features in this project ---</h2>
                        <ol className='text-white text-1xl'>
                            <li>1. Users are authenticated. Some routes of this website are private. That means users cannot enter some routes if
                                he/she is not logged in.</li>
                            <li>2. Website’s title is changed dynamically using custom hook.</li>
                            <li>3. Here is a search option in all toys route, where toys can be searched by name.</li>
                        </ol>
                        <p className='text-white text-2xl mt-10'><span className='font-bold'>Technologies: </span>react.js, react-router-dom, tailwind CSS, daisyUI, react icons, sweetAlert, react-tab,
                            react-animation, imgbb,express.js, mongoDB, firebase, vercel.</p>
                        <div className="">
                            <a target='_blank' rel='noreferrer' href="https://assignment-11-math-worms.web.app/">
                                <button className="btn bg-violet-950 rounded-full border-0 px-10 text-white font-semibold">Live Link</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card mt-16 lg:card-side bg-violet-400 bg-opacity-25 shadow-xl">
                    <div className='md:w-[50%] imgdiv3 md:h-[500px] h-[200px]'></div>
                    <div className="card-body md:w-[50%]">
                        <h2 className="card-title text-white">Features in this project ---</h2>
                        <ol className='text-white text-1xl'>
                            <li>1. Jwt token is used to secure the server site.</li>
                            <li>2. Without logged in, users cannot see some routes.</li>
                            <li>3. This website has three roles. Admin, instructor and users. There are different dashboards for different roles.</li>
                        </ol>
                        <p className='text-white text-2xl mt-10'><span className='font-bold'>Technologies: </span>react.js, react-router-dom, tailwind CSS, daisyUI, react icons, sweetAlert, react-tab, react-swiper,
                            react-hook-form, react-query, axios, react-animation, imgbb, express.js, mongoDB, firebase, vercel.</p>
                        <div className="">
                            <a target='_blank' rel='noreferrer' href="https://assignment-12-craft-school.web.app/">
                                <button className="btn bg-violet-950 rounded-full border-0 px-10 text-white font-semibold">Live Link</button>
                            </a>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Projects;