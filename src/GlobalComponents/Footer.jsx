import React from 'react'
import styled from 'styled-components'
import dummy from "../assets/statistics.svg"


const Footer = ({backgroundstyle}) => {
    return (
        <Thefooter backgroundstyle= {backgroundstyle}>
            <FooterContainer>
                <ListContainer>
                    <Lists>
                        <ListHeading>take action</ListHeading>
                        <ListItem>give</ListItem>
                        <ListItem>join the spring</ListItem>
                        <ListItem>give to a fundraiser</ListItem>
                        <ListItem>give in someone's honour</ListItem>
                        <ListItem>sponsor a community</ListItem>
                        <ListItem>legacy giving</ListItem>
                    </Lists>
                    <Lists>
                        <ListHeading>get involved</ListHeading>
                        <ListItem>create an account</ListItem>
                        <ListItem>fundraise</ListItem>
                        <ListItem>tiny heroes</ListItem>
                        <ListItem>students & teachers</ListItem>
                        <ListItem>sponsor a community</ListItem>
                        <ListItem>stream for us</ListItem>
                    </Lists>
                    <Lists>
                        <ListHeading>get to know us</ListHeading>
                        <ListItem>our work</ListItem>
                        <ListItem>100% model</ListItem>
                        <ListItem>see our financials</ListItem>
                        <ListItem>meet the founder</ListItem>
                        <ListItem>careers</ListItem>
                    </Lists>
                    <Lists>
                        <ListHeading>give</ListHeading>
                        <ListItem>contact us</ListItem>
                        <ListItem>help center</ListItem>
                        <ListItem>request a speaker</ListItem>
                        <ListItem>brand partnerships</ListItem>
                        <ListItem>shop our store</ListItem>
                    </Lists>
                </ListContainer>
                <hr />
                <SocialsDiv>
                    <SocialsLeft>
                        <TheSocials>
                            <SocialsIcon src={dummy} alt='social_icons' />
                            <SocialsIcon src={dummy} alt='social_icons' />
                            <SocialsIcon src={dummy} alt='social_icons' />
                            <SocialsIcon src={dummy} alt='social_icons' />
                            <SocialsIcon src={dummy} alt='social_icons' />
                            <SocialsIcon src={dummy} alt='social_icons' />
                        </TheSocials>
                        <div>
                            privacy policy <Dot>.</Dot> <EmailLink>get our emails</EmailLink>
                        </div>
                    </SocialsLeft>
                    <SelectCountry>
                        <option value='usa'>usa</option>
                        <option value='usa'>usa</option>
                    </SelectCountry>
                </SocialsDiv>
                <FooterCharity>
                    <CharityText>
                        charity: water is a 501(c)(3) non-profit organisation.
                        <span>100%of public donations go directly to fund clean water projects.</span>
                    </CharityText>
                    <CharityIcons>
                        <CharityIcon src={dummy} alt='social_icons' />
                        <CharityIcon src={dummy} alt='social_icons' />
                        <CharityIcon src={dummy} alt='social_icons' />
                        <CharityIcon src={dummy} alt='social_icons' />
                        <CharityIcon src={dummy} alt='social_icons' />
                        <CharityIcon src={dummy} alt='social_icons' />
                    </CharityIcons>
                </FooterCharity>
                <CharityExp>
                    (c) 2023 | charity: water Donation Processing Center, PO Box 5026, Hagerstown, MD 21741-5026 | 1
                    Devonshire St, London W1W 5DR | Charity Global, Inc, a US 501 (c)(3) public charity, EIN 22-3936753 and an ANBI
                    in the Netherlands, RSIN 826151656. Charity Global UK Limited is a dual-qualified charity registered in
                    England and Wales, charity number 1169228. Charity Global UK Limited is wholly owned by Charity Global, Inc.
                </CharityExp>
            </FooterContainer>
        </Thefooter>
    )
}

export default Footer


// styling
const Thefooter = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    font-size: .9rem;
    padding: 0 10%;
    background: ${props => (props.backgroundstyle ? props.backgroundstyle : 'inherit')};

    @media screen and (min-width: 1440px) {
        padding: 0 15vw;
        font-size: 1rem;
    }

    @media screen and (max-width: 1439px) {
        padding: 0 10%;
    }

    @media screen and (max-width: 768px) {
        font-size: .8rem;
        padding: 0 5%;
    }

    @media screen and (max-width: 320px) {
        font-size: .7rem;
    }
`
const FooterContainer = styled.div`
    width: 100%;
`

const Lists = styled.ul`
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: .3rem;

    @media screen and (max-width: 768px) {
        width: 100%;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
      }
`

const ListContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem 0;

    @media screen and (max-width: 768px) {
        flex-wrap: wrap;
      }
`

const ListHeading = styled.li`
    font-weight: 600;

    @media screen and (max-width: 768px) {
        width: 100%;
      }
`
const ListItem = styled.li`
    color: grey;

    @media screen and (max-width: 768px) {
        width: 45%;
      }
`
const SocialsDiv = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1.5rem 0 .8rem;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 320px) {
        flex-direction: column-reverse;
        align-items: flex-start;
        gap: 1rem
    }
`
const SocialsLeft = styled.div`
    display: flex;
    flex-direction: column;
    gap: .6rem;

    @media screen and (max-width: 320px) {
        width: 100%;
    }
`
const TheSocials = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    @media screen and (max-width: 768px) {
        gap: .5rem!important;
    }
`
const SocialsIcon = styled.img`
    width: 1.5rem;

    @media screen and (max-width: 768px) {
        width: 1rem;
    }
`
const SelectCountry = styled.select`
    width: 25%;
    height: 2.5rem;
    padding: 0 1rem;
    background: white;
    border: 2px solid #E3E5E5;
    color: grey;

    @media screen and (max-width: 768px) {
        width: 30%;
    }

    @media screen and (max-width: 320px) {
        height: 2rem;
        width: 50%;
    }
`
const Dot = styled.span`
    font-size: 2rem;
    line-height: .3rem;
    @media screen and (max-width: 768px) {
        font-size: 1.8rem;
      }

      @media screen and (max-width: 320px) {
        font-size: 1.5rem;
    }
`
const EmailLink = styled.span`
    font-weight: 600;
    text-decoration: underline;
    color: #0C3763;
`
const FooterCharity = styled.div`
    color: grey;
    font-size: .8rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 768px) {
        font-size: .7rem;
        flex-direction: column;
        align-items: flex-start;
        gap: .5rem;
      }

      @media screen and (max-width: 320px) {
        font-size: .6rem;
    }
`
const CharityText = styled.div`
    display: flex;
    flex-direction: column;


`
const CharityIcons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;

    @media screen and (max-width: 768px) {
        gap: .5rem!important;
    }
`
const CharityIcon = styled.img`
    width: 2rem;

    @media screen and (max-width: 768px) {
        width: 1.5rem;
      }
`
const CharityExp = styled.div`
    color: grey;
    font-size: .8rem;
    padding: 1rem 0;
    @media screen and (max-width: 768px) {
        font-size: .7rem;
      }

      @media screen and (max-width: 320px) {
        font-size: .6rem;
    }
`