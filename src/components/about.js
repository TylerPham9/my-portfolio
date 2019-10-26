import React, { Component } from "react"
import Img from 'gatsby-image';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import Caption from './caption';
import ReactDOM from "react-dom";


import { theme, mixins, media } from '@styles';

const { colors } = theme;



const AboutContainer = styled.section`
	${mixins.flexCenter};
	width: 100%;
	padding-top: calc(${theme.navHeight} + 20px);
	padding-bottom: 20px;
`;

const FlexContainer = styled.div`
	${mixins.flexCenter};
	flex-direction: row;
	${media.desktop`flex-direction: column;`};
`;

const PictureContainer = styled.div`
	position: relative;
	box-shadow: 0 8px 6px -6px #000000;

	width: 295px;
	height: 345px;
	
	${media.tablet`width: 250px; height: 300px;`};
`;

const ImageCover = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
	width: 100%;
`;

const ImageItem = styled(Img)`
	/* position: absolute; */
	/* box-shadow: 0 8px 6px -6px #a8a8a8; */
	padding: 0;
    transition-property: transform, opacity;
	transition-duration: 400ms;
	width: 100%;
	height: 100%;
	border-radius: ${theme.borderRadius};
`;

const Title = styled.h4`
	color: ${colors.primary};
	transition: opacity 300ms ${theme.easing}, transform 300ms ${theme.easing}; 
    
`;

const Name = styled.h1`
	color: ${colors.white};
	transition: opacity 300ms ${theme.easing}, transform 300ms ${theme.easing}; 
`;

const Content = styled.div`

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
		const { data } = this.props
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

					<Caption>
						<Title style={{ transitionDelay: `400ms` }}>
							{title}
						</Title>
						<Name style={{ transitionDelay: `500ms` }}>
							{name}
						</Name>
						<Content style={{ transitionDelay: `600ms` }}
						dangerouslySetInnerHTML={{ __html: html }} />					</Caption>
				</FlexContainer>
			</AboutContainer>

			// <AboutContainer id="about"
			// 	style={{transistionDelay:"1000ms"}}>
			// 	<FlexContainer>
			// 		{/* <TransitionGroup> */}

			// 		{this.state.isMounted &&
			// 				<PictureContainer
			// 					onMouseOver={this.toggleCover}
			// 					onMouseOut={this.toggleCover}
			// 					onClick={this.toggleCover}
			// 					style={{ transitionDelay: `150ms` }}
			// 					>
			// 					<ImageCover>
			// 						<ImageItem fluid={avatar1.childImageSharp.fluid}
			// 							style={{ transitionDelay: `150ms` }} />
			// 					</ImageCover>
			// 					<ImageCover style={{ transitionDelay: `150ms` }}>
			// 						<ImageItem fluid={avatar2.childImageSharp.fluid}
			// 							style={{
			// 								transitionDelay: `150ms`,
			// 								opacity: this.state.isHovering ? 1 : 0
			// 							}} />
			// 					</ImageCover>
			// 				</PictureContainer>}
			// 		{/* </TransitionGroup> */}
			// 		<ContentContainer>
			// 			{/* <TransitionGroup> */}
			// 			{this.state.isMounted && items && items.map((item, i) => (
			// 				<CSSTransition key={i} classNames="fadedown" timeout={3000}>
			// 					{item(`${i * 100}ms`)}
			// 				</CSSTransition>
			// 			))}
			// 			{/* </TransitionGroup> */}
			// 		</ContentContainer>
			// 	</FlexContainer>
			// </AboutContainer>
		)
	}
}

export default About