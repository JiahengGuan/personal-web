import React from 'react';
import { Timeline, Icon } from 'antd';
import { Layout } from 'antd';
import { Typography} from 'antd';
import Jiaheng from '../images/Jiaheng.jpg';
//import csg from '../images/csg.png';
//import ecomm from '../images/e-comm.png';
import GP from '../images/Grab_Pics.jpg';
import { Collapse } from 'antd';
import ReminderList from '../images/ReminderList.jpg';
import SP from '../images/spotify.jpg';
//import webgen from '../images/Webgen.png';
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
                                <Title style={{ textAlign: 'center' }} >Jiaheng Guan</Title>
                                <img src={Jiaheng} alt="Avatar" class="prof_picture" ></img>
                            </div>
                            <div class="even">
                                <Typography className = "typolog" >
                                    <Title >About Me</Title>
                                    <Paragraph className = "self_intro">
                                    My name is Jiaheng Guan. Completed Bachelor degrees at Queens College. I'm currently working in Golden Touch Home LLC as a IT OFFICER.
                                    </Paragraph>
                                    <br />
                                </Typography>
                            </div>
        
                            <div id = "Timeline" class="odd" >
                                <Title >Experience</Title>
                                <Timeline mode="alternate">
                                    <Timeline.Item>
                                        <h3>Aug 2017 (Start College)</h3> Start to study at Queens College 
                                    </Timeline.Item>
                                    <Timeline.Item color="green">
                                        <h3>Spring 2019 (Start Bachelor Degree)</h3> Start Bachelor Degree in Computer Science at Queens College
                                    </Timeline.Item>
                                    <Timeline.Item color="brown">
                                        <h3>Jan 2019 - May 2019 (Math Tutor)</h3> Experience of helping math problem at math center
                                    </Timeline.Item>
                                    <Timeline.Item color="purple">
                                        <h3>Spring 2022(Graduated)</h3> Completed <b>Bachelor Degree</b> at <b>Queens College</b>
                                    </Timeline.Item>
                                    <Timeline.Item color="red">
                                        <h3>Now(Finding job)</h3>Finding a job as a software engineer for entry level
                                    </Timeline.Item>
                                </Timeline>
                            </div>
                            <div class="even" >
                                <Title >Major Projects</Title>
                                <div class="card-section">
                                    <Row gutter={16}>
                                    <Col span={8}>
                                            <Card className="projects" title="Grab Pics" bordered={false}>
                                                <img src={GP}  alt="" class="project_picture" ></img>
                                                <div class="overlay">
                                                    <div class="text"><a href="https://github.com/JiahengGuan/Grap-Pics.git">Go to Github</a></div>
                                                </div> 
                                            </Card>
                                        </Col>
                                        <Col span={8}>
                                            <Card className="projects" title="Spotify" bordered={false}>
                                                <img src={SP}  alt="" class="project_picture" ></img>
                                                <div class="overlay">
                                                    <div class="text"><a href="https://github.com/JiahengGuan/Spotify.git">Go to Github</a></div>
                                                </div> 
                                            </Card>
                                        </Col>
                                        <Col span={8}>
                                            <Card className="projects" title="ReminderList" bordered={false}>
                                                <img src={ReminderList}  alt="" class="project_picture" ></img>
                                                <div class="overlay">
                                                    <div class="text"><a href="https://github.com/JiahengGuan/ReminderList.git">Go to Github</a></div>
                                                </div> 
                                            </Card>
                                        </Col>
                                    </Row>
                                    {/* <br />
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
                                    </Row> */}
                                </div>
                            </div>
                            <div class="odd">
                            <Title >Minor Projects</Title>
                            <Collapse accordion>
                                <Panel header="Category-Partition" key="1">
                                <p>Category-Partition will generate between 60 and 100 test-case specifications for a simplified version of the copy utility.
                                    <a href= "https://github.com/JiahengGuan/Category-Partition.git"> Click here to view in Github</a></p>
                                </Panel>
                                <Panel header="White-Box-Testing" key="2">
                                <p>Get familiar with white-box testing and understand some subtleties of structural coverage.
                                    <a href="https://github.com/JiahengGuan/White-Box-Testing.git"> Click here to view in Github</a></p>
                                </Panel>
                                <Panel header="TipsCalculator" key="3">
                                <p>A simple Android app to calculate out the tips and total of 3 different percentages for each person.
                                    <a href="https://github.com/JiahengGuan/TipsCalculator.git"> Click here to view in Github</a></p>
                                </Panel>
                                <Panel header="ReadAndWrite" key="4">
                                <p>read the source file contents in the parent process and write the contents through the pipe to the output file.
                                    <a href="https://github.com/JiahengGuan/ReadAndWrite.git"> Click here to view in Github</a></p>
                                </Panel>
                                <Panel header="BuggyClass" key="5">
                                <p>Using JUnit to decide whether can achive the requirement and statement coverage.
                                    <a href="https://github.com/JiahengGuan/BuggyClass.git"> Click here to view in Github</a></p>
                                </Panel>
                                <Panel header="CustomerString" key="6">
                                <p>Assesses some basic knowledge of Java and JUnit for testing.
                                    <a href="https://github.com/JiahengGuan/CustomerString.git"> Click here to view in Github</a></p>
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