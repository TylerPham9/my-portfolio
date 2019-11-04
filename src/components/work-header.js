import React, { Component } from 'react';
import styled from 'styled-components';
import { theme } from '@styles';
const { colors, fontSizes } = theme;

const WorkHeaderList = styled.div`
    display: flex;
    width: 100%;
    list-style-type: none;
    padding: 10px 0px;
`;

const WorkHeaderItem = styled.span`
    display: table-cell;
    position: relative;
    text-align: center;
    cursor: pointer;
    padding: 0px 5px;
    border-radius: 1px;
    border-bottom: ${props => (props.isActive ? `5px solid ${colors.primary}` : '5px solid transparent')};
    transition: border-bottom 0.5s;
    font-size: ${fontSizes.large};
    color: ${colors.primary};
    a {
        display: block;
        padding: 5px 15px;
        transition: ${theme.transition};
        border-radius: 2px;

        span {
            display: block;
        }

        :hover {
            background: ${colors.primary};
            color: ${colors.offWhite};
            transform: translateY(-5px);
        }    
    }
    

`;


class WorkHeader extends Component {
    doClick(index, event) {
        this.props.click(index);
    }

    render() {
        let activeClass = this.props.activeId;

        return (
            <WorkHeaderList>
                {this.props.data.map(({ node }, i) => {
                    const { shortCompany } = node.frontmatter;
                    return (
                        <WorkHeaderItem
                            key={i}
                            isActive={activeClass === i}>
                            <a onClick={this.doClick.bind(this, i)}>
                                <span>
                                    {shortCompany}
                                </span>
                            </a>
                        </WorkHeaderItem>
                    )
                })}
            </WorkHeaderList>
        )
    }

}


export default WorkHeader;