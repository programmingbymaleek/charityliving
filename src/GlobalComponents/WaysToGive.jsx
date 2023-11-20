import React from 'react'
import styled from 'styled-components'

import dummy from "../assets/statistics.svg"

const WaysToGive = ({the_index, the_title, the_body, link_text, the_link}) => {
    return (
        <WayToGive>
            <img src={dummy} alt="contributor" />
            <TabTitle>{the_title}</TabTitle>
            <TabBody>
                {the_body}
            </TabBody>
            <TabLink href={the_link}>{link_text}</TabLink>
        </WayToGive>
    )
}

export default WaysToGive

const WayToGive = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    & > img{
        width: 3rem;
    }
`

const TabTitle = styled.div`
    font-size: .9rem;
    font-weight: 600;
    padding: .3rem 0 .5rem;
    text-align: center;

    &::first-letter {
        text-transform: uppercase;
    }

    @media screen and (max-width: 768px) {
        font-size: .8rem;
    }
`

const TabBody = styled.div`
    font-size: .9rem;
    text-align: center;
    width: 90%;

    &::first-letter {
        text-transform: uppercase;
    }

    @media screen and (max-width: 768px) {
        font-size: .8rem;
    }
`

const TabLink = styled.a`
    font-size: .9rem;
    text-align: center;
    text-decoration: underline;
    cursor: pointer;
    padding: 1rem 0 0;
    font-weight: 600;
    color: #0B3763;

    &::first-letter {
        text-transform: uppercase;
    }

    @media screen and (max-width: 768px) {
        font-size: .8rem;
    }
`