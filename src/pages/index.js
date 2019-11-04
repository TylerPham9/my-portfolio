import React from "react"
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import About from '../components/about'
import Work from '../components/work'
import Projects from '../components/projects'
import Contact from '../components/contact'

import "font-awesome/css/font-awesome.min.css"

import styled from 'styled-components';

const MainContainer = styled.main`
	padding: 2vh 5vw;
	margin: 0 auto;
	width: 100%;
	overflow: hidden;
`;

const IndexPage = () => {
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
			filter: { fileAbsolutePath: {regex: "/work/"} }
			sort: { fields:[frontmatter___date], order: DESC }
		) {
			edges {
				node {
					frontmatter {
            			title
						company
						shortCompany
						location
						range
						url
					}
					html
				}
			}
		}
		projects: allMarkdownRemark( 
			filter: { fileAbsolutePath: {regex: "/projects/"} }
			sort: { fields:[frontmatter___date], order: DESC }
		) {
			edges {
				node {
					frontmatter {
            			date
						title
						github
						tech
						course
					}
					html
				}
			}
		}
		contact: allMarkdownRemark( 
			filter: { fileAbsolutePath: {regex: "/contact/"} }
			sort: { fields:[frontmatter___date], order: DESC }
		) {
			edges {
				node {
					frontmatter {
						title
					}
					html
				}
			}
		}
	}`)
	
	return (
		<Layout>
			<MainContainer>
				<About data={pageQuery.about.edges} />
				<Work data={pageQuery.work.edges} />
				<Projects data={pageQuery.projects.edges} />
				<Contact data={pageQuery.contact.edges} />
			</MainContainer>

		</Layout>
	)
}

export default IndexPage;
