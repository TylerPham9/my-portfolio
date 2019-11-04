import React, { Component } from "react";
import Caption from './caption';
import styled from 'styled-components';
import { theme, mixins, media } from '@styles';

const { colors, fontSizes } = theme;

const ProjectsContainer = styled.section`
    ${mixins.flexCenter};
    width: 100%;
`;

const ProjectsSectionTitle = styled.h1`
    font-size: ${fontSizes.title};
    padding-bottom: 20px;
`;

const Grid = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 8fr;
    gap: 1.2rem 1.2rem;

    ${media.desktop`grid-template-columns: repeat(2, 1fr);`};  
    ${media.thone`grid-template-columns: 1fr;`};    
`;

const ProjectCard = styled.div`
    height: 100%;
    padding: 10px 10px;
    margin: 10px 0px;
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    ${mixins.boxShadow};
    ${mixins.flexBetween};

    align-items: normal;
    flex-direction: column;
    background-color: ${colors.primaryBackgroundLight};
`;

const ProjectTitle = styled.h2`
    font-size: ${fontSizes.large};
    color: ${colors.primary};
`;

const ProjectDetail = styled.p`
    font-size: ${fontSizes.xsmall};
    font-style: italic;
    padding: 5px 0;
    margin: 0;
    color: ${colors.offWhite};
`;

const ProjectContent = styled.div`
    font-size: ${fontSizes.small};
`;

const TechList = styled.ul`
    flex-grow: 1;
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
`;

const Tech = styled.li`
    font-size: ${fontSizes.xsmall};
    margin-right: 5px;
    margin-top: 5px;
    padding: 2px 5px;
    background: ${colors.offWhite};
    border-radius: 2px;
    color: ${colors.primaryBackground};
`;


class Projects extends Component {

    render() {
        const { data } = this.props;

        return (
            <ProjectsContainer id="projects">
                <Caption>
                    <ProjectsSectionTitle
                        className="fadein"
                        style={{ transitionDelay: `${theme.fadeinOffset}ms` }}>
                        Projects
                    </ProjectsSectionTitle>
                    <Grid>
                        {data.map(({ node }, i) => {
                            const { frontmatter, html } = node;
                            const { title, github, tech, course } = frontmatter;

                            return (
                                <ProjectCard
                                    key={i}
                                    as="a"
                                    href={github}
                                    target="_blank"
                                    rel="nofollow noopener noreferrer"
                                    className="fadein"
                                    style={{ transitionDelay: `${100 * i + theme.fadeinOffset}ms` }}
                                >

                                    <div
                                        className="fadein"
                                        style={{ transitionDelay: `${100 * (i + 3) + theme.fadeinOffset}ms` }}
                                    >
                                        <ProjectTitle>
                                            {title}
                                        </ProjectTitle>
                                        <ProjectDetail>
                                            {course}
                                        </ProjectDetail>
                                    </div>

                                    <ProjectContent
                                        className="fadein"
                                        style={{ transitionDelay: `${100 * (i + 5) + theme.fadeinOffset}ms` }}
                                        dangerouslySetInnerHTML={{ __html: html }} />
                                    <footer>
                                        <TechList
                                            className="fadein"
                                            style={{ transitionDelay: `${100 * (i + 7) + theme.fadeinOffset}ms` }}>
                                            {tech.map((tech, i) => (
                                                <Tech key={i}>{tech}</Tech>
                                            ))}
                                        </TechList>
                                    </footer>
                                </ProjectCard>
                            )
                        })}
                    </Grid>
                </Caption>
            </ProjectsContainer>

        )
    }
}

export default Projects;