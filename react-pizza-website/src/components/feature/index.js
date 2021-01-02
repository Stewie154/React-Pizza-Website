import React from 'react'
import { FeatureContainer, FeatureButton } from './featureElements';

const Feature = () => {
    return (
        <FeatureContainer>
            <h1>Pizza of the Day</h1>
            <p>Truffle alfredo topped with 24 carat gold dust.</p>
            <FeatureButton>Order Now</FeatureButton>
        </FeatureContainer>
    )
}

export default Feature
