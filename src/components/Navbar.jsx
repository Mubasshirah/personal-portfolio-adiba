

import { BsHouseDoorFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { GoProject } from "react-icons/go";
import { HiChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
const Navbar = () => {
    return (
        <div className='w-1/4 md:mx-auto py-4 ms-1 '>
            <div className="navbar  rounded-full fixed z-10">
                <div className="navbar-center lg:hidden flex-col bg-violet-800 rounded-full bg-opacity-25">

                    <ul className="menu   ">
                        <li><a href="#home"><BsHouseDoorFill className='w-[30px] h-[30px] text-violet-950'></BsHouseDoorFill></a></li>
                        <li><a href="#aboutme"><FaUserAlt className='w-[30px] h-[30px] text-violet-950'></FaUserAlt></a></li>
                        <li><a href="#skill"><GiBrain className='w-[30px] h-[30px] text-violet-950'></GiBrain></a></li>
                        <li><a href="#project"><GoProject className='w-[30px] h-[30px] text-violet-950'></GoProject></a></li>
                        <li><a href="#contactme"><HiChatBubbleOvalLeftEllipsis className='w-[30px] h-[30px] text-violet-950'></HiChatBubbleOvalLeftEllipsis></a></li>
                    </ul>

                </div>
                <div className="navbar-center hidden lg:flex bg-violet-800 rounded-full bg-opacity-25">
                    <ul className="menu menu-horizontal   ">
                    <li><a href="#home"><BsHouseDoorFill className='w-[30px] h-[30px] text-violet-950'></BsHouseDoorFill></a></li>
                        <li><a href="#aboutme"><FaUserAlt className='w-[30px] h-[30px] text-violet-950'></FaUserAlt></a></li>
                        <li><a href="#skill"><GiBrain className='w-[30px] h-[30px] text-violet-950'></GiBrain></a></li>
                        <li><a href="#project"><GoProject className='w-[30px] h-[30px] text-violet-950'></GoProject></a></li>
                        <li><a href="#contactme"><HiChatBubbleOvalLeftEllipsis className='w-[30px] h-[30px] text-violet-950'></HiChatBubbleOvalLeftEllipsis></a></li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;