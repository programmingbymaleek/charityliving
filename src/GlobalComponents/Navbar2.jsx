import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

import styled from 'styled-components'
import menu from "../assets/close.svg"

const Navbar2 = ({ left, leftscroll, right, rightscroll, signincolor, joincolor, joincolorscroll, joinborderscroll, signincolorscroll, signinscroll, siginborder, siginborderscroll, joinborder, joinbackground, the_scroll }) => {
    const [scroll, setScroll] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > the_scroll) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    };
    window.onscroll = handleScroll;
  return (
    <div>
        <Navdiv scroll={scroll}>
            <Leftnav left={left} scroll={scroll} leftscroll={leftscroll}>
                <Ul>
                    <li>logo</li>
                </Ul>
            </Leftnav>
            <Rightnav right={right} scroll={scroll} rightscroll={rightscroll}>
                <Ul>
                    <Link to='/signin' className='pick_user' ><SignInButton scroll={scroll} siginborder={siginborder} siginborderscroll={siginborderscroll} signincolorscroll={signincolorscroll} signincolor={signincolor}>Sign in</SignInButton></Link>
                </Ul>
            </Rightnav>
            {/* <Hamburger src={menu} alt='menu' /> */}

        </Navdiv>
    </div>
  )
}

export default Navbar2


// styling
const Navdiv = styled.div`
    display: flex;
    flex-direction: row;
    list-style-type: none;
    width: 100%;
    padding: 0 10%;
    justify-content: space-between;
    color: white;
    align-items: center;
    height: 4rem;
    background: ${props => (props.scroll ? "#332620" : 'transparent')};
    text-transform: uppercase;
    font-size: .7rem;
    position: fixed;
    z-index: 1000;
    left: 0;
    box-sizing: border-box;

    @media screen and (max-width: 1086px) {
        padding: 0 5%
     }
`

const Leftnav = styled.div`
    display: flex;
    flex-direction: row;
    width: fit-content;
    color: ${props => (props.scroll ? props => props.leftscroll : props.left)};
`
const Rightnav = styled.div`
    display: flex;
    flex-direction: row;
    width: fit-content;
    gap: 2rem;
    color: ${props => (props.scroll ? props => props.rightscroll : props.right)};
    align-items: center;
`
const Ul = styled.ul`
    display: flex;
    flex-direction: row;
    list-style-type: none;
    gap: 1rem;
    padding: 0;
    margin: 0;

    @media screen and (max-width: 850px) {
        &:nth-child(2){
            display: none;
        }
    }
`

const SignInButton = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: ${props => (props.scroll ? props => props.signincolorscroll : props.signincolor)};
    padding: 0.5rem 0 0.5rem 2rem;
    text-decoration: none!important;
`

const Hamburger = styled.img`
    width: 1rem;
    display: none;

    @media screen and (max-width: 850px) {
        display: block;
    }
`