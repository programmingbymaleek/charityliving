import React from 'react'
import styled from 'styled-components'

const FooterForm = ({backgroundstyle}) => {
    return (
        <FormSection backgroundstyle= {backgroundstyle}>
        <TheFooterForm>
            <FooterText>
                <FooterHeading>Add impact to your inbox</FooterHeading>
                <div className='footer_email'>Get our emails to stay in the know</div>
            </FooterText>
            <TheForm>
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
        </TheFooterForm>
        </FormSection>
    )
}

export default FooterForm

const FormSection = styled.div`
    display: flex;
    width: 100%;
    padding: 3% 10% 0;
    background: ${props => (props.backgroundstyle ? props.backgroundstyle : 'inherit')};
`

const TheFooterForm = styled.div`
    display: flex;
    flex-direction: row;
    padding: 2rem 1.5rem;
    box-sizing: border-box;
    background-color: #F7F7F7;
    border: 1px solid #E3E5E5;
    align-items: center;
    width: 100%;
    justify-content: center;
    gap: 3rem;

    @media screen and (max-width: 1086px) {
        flex-direction: column;
        align-items: flex-start;
        gap: .8rem;
     }
`
const FooterText = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: fit-content;
    @media screen and (max-width: 1086px) {
        width: 100%
     }
`
const FooterHeading = styled.div`
    font-size: .9rem;
    font-weight: 600;
    @media screen and (max-width: 768px) {
        font-size: .8rem;
      }
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
    width: 15vw;

    @media screen and (max-width: 1086px) {
        width: 31%
     }
`
const SubscribeButton = styled.input`
    height: 2.5rem;
    padding: 0 2vw;
    background: #0C3763;
    text-transform: uppercase;
    color: white;
    font-weight: 600;
    width: fit-content;
    border: none;
`

const FormNote = styled.div`
    font-size: .8rem;
    padding: .5rem 0;
    color: grey;
    @media screen and (max-width: 768px) {
        font-size: .7rem;
      }
`