import React from 'react';
import {SubTitleText, TitleText, TitleSection} from "./TitleStyles";
import {Container} from "../../styles/GlobalStyles"

const Title = () => {
    return (
        <TitleSection>
            <Container>
            <TitleText>
                Portfolio
            </TitleText>
            <SubTitleText>
                Agency provides a full service range including technical skills, design, business understanding.
            </SubTitleText>
            </Container>
        </TitleSection>
    );
};

export default Title;