import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

import styled from 'styled-components'

const Navbar = ({ left, leftscroll, right, rightscroll, signincolor, joincolor, signincolorscroll, signinscroll, siginborder, joinbackground, the_scroll }) => {

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
        <Navdiv scroll={scroll}>
            <Leftnav left={left} scroll={scroll} leftscroll={leftscroll}>
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
            <Rightnav right={right} scroll={scroll} rightscroll={rightscroll}>
                <Ul>
                    <Button>Give</Button>
                    <ButtonJoin joinbackground={joinbackground} joincolor={joincolor} scroll={scroll}>Join the springs</ButtonJoin>
                </Ul>
                <Ul>
                    <Link to='/signin' className='pick_user' ><SignInButton scroll={scroll}>Sign in</SignInButton></Link>
                </Ul>
            </Rightnav>

        </Navdiv>
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
    background: ${props => (props.scroll ? "#0000000d" : 'transparent')};;
    text-transform: uppercase;
    font-size: .7rem;
    position: fixed;
    z-index: 1000;

    @media screen and (max-width: 1086px) {
        width: 90%;
     }
`

const Leftnav = styled.div`
    display: flex;
    flex-direction: row;
    width: fit-content;
    gap: 2rem;
    color: ${props => (props.scroll ? props => props.leftscroll : props.left)};
    align-items: center;
    justify-content: center;
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
`

const Button = styled.li`
  background: transparent;
  border-radius: 3px;
  border: 1px solid ${props => props.color};
  color: ${props => (props.scroll ? "black" : props => props.color)};
  padding: 0.5rem 1.5rem;
`

const ButtonJoin = styled.li`
  background: ${props => props.joinbackground};
  border-radius: 3px;
  border: 1px solid ${props => (props.scroll ? "black" : props.color2)};
  color: ${props => (props.joincolor)};
  padding: 0.5rem 1.5rem;
`

const SelectField = styled.select`
  background: transparent;
  border: none;
  color: inherit;
  text-transform: uppercase
`

const SignInButton = styled.li`
    border-left: 1px solid ${props => props.color};
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: ${props => (props.scroll ? "black" : "initial")};
    padding: 0.5rem 2rem;
    text-decoration: none;
`