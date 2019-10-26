import React, { Component } from "react"
import styled from 'styled-components';
import { theme, mixins, media} from '@styles';
const { colors, fontSizes, fonts } = theme;


const CaptionContainer = styled.div`
    padding: 1em 2em;
    opacity: 1;
    max-width: calc(${theme.captionWidth} - ${theme.captionItemMargin});
    ${media.tablet`padding: 1em 3em;`};

`

const CaptionItem = styled.div`   
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    opacity: 0.9;
    max-width: 500px;
    h1,
    h2,
    h3,
    h4,
    p {
        margin: 6px ${theme.captionItemMargin};
        text-align: left;
        opacity: 0;
        transform: translateY(-60px);
        transition-property: transform, opacity;
        transition-duration: 400ms;
    };
    
    .fadein & { 
        h1,
        h2,
        h3,
        h4,
        div p {
            transform: translateY(0);
            opacity: 1;
        }
    }

    ${media.tablet`max-width: 500px;`};


`;

class Caption extends Component {
    constructor(props) {
        super(props)

        this.captionNode = React.createRef()
        this.captionItems = React.createRef()
        this.getItemsHeight = this.getItemsHeight.bind(this)

        this.state = {
            isIntersecting: false,
            nodeHeight: 0,
        }
    }

    componentDidMount() {
        if ("IntersectionObserver" in window) {
            const node = this.captionNode.current

            const options = {
                root: null, // relative to document viewport
                rootMargin: "0px", // margin around root. Values are similar to css property. Unitless values not allowed
                threshold: 0.2, // visible amount of item shown in relation to root
            }

            const onChange = (changes, observer) => {
                changes.forEach(change => {
                    if (change.intersectionRatio >= 0.2) {
                        this.setState({
                            isIntersecting: true,
                        })
                    }
                })
            }

            const observer = new IntersectionObserver(onChange, options)
            observer.observe(node)
        } else {
            this.setState({
                isIntersecting: true,
            })
        }
    }

    getItemsHeight() {
        const node = this.captionItems.current
        return node.getBoundingClientRect().height
    }

    render() {
        const { isIntersecting } = this.state
        const { children } = this.props
        return (
            <CaptionContainer
                ref={this.captionNode}
                className={`${isIntersecting ? "fadein" : ""}`}
            >
                <CaptionItem ref={this.captionItems}>
                    {children}
                </CaptionItem>
            </CaptionContainer>
        )
    }
}

export default Caption