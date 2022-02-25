import React from 'react';
import { Timeline, Icon } from 'antd';
import { Layout } from 'antd';
import { Typography} from 'antd';
import Jiaheng from '../images/Jiaheng.jpg';
import csg from '../images/csg.png';
import ecomm from '../images/e-comm.png';
import MMA from '../images/MMA.png';
import { Collapse } from 'antd';
import twitter from '../images/twitter.jpg';
import c4me from '../images/c4me.png';
import webgen from '../images/Webgen.png';
import { Card, Col, Row } from 'antd';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
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
                                <Title style={{ textAlign: 'center' }} >Jiaheng Guan</Title>
                                <img src={Jiaheng} alt="Avatar" class="prof_picture" ></img>
                            </div>
                            <div class="even">
                                <Typography className = "typolog" >
                                    <Title >About Me</Title>
                                    <Paragraph className = "self_intro">
                                    My name is Jiaheng Guan. Completed Bachelor degrees at Queens College. I'm currently finding a full-time software developer for entry level.
                                    </Paragraph>
                                    <br />
                                </Typography>
                            </div>
        
                            {/* <div id = "Timeline" class="odd" >
                                <Title >Experience</Title>
                                <Timeline mode="alternate">
                                    <Timeline.Item>
                                        <h3>Aug 2017 (Start Bachelor Degree)</h3>Start Bachelor degree in Computer Science at Stony Brook University 
                                    </Timeline.Item>
                                    <Timeline.Item color="green">
                                        <h3>Jan 2019-May 2019 (Teaching Assistant)</h3>Teaching Assistant for Data Structure
                                    </Timeline.Item>
                                    <Timeline.Item color="brown">
                                        <h3>July 2019 - May 2020 (Web Developer)</h3> Work in Stony Brook University CS Department as a Web Developer in New York 
                                    </Timeline.Item>
                                    <Timeline.Item color="brown">
                                        <h3>May 2020 (Graduated)</h3>Completed <b>Bachelor Degree</b> at <b>Stony Brook University</b> 
                                    </Timeline.Item>
                                    <Timeline.Item color="purple">
                                        <h3>June 2020 - Aug 2020 (Software Engineering Intern)</h3> Software Engineering Intern at <b>MMA Pan Asia Fund</b> in Taiwan 
                                    </Timeline.Item>
                                    <Timeline.Item color="blue">
                                        <h3>Aug 2020 - May 2021(Graduated)</h3> Completed <b>Master Degree</b> at <b>Stony Brook University</b>
                                    </Timeline.Item>
                                    <Timeline.Item color="blue">
                                        <h3>June 2021 (Software Developer)</h3> Full-time Software Developer at <b>General Motors</b> in Arizona (Current)
                                    </Timeline.Item>
                                    <Timeline.Item color="red">
                                        <h3>Now</h3>
                                    </Timeline.Item>
                                </Timeline>
                            </div> */}
                            <div class="even" >
                                <Title >Major Projects</Title>
                                <div class="card-section">
                                    <Row gutter={16}>
                                    <Col span={8}>
                                            <Card className="projects" title="Grab Pics" bordered={false}>
                                                <img src={MMA}  alt="" class="project_picture" ></img>
                                                <div class="overlay">
                                                    <div class="text"><a href="https://github.com/JiahengGuan/Grap-Pics.git">Go to Github</a></div>
                                                </div> 
                                            </Card>
                                        </Col>
                                        <Col span={8}>
                                            <Card className="projects" title="C4me" bordered={false}>
                                                <img src={c4me}  alt="" class="project_picture" ></img>
                                                <div class="overlay">
                                                    <div class="text"><a href="https://github.com/fenghsi/College4me">Go to Github</a></div>
                                                </div> 
                                            </Card>
                                        </Col>
                                        <Col span={8}>
                                            <Card className="projects" title="Twitter Clone" bordered={false}>
                                                <img src={twitter}  alt="" class="project_picture" ></img>
                                                <div class="overlay">
                                                    <div class="text"><a href="https://github.com/fenghsi/twitter-clone">Go to Github</a></div>
                                                </div> 
                                            </Card>
                                        </Col>
                                    </Row>
                                    <br />
                                    <Row gutter={16}>
                                        <Col span={8}>
                                            <Card className="projects" title="WebGen" bordered={false}>
                                                <img src={webgen}  alt="" class="project_picture" ></img>
                                                <div class="overlay">
                                                <div class="text"><a href="https://web4bio.github.io/webgen/">Go to Website</a></div>
                                                </div> 
                                            </Card>
                                        </Col>
                                        <Col span={8}>
                                            <Card className="projects" title="E-Commerce Website" bordered={false}>
                                                <img src={ecomm}  alt="" class="project_picture" ></img>
                                                <div class="overlay">
                                                <div class="text"><a href="https://github.com/fenghsi/e-commerce-project">Go to Github</a></div>
                                                </div> 
                                            </Card>
                                        </Col>
                                        <Col span={8}>
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
                        <div class="even">
                                <Typography className = "typolog" >
                                    <Title >Contact</Title>
                                    <Paragraph className = "self_intro">
                                       Email: gjh1547485384@gmail.com
                                    </Paragraph>
                                    <br /><br /><br />
                                </Typography>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center', marginTop:'-100px' }}>©2022 Created by Jiaheng Guan</Footer>

                </Layout>
            </div>
     );
}

export default Home; 