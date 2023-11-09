import React from 'react'
import styled from 'styled-components'
import dummy from "../assets/statistics.svg"


const Footer = () => {
    return (
        <Thefooter className='footer'>
            <FooterContainer className='footer_container'>
                <FooterForm className='footer_form'>
                    <FooterText className='footer_text'>
                        <FooterHeading className='footer_heading'>Add impact to your inbox</FooterHeading>
                        <div className='footer_email'>Get our emails t stay in the know</div>
                    </FooterText>
                    <TheForm className='the_form'>
                        <MainForm>
                            <InputBox
                                type="text"
                                placeholder='First Name'
                            />
                            <InputBox
                                type="text"
                                placeholder='Last Name'
                            />
                            <InputBox 
                                type="email"
                                placeholder='Email'
                            />
                            <SubscribeButton type="submit" value="Subscribe" />

                        </MainForm>
                        <FormNote>
                            This site is protected by reCAPTCHA and the Google <span className='policy'>Privacy Policy</span> and <span className='policy'>Terms of Service</span> apply.
                        </FormNote>
                    </TheForm>
                </FooterForm>
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
    width: 80%;
    justify-content: space-between;
    align-items: center;
    font-size: .9rem;
`
const FooterContainer = styled.div`
    width: 100%;
`
const FooterForm = styled.div`
    display: flex;
    flex-direction: row;
    padding: 2rem 1.5rem;
    box-sizing: border-box;
    background-color: #F7F7F7;
    border: 1px solid #E3E5E5;
    align-items: center;
    width: 100%;
    justify-content: space-between;
`
const FooterText = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 30%;
`
const FooterHeading = styled.div`
    font-size: .9rem;
    font-weight: 600;
`
const TheForm = styled.div`
    display: flex;
    flex-direction: column;
`
const MainForm = styled.div`
    display: flex;
    flex-direction: row;
`
const InputBox = styled.input`
    height: 2.5rem;
    padding: 0 1rem;
    background: white;
    border: 1px solid #E3E5E5;
    border-right: 0;
    color: grey;
    width: 11rem;
`
const SubscribeButton = styled.input`
    height: 2.5rem;
    padding: 0 1rem;
    background: #0C3763;
    text-transform: uppercase;
    color: white;
    font-weight: 600;
    width: 7rem;
    border: none;
`

const FormNote = styled.div`
    font-size: .8rem;
    padding: .5rem 0;
    color: grey;
`

const Lists = styled.ul`
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: .3rem;
`

const ListContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem 0;
`

const ListHeading = styled.li`
    font-weight: 600;
`
const ListItem = styled.li`
    color: grey;
`
const SocialsDiv = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1.5rem 0 .8rem;
    justify-content: space-between;
    align-items: center;
`
const SocialsLeft = styled.div`
    display: flex;
    flex-direction: column;
    gap: .6rem;
`
const TheSocials = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
`
const SocialsIcon = styled.img`
    width: 1.5rem;
`
const SelectCountry = styled.select`
    width: 25%;
    height: 2.5rem;
    padding: 0 1rem;
    background: white;
    border: 2px solid #E3E5E5;
    color: grey;
`
const Dot = styled.span`
    font-size: 2rem;
    line-height: .3rem;
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
`
const CharityText = styled.div`
    display: flex;
    flex-direction: column;
`
const CharityIcons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
`
const CharityIcon = styled.img`
    width: 2rem;
`
const CharityExp = styled.div`
    color: grey;
    font-size: .8rem;
    padding: 1rem 0;
`