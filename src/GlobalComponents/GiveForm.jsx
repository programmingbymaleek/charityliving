import React from 'react'
import styled from 'styled-components'

const GiveForm = () => {
    return (
        <GiveContainer>
            <NavigationContainer >
                <ToggleButton>Give once</ToggleButton>
                <ToggleButton>Monthly</ToggleButton>
            </NavigationContainer>
            <GiveMonthly>
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
            <GiveDaily>
                <TheHeading> Enter an amount to give</TheHeading>
                <TheBody>
                    <DailyInput>
                        <input type='text' />
                        <span>USD</span>
                    </DailyInput>
                    <span style={{fontSize: '.9rem'}}>Give in honour of someone</span>
                    <Button>Give</Button>
                    <hr style={{ margin: 0, borderTop: '1px dashed #E0E0E0' }} />
                    <div style={{ padding: '1rem 1.5rem' }}>
                        It only takes 40$ to bring 1 person reliable access to the clean water they deserve.
                    </div>
                </TheBody>
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
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
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

    &:nth-child(1){
        background: white;
        color: #0B3763;
    }

    &:nth-child(2){
        color: white;
        background: #0B3763;
    }
`

const GiveMonthly = styled.div`
    background: white;
    color: black;
    border-radius: 5px;
    font-size: .9rem;
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

    &:nth-child(1){
        font-size: .8rem;
        text-transform: uppercase;

        &:nth-child(!){
            text-transform: lowercase;
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
    font-size: 1rem;
    border-radius: 3px;
    gap: .2rem;
    grid-column-start: 2;
    grid-column-end: 4;
    padding: 0 1rem;
    font-size: .9rem;
    text-align: center;
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
`

const FormNote = styled.div`
    background: transparent;
    font-size: .8rem;
    padding: 0 1.5rem;
    color: #A28F77;

    & > span{
        text-decoration: underline;
    }
`

const GiveDaily = styled.div`
    background: white;
    color: black;
    border-radius: 5px;
    font-size: .9rem;
    display: flex;
    flex-direction: column;
`

const DailyInput = styled.div`
    width: 100%
    display: flex;
    flex-direction: row;
    border: 1px solid #DFDFDB;

    & > input{
        background: white;
        color: #9DA09F;
        display: flex;
        border: none;
        outline: none;
        font-size: .8rem;
        border-radius: 3px;
        gap: .2rem;
        grid-column-start: 2;
        grid-column-end: 3;
        padding: 0 1rem;
        font-size: .9rem;
        text-align: center;
        height: 2.8rem;
    }
`