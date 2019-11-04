import React, { Component } from "react";

import styled from 'styled-components';
import { theme, mixins } from '@styles';
import Caption from './caption';
import WorkHeader from './work-header';
import WorkContent from './work-content';

const { fontSizes } = theme;

const WorkContainer = styled.section`
    ${mixins.flexCenter};
    width: 100%;
`;

const WorkTitle = styled.h1`
    font-size: ${fontSizes.title};
    padding-bottom: 20px;
`;

class Work extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeTab: 0,
        }
        this.changeTabOnClick = this.changeTabOnClick.bind(this);
    }

    changeTabOnClick(index) {
        this.setState({
            activeTab: index
        });
    }

    render() {
        const { data } = this.props;

        return (
            <WorkContainer id="work">
                <Caption>
                    <WorkTitle
                        className="fadein"
                        style={{ transitionDelay: `${theme.fadeinOffset}ms` }}>
                        Work Experience
                    </WorkTitle>

                    <div
                        className="fadein"
                        style={{ transitionDelay: `${200 + theme.fadeinOffset}ms` }}>
                        <WorkHeader
                            data={data}
                            click={this.changeTabOnClick}
                            activeId={this.state.activeTab} />
                    </div>
                    <div
                        className="fadein"
                        style={{ transitionDelay: `${300 + theme.fadeinOffset}ms` }}>
                        <WorkContent
                            data={data}
                            activeId={this.state.activeTab} />
                    </div>
                </Caption>
            </WorkContainer>

        )
    }
}

export default Work