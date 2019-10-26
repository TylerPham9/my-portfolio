import React, { Component } from "react";
import Caption from './caption';
import styled from 'styled-components';
import { theme, mixins, media } from '@styles';

const ContactContainer = styled.section`
    ${mixins.flexCenter};
	width: 100%;
`;


class Contact extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ContactContainer id="contact">
                <Caption>
                    <h1>Contact Me</h1>
                    <p>SPACE</p>
                    <p>SPACE</p>
                    <p>SPACE</p>
                    <p>SPACE</p>
                    <p>SPACE</p>
                    <p>SPACE</p>
                    <p>SPACE</p>

                </Caption>
            </ContactContainer>

        )
    }
}

export default Contact