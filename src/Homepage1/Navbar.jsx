import React from 'react'

import styled from 'styled-components'

const Navbar = () => {
    return (
        <Navdiv>
            <Subnav className='left_nav'>
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
            </Subnav>
            <Subnav className='right_nav'>
                <Ul>
                    <Button>Give</Button>
                    <Button>Join the springs</Button>
                </Ul>
                <Ul>
                    <SignInButton>Sign in</SignInButton>
                </Ul>
            </Subnav>

        </Navdiv>
    )
}

export default Navbar


// styling
const Navdiv = styled.div`
    display: flex;
    flex-direction: row;
    list-style-type: none;
    align-items: center;
    width: 100%;
    justify-content: center;
    align-items: center;
    color: white;
    height: 4rem;
    background: transparent;
    text-transform: uppercase;
    font-size: .7rem;
    gap: 8rem; 
`

const Subnav = styled.div`
    display: flex;
    flex-direction: row;
    width: fit-content;
`

const Ul = styled.ul`
    display: flex;
    flex-direction: row;
    list-style-type: none;
    gap: 1rem;
`

const Button = styled.li`
  background: transparent;
  border-radius: 3px;
  border: 1px solid white;
  color: white;
  margin: 0 1em;
  padding: 0.5rem 1.5rem;
`

const SelectField = styled.select`
  background: transparent;
  border: none;
  color: white;
  text-transform: uppercase
`

const SignInButton = styled.li`
    border-left: 1px solid white;
    padding: 0 2rem
`