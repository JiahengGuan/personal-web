import React from 'react';
import { Timeline, Icon } from 'antd';
import { Layout } from 'antd';
import { Typography} from 'antd';
import feyu from '../images/feyu.jpg';
import csg from '../images/csg.png';
import ecomm from '../images/e-comm.png';
import { Collapse } from 'antd';
import twitter from '../images/twitter.jpg';
import c4me from '../images/c4me.png';
import { Card, Col, Row } from 'antd';
const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;
const { Panel } = Collapse;


function Home(props) {
    return (
            <div id = "homepage">
                <Layout className="layout">
                    <Header>
                    </Header>
                    <Content className = "content" >
                        <div class = "blocks" >
                            <div class="odd">
                                <Title style={{ textAlign: 'center' }} >Fenghsi Yu</Title>
                                <img src={feyu} alt="Avatar" class="prof_picture" ></img>
                            </div>
                            <div class="even">
                                <Typography className = "typolog" >
                                    <Title >About Me</Title>
                                    <Paragraph className = "self_intro">
                                        I'm a student in Stony Brook University. I major in computer science. Currently, I'm in BS/MS accelerated program of Computer Science in Stony Brook University. I will graduate in 3 years for undergraduate and conitune the MS degree for another year.
                                    </Paragraph>
                                    <br />
                                </Typography>
                            </div>
                            <div id = "Timeline" class="odd" >
                                <Title >Experience</Title>
                                <Timeline mode="alternate">
                                    <Timeline.Item>
                                        <h3>Fall 2017</h3>Start studying Computer Science in Stony Brook University </Timeline.Item>
                                    <Timeline.Item color="green">
                                        <h3>Spring 2019</h3>Teaching Assistant for Data Structure
                                    </Timeline.Item>
                                    <Timeline.Item>
                                        <h3>June 2019</h3>Intern at KSR
                                    </Timeline.Item>
                                    <Timeline.Item color="red">
                                        <h3>July 2019</h3> Work in Stony Brook University CS Department as a Web Assistant (Current Job)
                                    </Timeline.Item>
                                    <Timeline.Item color="red">
                                        <h3>Now</h3>
                                    </Timeline.Item>
                                </Timeline>
                            </div>
                            <div class="even" >
                                <Title >Major Projects</Title>
                                <div class="card-section">
                                    <Row gutter={16}>
                                        <Col span={6}>
                                            <Card className="projects" title="C4me" bordered={false}>
                                                <img src={c4me}  alt="" class="project_picture" ></img>
                                                <div class="overlay">
                                                    <div class="text">Currently working on</div>
                                                </div> 
                                            </Card>
                                        </Col>
                                        <Col span={6}>
                                            <Card className="projects" title="Twitter Clone" bordered={false}>
                                                <img src={twitter}  alt="" class="project_picture" ></img>
                                                <div class="overlay">
                                                    <div class="text"><a href="https://github.com/fenghsi/twitter-clone">Go to Github</a></div>
                                                </div> 
                                            </Card>
                                        </Col>
                                        <Col span={6}>
                                            <Card className="projects" title="E-Commerce Website" bordered={false}>
                                                <img src={ecomm}  alt="" class="project_picture" ></img>
                                                <div class="overlay">
                                                <div class="text"><a href="https://github.com/fenghsi/e-commerce-project">Go to Github</a></div>
                                                </div> 
                                            </Card>
                                        </Col>
                                        <Col span={6}>
                                            <Card className="projects" title="Course site Generator" bordered={false}>
                                                <img src={csg}  alt="" class="project_picture" ></img>
                                                <div class="overlay">
                                                <div class="text"><a href="https://github.com/fenghsi/course_site_generator">Go to Github</a></div>
                                                </div>              
                                            </Card>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                            <div class="odd">
                            <Title >Minor Projects</Title>
                            <Collapse accordion>
                                <Panel header="Tic Tac Toe" key="1">
                                <p>Tic Tac toe is a simple gaming project. We implement front-end in react and backend in Express, which intergrates with mongodb. </p>
                                </Panel>
                                <Panel header="SBML" key="2">
                                <p>SBML is a unique programing language, which was built in python lex and yacc. <a href="https://github.com/fenghsi/sbml/tree/master">Click here to view</a></p>
                                </Panel>
                                <Panel header="DNS Experiment" key="3">
                                <p>Write a python Script to generate an DNS-like server for browsing</p>
                                </Panel>
                            </Collapse>
                            </div>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>©2020 Created by Fenghsi Yu</Footer>

                </Layout>
            </div>
     );
}

export default Home; 