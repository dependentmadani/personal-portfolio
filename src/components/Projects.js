import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/ping-pong-website.png";
import projImg2 from "../assets/img/chat-app.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Ping-Pong Webiste Game",
      description: "Development & Deployment",
      imgUrl: projImg1,
      link: "https://github.com/dependentmadani/ft_transcendence",
    },
    {
      title: "Chat Application",
      description: "Design & Development",
      imgUrl: projImg2,
      link: "https://github.com/dependentmadani/chat-app",
    },
    {
      title: "Business something",
      description: "Design & Development",
      imgUrl: projImg3,
      link: "",
    },
    {
      title: "Web Server",
      description: "Development",
      imgUrl: projImg4,
      link: "https://github.com/dependentmadani/webserv",
    },
    {
      title: "ft_containers",
      description: "Development",
      imgUrl: projImg5,
      link: "https://github.com/dependentmadani/ft_containers",
    },
    {
      title: "minishell",
      description: "Development",
      imgUrl: projImg6,
      link: "https://github.com/dependentmadani/minishell",
    },
    {
      title: "Inception",
      description: "Development",
      imgUrl: projImg7,
      link: "https://github.com/dependentmadani/Inception",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Some of those projects were done with a group of developers, and some of them are solo projects to accumulate the required experience.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Backend & Frontend Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Low Level Language Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">System Administration Project</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            if (index > 2) return;
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                          {
                            projects.map((project, index) => {
                              if (index < 3 || index > 5){
                                return ;
                              }
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                              )
                            })
                          }
                      </Row>                    
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                            {
                              projects.map((project, index) => {
                                if (index < 6 || index > 8){
                                  return;
                                }
                                  return (
                                  <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                                )
                              })
                            }
                      </Row> 
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
