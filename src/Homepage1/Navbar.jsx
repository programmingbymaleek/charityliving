import React from 'react'
import { Link } from "react-router-dom";

import styled from 'styled-components'

const Navbar = ({left, right, background}) => {
    return (
        <Navdiv>
            <Rightnav color={left}>
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
            </Rightnav>
            <Leftnav color={right}>
                <Ul>
                    <Button>Give</Button>
                    <ButtonJoin color={background} color2={right}>Join the springs</ButtonJoin>
                </Ul>
                <Ul>
                    <SignInButton><Link to='/signin' className='pick_user' >Sign in</Link></SignInButton>
                </Ul>
            </Leftnav>

        </Navdiv>
    )
}

export default Navbar


// styling
const Navdiv = styled.div`
    display: flex;
    flex-direction: row;
    list-style-type: none;
    width: 80%;
    justify-content: space-between;
    color: white;
    align-items: center;
    height: 4rem;
    background: transparent;
    text-transform: uppercase;
    font-size: .7rem;

    @media screen and (max-width: 1086px) {
        width: 90%;
     }
`

const Rightnav = styled.div`
    display: flex;
    flex-direction: row;
    width: fit-content;
    gap: 2rem;
    color: ${props => props.color};
`
const Leftnav = styled.div`
    display: flex;
    flex-direction: row;
    width: fit-content;
    gap: 2rem;
    color: ${props => props.color};
`
const Ul = styled.ul`
    display: flex;
    flex-direction: row;
    list-style-type: none;
    gap: 1rem;
    padding: 0;
`

const Button = styled.li`
  background: transparent;
  border-radius: 3px;
  border: 1px solid ${props => props.color};
  color: ${props => props.color};
  margin: 0 1em;
  padding: 0.5rem 1.5rem;
`

const ButtonJoin = styled.li`
  background: ${props => props.color};
  border-radius: 3px;
  border: 1px solid ${props => props.color2};
  color: initial;
  margin: 0 1em;
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
`