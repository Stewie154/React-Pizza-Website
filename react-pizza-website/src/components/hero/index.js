import React, {useState} from 'react';
import Navbar from '../navbar';
import Sidebar from '../sidebar';
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './heroElements';


const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <HeroContainer>
            <Navbar toggle={toggle}/>
            <Sidebar 
                isOpen={isOpen}
                toggle={toggle}
            />
            <HeroContent>
                <HeroItems>
                    <HeroH1>Simply Fantastic Pizza</HeroH1>
                    <HeroP>Ready In 30 Minutes</HeroP>
                    <HeroBtn>Place Order</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero;
