import React from "react";
import styled from "styled-components";

const FooterForm = ({ backgroundstyle }) => {
  return (
    <FormSection backgroundstyle={backgroundstyle}>
      <TheFooterForm>
        <FooterText>
          <FooterHeading>Add impact to your inbox</FooterHeading>
          <GetEmail className="footer_email">
            Get our emails to stay in the know
          </GetEmail>
        </FooterText>
        <TheForm>
          <MainForm>
            <InputBox type="text" placeholder="First Name" />
            <InputBox type="text" placeholder="Last Name" />
            <InputBox type="email" placeholder="Email" />
            <SubscribeButton type="submit" value="Subscribe" />
          </MainForm>
          <FormNote>
            This site is protected by reCAPTCHA and the Google{" "}
            <span className="policy">Privacy Policy</span> and{" "}
            <span className="policy">Terms of Service</span> apply.
          </FormNote>
        </TheForm>
      </TheFooterForm>
    </FormSection>
  );
};

export default FooterForm;

const FormSection = styled.div`
  display: flex;
  width: 100%;
  padding: 3% 10% 0;
  background: ${(props) =>
    props.backgroundstyle ? props.backgroundstyle : "inherit"};

  @media screen and (min-width: 1440px) {
    padding-left: 15vw;
    padding-right: 15vw;
    font-size: 1rem;
  }

  @media screen and (max-width: 768px) {
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 3rem;
  }
`;

const TheFooterForm = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2rem 1.5rem;
  box-sizing: border-box;
  background-color: #f7f7f7;
  border: 1px solid #e3e5e5;
  align-items: center;
  width: 100%;
  justify-content: center;
  gap: 3rem;

  @media screen and (max-width: 1086px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;
  }

  @media screen and (max-width: 768px) {
    padding: 1.5rem;
  }

  @media screen and (max-width: 320px) {
    padding: 1rem;
}
  `;
  const FooterText = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: fit-content;
  
  @media screen and (max-width: 1086px) {
      width: 100%;
  }
  `;
  
const GetEmail = styled.div`
font-size: 0.9rem;

@media screen and (max-width: 768px) {
    font-size: 0.8rem;
}

@media screen and (max-width: 320px) {
    font-size: 0.7rem;
}
`;

const FooterHeading = styled.div`
font-size: 0.9rem;
font-weight: 600;
@media screen and (max-width: 768px) {
    font-size: 0.8rem;
}
@media screen and (max-width: 320px) {
    font-size: 0.7rem;
}
`;
const TheForm = styled.div`
display: flex;
flex-direction: column;
`;
const MainForm = styled.div`
display: flex;
flex-direction: row;

@media screen and (max-width: 568px) {
  flex-direction: column;
  gap: .5rem
}
`;
const InputBox = styled.input`
  height: 2.5rem;
  padding: 0 1rem;
  background: white;
  border: 1px solid #e3e5e5;
  border-right: 0;
  color: grey;
  width: 15vw;
  font-size: 0.9rem;

  @media screen and (max-width: 1086px) {
    width: 31%;
  }

  @media screen and (max-width: 768px) {
    font-size: 0.8rem !important;
  }
  @media screen and (max-width: 568px) {
    width: 100%;
    border-right: 1px solid #e3e5e5;
}
@media screen and (max-width: 320px) {
    font-size: 0.7rem;
}
`;
const SubscribeButton = styled.input`
  height: 2.5rem;
  padding: 0 2vw;
  background: #0c3763;
  text-transform: uppercase;
  color: white;
  font-weight: 600;
  width: fit-content;
  border: none;
  font-size: 0.8rem;

  @media screen and (max-width: 768px) {
    font-size: 0.7rem !important;
  }

  @media screen and (max-width: 568px) {
    width: 100%;
  }
  @media screen and (max-width: 320px) {
    font-size: 0.6rem;
}
`;

const FormNote = styled.div`
  font-size: 0.8rem;
  padding: 0.5rem 0;
  color: grey;
  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
  }
  @media screen and (max-width: 320px) {
    font-size: 0.6rem;
}
`;
