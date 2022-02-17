import styled from "styled-components";
import { Link } from 'react-router-dom';
import { FaMagento } from 'react-icons/fa';

export const FooterContainer = styled.div`
    background-color: #101522;
    padding: 4rem 0 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const FooterSubscription = styled.h1`
    font-family: 'Montserrat', sans-serif;
    color: white;
    margin-bottom: 24px;
    font-size: 48 px;
`;

export const FooterSubText = styled.h2`
    color: white;
    margin-bottom: 24px;
    font-size: 24 px;
`;

export const FooterSubHeading = styled.h3`
    font-family: 'Montserrat', sans-serif;
    color: white;
    margin-bottom: 24px;
    font-size: 24 px;
`;

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 828px) {
        width: 80%;
        flex-direction: columm;
    };
`;

export const FormInput = styled.input`
    padding: 10px 20px;
    boreder-radius: 2px;
    margin-right: 10px;
    outline: none;
    order: none;
    font-size: 16px;
    border: 1px solid #ffffff;

    &::placeholder{
        color: #242424;
    };
`;

export const FooterLinksContainer = styled.div`
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 1000px) {
        padding-top: 32px;
    };
`;

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    };
`;

export const FooterLinksItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 820px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    };
`;

export const FooterLinksTitle = styled.h2`
    margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;

    &:hover{
        color: #0467fb;
        transition: 0.3s ease-out;
    };
`;

export const SocialMedia = styled.section`
    max-width: 820px;
    width: 100%;
`;

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 1000px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    };
`;

export const SocialLogo = styled(Link)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-direction: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
`;

export const SocialIcon = styled(FaMagento)`
    margin-right: 10px;
`;

export const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`;

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
`;