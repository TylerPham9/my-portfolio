import React from "react"
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import About from '../components/about'
import Work from '../components/work'
import Contact from '../components/contact'

import "font-awesome/css/font-awesome.min.css"

import styled from 'styled-components';


const MainContainer = styled.main`
	padding: 2vh 5vw;
	margin: 0 auto;
	width: 100%;
`

const IndexPage = ({data}) => {
	const pageQuery = useStaticQuery(graphql`query{
		about: allMarkdownRemark(filter:{fileAbsolutePath:{regex: "/about/"}}) {
			edges {
				node {
					frontmatter {
						title
						name
						avatar1 {
							childImageSharp {
								fluid(maxWidth:1000) {
									...GatsbyImageSharpFluid
								}
							}
						}
						avatar2 {
							childImageSharp {
								fluid(maxWidth:1000) {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
					html
				}
			}
		}
		work: allMarkdownRemark( 
			filter: { fileAbsolutePath: {regex: "/jobs/"} }
			sort: { filter:[frontmatter___date], order: DESC }
		) {
			edges {
				node {
					frontmatter {
						title
						company
					}
				}
			}
		}
	}`)
	return (
		<Layout>

			<MainContainer>
				<About data={pageQuery.about.edges} />
				<Work></Work>
				<Contact></Contact>
			</MainContainer>

		</Layout>
	)
}

export default IndexPage;

// export const pageQuery = useStaticQuery(graphql`query{
// 	about: allMarkdownRemark(filter:{fileAbsolutePath:{regex: "/about/"}}) {
// 		edges {
// 			node {
// 				frontmatter {
// 					title
// 					name
// 					avatar1 {
// 						childImageSharp {
// 							fluid(maxWidth:1000) {
// 								...GatsbyImageSharpFluid
// 							}
// 						}
// 					}
// 					avatar2 {
// 						childImageSharp {
// 							fluid(maxWidth:1000) {
// 								...GatsbyImageSharpFluid
// 							}
// 						}
// 					}
// 				}
// 				html
// 			}
// 		}
//   	}
// }`)
// tera1: file(relativePath: { eq: "images/tera.jpg" }) {
// 	childImageSharp {
// 			fluid (maxWidth:1000) {
// 				...GatsbyImageSharpFluid
// 			}
// 	}
// },