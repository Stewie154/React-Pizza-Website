import React from 'react';
import { SiCodecademy } from "react-icons/si";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink, } from './footerElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo href='https://www.stewartmcfarlane.me/' target='_blank' aria-label='Linked-In' rel='noopener noreferrer'>StewartMcFarlane.me</SocialLogo>
                        <SocialIcons>
                            <SocialIconLink href='https://www.linkedin.com/in/stewart-mcfarlane-0429091b8/' target='_blank' aria-label='Linked-In' rel='noopener noreferrer' >
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink href='https://github.com/Stewie154' target='_blank' aria-label='GitHub' rel='noopener noreferrer' >
                                <FaGithub />
                            </SocialIconLink>
                            <SocialIconLink href='https://www.codecademy.com/learn' target='_blank' aria-label='Codecademy' rel='noopener noreferrer' >
                                <SiCodecademy />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;
