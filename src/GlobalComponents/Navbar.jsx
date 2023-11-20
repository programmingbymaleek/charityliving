import React, { useState, useRef, useEffect, useContext } from 'react'
import { Link } from "react-router-dom";

import { Context } from '../Utilities/Context'

import styled from 'styled-components'
import menu from "../assets/close.svg"

const Navbar = () => {
    let { navStyleObject} = useContext(Context)

    const [scroll, setScroll] = useState(false);

    const [data, setData] = useState({});


    const [loading, setLoading] = useState(true);

    const handleScroll = () => {
        if (window.scrollY > navStyleObject.the_scroll) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        setLoading(true)
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    
    useEffect(() => {
        if( Object.keys(navStyleObject).length === 0 ){
            setLoading(true)
        }
        else{
            console.log(navStyleObject)
            setData(navStyleObject)
            setLoading(false)
        }
        console.log(loading)
    }, [navStyleObject])

    return (
        loading === false ? (
            <Navdiv scrolled={scroll}>
                <Leftnav left={data.left} scrolled={scroll} leftscroll={data.leftscroll}>
                    <Ul>
                        <li>logo</li>
                    </Ul>
                    <Ul>
                        <li>
                            <SelectField id="option" name="option">
                                <option value="1">Take Action</option>
                                <option value="2">Option 2</option>
                            </SelectField>
                        </li>
                        <li>
                            <SelectField id="option1" name="option">
                                <option value="1">About Us</option>
                                <option value="2">Option 2</option>
                            </SelectField>
                        </li>
                        <li>Why water?</li>
                    </Ul>
                </Leftnav>
                <Rightnav right={data.right} scrolled={scroll} rightscroll={data.rightscroll}>
                    <Ul>
                        <Link to='/givepage' className='pick_user' ><Button>Give</Button></Link>
                        <ButtonJoin joinbackground={data.joinbackground} joincolor={data.joincolor} scrolled={scroll} joinborder={data.joinborder} joinborderscroll={data.joinborderscroll} joincolorscroll={data.joincolorscroll} >Join the springs</ButtonJoin>
                    </Ul>
                    <Ul>
                        <Link to='/signin' className='pick_user' ><SignInButton scrolled={scroll} siginborder={data.siginborder} siginborderscroll={data.siginborderscroll} signincolorscroll={data.signincolorscroll} signincolor={data.signincolor}>Sign in</SignInButton></Link>
                    </Ul>
                </Rightnav>
                <Hamburger src={menu} alt='menu' />

            </Navdiv>
        ) : (<span>Loading...</span>)
    )
}

export default Navbar


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
    background: ${props => (props.scrolled ? "#332620" : 'transparent')};
    text-transform: uppercase;
    font-size: .7rem;
    position: fixed;
    z-index: 1000;

    @media screen and (max-width: 1086px) {
        padding: 0 5%
     }
`

const Leftnav = styled.div`
    display: flex;
    flex-direction: row;
    width: fit-content;
    gap: 2rem;
    color: ${props => (props.scrolled ? props => props.leftscroll : props.left)};
    align-items: center;
    justify-content: center;
`
const Rightnav = styled.div`
    display: flex;
    flex-direction: row;
    width: fit-content;
    gap: 2rem;
    color: ${props => (props.scrolled ? props => props.rightscroll : props.right)};
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

const Button = styled.li`
  background: transparent;
  border-radius: 3px;
  border: 1px solid ${props => props.color};
  color: ${props => (props.scrolled ? "black" : props => props.color)};
  padding: 0.5rem 1.5rem;

  @media screen and (max-width: 850px) {
        display: none;

    }
`

const ButtonJoin = styled.li`
  background: ${props => props.joinbackground};
  border-radius: 3px;
  border: 1px solid ${props => (props.scrolled ? props => props.joinborderscroll : props.joinborder)};
  color: ${props => (props.scrolled ? props => props.joincolorscroll : props.joincolor)};
  padding: 0.5rem 1.5rem;

  @media screen and (max-width: 850px) {
    display: none;
}
`

const SelectField = styled.select`
  background: transparent;
  border: none;
  color: inherit;
  text-transform: uppercase
`

const SignInButton = styled.li`
    border-left: 1px solid ${props => (props.scrolled ? props => props.siginborderscroll : props.siginborder)};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: ${props => (props.scrolled ? props => props.signincolorscroll : props.signincolor)};
    padding: 0.5rem 0 0.5rem 2rem;
    text-decoration: none;
`

const Hamburger = styled.img`
    width: 1rem;
    display: none;

    @media screen and (max-width: 850px) {
        display: block;
    }
    `