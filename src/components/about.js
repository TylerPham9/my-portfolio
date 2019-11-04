import React, { Component } from "react"
import Img from 'gatsby-image';
import styled from 'styled-components';
import Caption from './caption';

import { theme, mixins, media } from '@styles';

const { colors, fontSizes } = theme;

const AboutContainer = styled.section`
	padding-top: calc(${theme.navHeight});
	${mixins.flexCenter};
	width: 100%;
	a {
		color: ${colors.primary};
	}
`;

const FlexContainer = styled.div`
	${mixins.flexCenter};
	flex-direction: row;
	max-width: 1000px;
	${media.desktop`flex-direction: column;`};
`;

const PictureContainer = styled.div`
	position: relative;
	${mixins.boxShadow};
	width: 295px;
	height: 345px;
	
	${media.tablet`width: 275px; height: 325px;`};
`;

const ImageCover = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
	width: 100%;
`;

const ImageItem = styled(Img)`
	padding: 0;
    transition-property: transform, opacity;
	transition-duration: 400ms;
	width: 100%;
	height: 100%;
	border-radius: ${theme.borderRadius};
`;

const Title = styled.h4`
	font-size: ${fontSizes.xxlarge};
	color: ${colors.primary};
`;

const Name = styled.h1`
	font-size: ${fontSizes.title};
	color: ${colors.white};
`;

const Content = styled.div`
	a {
		${mixins.inlineLink};
		&:after {height: 1px}
	}
`;

class About extends Component {
	constructor(props) {
		super(props)
		this.toggleCover = this.toggleCover.bind(this)
		this.onResize = this.onResize.bind(this)

		this.state = {
			isHovering: false,
			isMounted: false
		}
	}

	toggleCover() {
		this.setState({
			isHovering: this.state.isHovering ? false : true,
		})
	}
	onResize() {
		let captionHeight = 0;

		if (window.matchMedia("(min-width: 700px)").matches) {
			captionHeight = `${this.captionNode.current.getItemsHeight()}px`
		}

		this.setState({
			captionHeight,
		})
	}


	componentDidMount() {
		setTimeout(() => this.setState({ isMounted: true }), 100);
	}
	componentWillUnmount() {
		this.setState({ isMounted: false });
	}

	render() {
		const { data } = this.props;
		const { frontmatter, html } = data[0].node;
		const { title, name, avatar1, avatar2 } = frontmatter;

		return (
			<AboutContainer id="about">
				<FlexContainer>
					<Caption>
						<PictureContainer
							onMouseOver={this.toggleCover}
							onMouseOut={this.toggleCover}
							onClick={this.toggleCover}
						>
							<ImageCover>
								<ImageItem
									fluid={avatar1.childImageSharp.fluid}
									style={{
										height: this.state.captionHeight,
									}} />
							</ImageCover>
							<ImageCover>
								<ImageItem
									fluid={avatar2.childImageSharp.fluid}
									style={{
										height: this.state.captionHeight,
										opacity: this.state.isHovering ? 1 : 0
									}} />
							</ImageCover>
						</PictureContainer>
					</Caption>

					<Caption
						style={{ paddingTop: `0px` }}>
						<Title
							style={{ transitionDelay: `${theme.fadeinOffset}ms` }}
							className="fadein">
							{title}
						</Title>

						<Name
							className="fadein"
							style={{ transitionDelay: `${100 + theme.fadeinOffset}ms` }}>
							{name}
						</Name>

						<Content
							className="fadein"
							style={{ transitionDelay: `${200 + theme.fadeinOffset}ms` }}
							dangerouslySetInnerHTML={{ __html: html }} />

					</Caption>
				</FlexContainer>
			</AboutContainer>
		)
	}
}

export default About