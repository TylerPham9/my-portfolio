import React, { Component } from "react"

import styled from 'styled-components';
import { theme, mixins } from '@styles';
import Caption from './caption'
const { colors, fontSizes, fonts } = theme;

const WorkContainer = styled.section`
    ${mixins.flexCenter};
	width: 100%;
`;

class Work extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <WorkContainer id="work">
                <Caption>
                    <h1>Work Experience</h1>
                    <p>SPACE</p>
                    <p>SPACE</p>
                    <p>SPACE</p>
                    <p>SPACE</p>
                    <p>SPACE</p>
                    <p>SPACE</p>
                    <p>SPACE</p>
                    <p>SPACE</p>
                    <p>SPACE</p>
                    <p>SPACE</p>
                    <p>SPACE</p>
                    <p>SPACE</p>
                    <p>SPACE</p>
                    <p>SPACE</p>
                    <p>SPACE</p>
                    <p>SPACE</p>
                    <p>SPACE</p>
                </Caption>
            </WorkContainer>

        )
    }
}

export default Work