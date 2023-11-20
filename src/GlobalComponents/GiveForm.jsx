import React, { useState } from 'react'
import styled from 'styled-components'

const GiveForm = () => {

    const [selectedButton, setSelectedButton] = useState("givemonthly")

    return (
        <GiveContainer>
            <NavigationContainer >
                <ToggleButton onClick={() => setSelectedButton('givedaily')} className={`${selectedButton == "givemonthly" ? 'active_Button' : ''}`}>Give once</ToggleButton>
                <ToggleButton onClick={() => setSelectedButton('givemonthly')} className={`${selectedButton == "givedaily" ? 'active_Button' : ''}`}>Monthly</ToggleButton>
            </NavigationContainer>
            <GiveMonthly className={`${selectedButton == "givemonthly" ? 'toggled' : ''}`}>
                <TheHeading className="choose_amount_header">
                    Choose an amount to give per month
                </TheHeading>
                <TheBody className="choose_amount_body">
                    <EachAmount className="amount_button">
                        $10
                        <span className="dollar">
                            usd/<span className="month">mo</span>
                        </span>
                    </EachAmount>
                    <EachAmount className="amount_button">
                        $20
                        <span className="dollar">
                            usd/<span className="month">mo</span>
                        </span>
                    </EachAmount>
                    <EachAmount className="amount_button">
                        $40
                        <span className="dollar">
                            usd/<span className="month">mo</span>
                        </span>
                    </EachAmount>
                    <EachAmount className="amount_button">
                        $100
                        <span className="dollar">
                            usd/<span className="month">mo</span>
                        </span>
                    </EachAmount>
                    <InputAmount
                        className="amount_input"
                        type="text"
                        placeholder="Other amount"
                    />
                    <Button className="join_button">Join today</Button>
                </TheBody>
                <hr style={{ margin: 0, borderTop: '1px dashed #E0E0E0' }} />
                <div style={{ padding: '1rem 1.5rem' }}>
                    Your $40.00 monthly donation can give 12 people clean water
                    every year. 100% funds water projects.
                </div>
            </GiveMonthly>
            <GiveDaily className={`${selectedButton == "givedaily" ? 'toggled' : ''}`}>
                <TheHeading> Enter an amount to give</TheHeading>
                <GiveBody>
                    <div style={{ padding: '1rem 1.5rem' }}>
                        <DailyInput>
                            <div>
                                <span>$</span>
                                <input type='text' />
                            </div>
                            <span>USD</span>
                        </DailyInput>
                        <span style={{ fontSize: '.9rem' }}>&#x2BC7; Give in honour of someone</span>
                        <Button style={{ marginTop: '.5rem' }}>Give</Button>
                    </div>
                    <hr style={{ margin: 0, borderTop: '1px dashed #E0E0E0' }} />
                    <div style={{ padding: '1rem 1.5rem' }}>
                        It only takes $40 to bring 1 person reliable access to the clean water they deserve.
                    </div>
                </GiveBody>
            </GiveDaily>
            <FormNote>
                Secure Payment . This site is protected by reCAPTCHA and the
                Google <span>Privacy Policy</span> and{" "}
                <span>Terms of Service</span> apply.
            </FormNote>
        </GiveContainer>
    )
}

export default GiveForm


const GiveContainer = styled.div`
    max-width: 35rem;
    width: 40%; 
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media screen and (max-width: 1100px) {
        width: 50%;
     }

     @media screen and (max-width: 768px) {
        width: 25rem;
     }

     @media screen and (max-width: 568px) {
        width: 22rem;
     }
     
     @media screen and (max-width: 430px) {
        width: 18rem;
    }
`

const NavigationContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 3rem;
`

const ToggleButton = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: .8rem;
    text-transform: uppercase;
    font-weight: 600;
    height: 100%;
    cursor: pointer;
    background: white;
    color: #0B3763;

    &.active_Button {
        color: white!important;
        background: #0B3763!important;
     }

     @media screen and (max-width: 768px) {
        font-size: .7rem;
    }
`

const GiveMonthly = styled.div`
    background: white;
    color: black;
    border-radius: 5px;
    font-size: .9rem;
    display: none;

    &.toggled {
        display: block;
     }

     @media screen and (max-width: 768px) {
        font-size: .8rem;
    }
`

const TheHeading = styled.div`
    padding: 1rem 1.5rem;
    background: #F4F5F0;
    text-align: center;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #E0E0DE;
`

const TheBody = styled.div`
    padding: 1.5rem;
    display: grid;
    grid-template-columns: 31% 31% 31%;
    grid-template-rows: 2.8rem 2.8rem 2.8rem;
    gap: .8rem;
    width: 100%;

    @media screen and (max-width: 430px) {
        padding: 1rem;
        grid-template-columns: 48% 48%;
        grid-template-rows: 2.8rem 2.8rem 2.8rem 2.8rem;
    }
`

const GiveBody = styled.div`
    gap: .8rem;
    width: 100%;
    
    & > div{
        & > span{
            margin-bottom: 1rem;
            height: 5rem;
            color: #0C3763;
            font-weight: 600;

            @media screen and (max-width: 768px) {
                font-size: .8rem!important;
            }
        }

        @media screen and (max-width: 430px) {
            padding: 1rem!important;
        }
    }
`
const EachAmount = styled.div`
    background: #E9EAE4;
    border: 1px solid #DFDFDB;
    color: #9DA09F;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    border-radius: 3px;
    gap: .2rem;
    text-transform: uppercase;

    @media screen and (max-width: 768px) {
        font-size: .9rem;
    }

    & > span{
        font-size: .8rem;

        @media screen and (max-width: 768px) {
            font-size: .7rem;
        }
    }
`

const InputAmount = styled.input`
    background: #E9EAE4;
    border: 1px solid #DFDFDB;
    color: #9DA09F;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    gap: .2rem;
    grid-column-start: 2;
    grid-column-end: 4;
    padding: 0 1rem;
    font-size: .9rem;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: .8rem;
    }

    @media screen and (max-width: 430px) {
        grid-column-start: 1;
        grid-column-end: 3;
    }
`

const Button = styled.div`
    grid-column-start: 1;
    grid-column-end: 4;
    background: #0C3763;
    color: white;
    font-weight: 600;
    text-transform: uppercase;
    font-size: .9rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    height: 2.8rem;

    @media screen and (max-width: 768px) {
        font-size: .8rem;
    }

    @media screen and (max-width: 430px) {
        grid-column-start: 1;
        grid-column-end: 3;
    }
`

const FormNote = styled.div`
    background: transparent;
    font-size: .8rem;
    padding: 0 1.5rem;
    color: #A28F77;

    & > span{
        text-decoration: underline;
    }

    @media screen and (max-width: 768px) {
        font-size: .7rem;
    }
`

const GiveDaily = styled.div`
    background: white;
    color: black;
    border-radius: 5px;
    font-size: .9rem;
    display: flex;
    flex-direction: column;
    display: none;

    &.toggled {
        display: block;
     }

     @media screen and (max-width: 768px) {
        font-size: .8rem;
    }
`

const DailyInput = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid #DFDFDB;
    grid-column-start: 1;
    grid-column-end: 4;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px;
    margin-bottom: .5rem;

    & > div{
        display: flex;
        flex-direction: row;
        align-items: center;
        padding-left: 1rem;
    }

    & > div > input{
        background: white;
        display: flex;
        border: none;
        outline: none;
        font-size: 1.3rem!important;
        border-radius: 3px;
        gap: .2rem;
        grid-column-start: 2;
        grid-column-end: 3;
        padding: 0 .5rem;
        font-size: .9rem;
        text-align: left;
        height: 2.8rem;
        color: #0C3763;

        @media screen and (max-width: 768px) {
            font-size: 1.1rem!important;
        }
    }

    & > span{
        padding: 0 1rem;
    }

    @media screen and (max-width: 430px) {
        grid-column-start: 1;
        grid-column-end: 3;

        & > div > input{
            grid-column-start: 1;
            grid-column-end: 2;
            width: 70%
        }
    }
`