import React from 'react'

import { RiDoorOpenFill } from "react-icons/ri";
import { CiCoins1 } from "react-icons/ci";
import { CiBoxes } from "react-icons/ci";
import { CiBullhorn } from "react-icons/ci";
import { CiCoffeeCup } from "react-icons/ci";
import { CiDumbbell } from "react-icons/ci";
import { CiFries } from "react-icons/ci";
import { CiMoneyBill } from "react-icons/ci";

import { AiFillGithub } from "react-icons/ai";
import { AiOutlineCodepen } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const Header = () => {
    return (
        <header id='header' role='banner'>
            <h1 className='header__logo'>
                <a href='/'>
                    <em aria-hidden='true'>3ik</em>
                    <span>Hestia 502</span>
                </a>
            </h1>

            <nav className='header__menu'>
                <ul className='menu'>
                    <li className='active'>
                        <a href='/'>
                            <RiDoorOpenFill /> FRoNTDooR
                        </a>
                    </li>
                    <li>
                        <a href='/today'>
                            <CiMoneyBill /> ReCoMMaND VID.
                        </a>
                    </li>
                    <li>
                        <a href='/developer'>
                            <CiCoins1 /> ReCoMMaND DEV.
                        </a>
                    </li>
                    <li>
                        <a href='/webd'>
                            <CiBoxes /> 웹디자인기능사
                        </a>
                    </li>
                    <li>
                        <a href='/website'>
                            <CiBullhorn /> 웹표준 사이트
                        </a>
                    </li>
                    <li>
                        <a href='/gsap'>
                            <CiCoffeeCup /> GSAP Parallax
                        </a>
                    </li>
                    <li>
                        <a href='/port'>
                            <CiDumbbell /> 포트폴리오 사이트
                        </a>
                    </li>
                    <li>
                        <a href='/youtube'>
                            <CiFries /> 유튜브 클론 사이트
                        </a>
                    </li>
                </ul>
                <ul className='keyword'>
                    <li>
                        <a href='/search/webstoryboy'>webstoryboy</a>
                    </li>
                    <li>
                        <a href='/search/html'>HTML</a>
                    </li>
                    <li>
                        <a href='/search/css'>CSS</a>
                    </li>
                    <li>
                        <a href='/search/javascript'>JavaScript</a>
                    </li>
                    <li>
                        <a href='/search/react.js'>React.js</a>
                    </li>
                    <li>
                        <a href='/search/vue.js'>Vue.js</a>
                    </li>
                    <li>
                        <a href='/search/next.js'>Next.js</a>
                    </li>
                    <li>
                        <a href='/search/node.js'>Node.js</a>
                    </li>
                    <li>
                        <a href='/search/sql'>SQL</a>
                    </li>
                    <li>
                        <a href='/search/React Portfolio'>portfolio</a>
                    </li>
                    <li>
                        <a href='/search/NewJeans'>music</a>
                    </li>
                </ul>
            </nav>
            
            <div className='header__sns'>
                <ul>
                    <li>
                        <a href='https://github.com/webstoryboy' rel='noopener noreferrer'>
                            <AiFillGithub />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.youtube.com/webstoryboy' rel='noopener noreferrer'>
                            <AiFillYoutube />
                        </a>
                    </li>
                    <li>
                        <a href='https://codepen.io/webstoryboy' rel='noopener noreferrer'>
                            <AiOutlineCodepen />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/webstoryboy' rel='noopener noreferrer'>
                            <AiOutlineInstagram />
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header