import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {Paper, Typography} from '@material-ui/core';

class NN extends Component {

    blueColor='rgb(42,55,122)'
    redColor= 'rgb(233, 30, 99)'
    greenColor='rgb(16, 204, 82)'

    render = () => {
        return (<div className="NN">

            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: this.blueColor , color: '#fff',boxShadow:'none'}}
                    contentArrowStyle={{ borderRight: `7px solid  ${this.blueColor}` }}
                    date="1969"
                    iconStyle={{ background: this.blueColor, color: '#fff' }}
                    icon={<img/>}
                >
                    <h3 className="vertical-timeline-element-title">Birth of the Internet</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
                    <p>Throughout all of the 1960's, people were working on developing some sort of data and computer networking. 
                        It culminated in 1969 when ARPANET carries the first packets over the network.</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: this.blueColor , color: '#fff',boxShadow:'none'}}
                    contentArrowStyle={{ borderRight: `7px solid  ${this.blueColor}` }}
                    date="1978-1980"
                    iconStyle={{ background: this.blueColor, color: '#fff' }}
                    icon={<img/>}
                >
                    <h3 className="vertical-timeline-element-title">Internet Protocols Evolve</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */}
                    <p>
                    The TCP/IP was finalized in 1978. UDP/IP is another common system for more sustained connections founded in 1980. UDP/IP is more useful for more sustained uninterrupted connections as opposed to the more quick bursts of data transfer that TCP/IP is more known for. These protocols are still commonplace to this day.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: this.blueColor , color: '#fff' ,boxShadow:'none'}}
                    contentArrowStyle={{ borderRight: `7px solid  ${this.blueColor}` }}
                    date="1995"
                    iconStyle={{ background: this.blueColor, color: '#fff' }}
                    icon={<img/>}
                >
                    <h3 className="vertical-timeline-element-title">New Internet Architecture</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */}
                    <p>
                   Internet infrastructure model of users connecting to the Internet through an Internet Service Provider or ISP. 
                   Those ISP's then in turn connect to each other through Network Access Points or NAPs.
                   Here is a diagram on early NAPs:
                   <img style={{maxWidth:"100%"}} src={process.env.PUBLIC_URL + '/NewNSFNETArchitecture.jpg'} /> 
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: this.blueColor , color: '#fff',boxShadow:'none' }}
                    contentArrowStyle={{ borderRight: `7px solid  ${this.blueColor}` }}
                    date="early 2000's"
                    iconStyle={{ background: this.blueColor, color: '#fff' }}
                    icon={<img/>}
                >
                    <h3 className="vertical-timeline-element-title">Start of ISP Issues</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">Online Course</h4> */}
                    <p>
                    ISP's start controlling what people are able to do with their connections.
                    They are prohibiting users from configuring their Wi-Fi routers.
                    Some were also prohibiting users from accessing Virtual Private Networks (VPNs) which are used to allow for secure and anonymous connections.   
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: this.redColor , color: '#fff',boxShadow:'none' }}
                    contentArrowStyle={{ borderRight: `7px solid  ${this.redColor}` }}
                    date="2003"
                    iconStyle={{ background: this.redColor, color: '#fff' }}
                    icon={<img/>}
                >
                    <h3 className="vertical-timeline-element-title">Network Neutrality is Born</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4> */}
                    <p>
                    Columbia University law professor Tim Wu coined the term "network neutrality" in a paper about online discrimination.  Wu worried that ISPs' tendency to restrict new technologies would hurt innovation in the long term, and called for anti-discrimination rules.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: this.redColor , color: '#fff',boxShadow:'none' }}
                    contentArrowStyle={{ borderRight: `7px solid  ${this.redColor}` }}
                    date="2005-2008"
                    iconStyle={{ background: this.redColor, color: '#fff' }}
                    icon={<img/>}
                >
                    <h3 className="vertical-timeline-element-title">FCC Blunders Anti-Discrimintion Policy</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4> */}
                    <p>
                    In 2005, the FCC was able to sneak in some anti-discrimination rules in a policy. It prevented blocking legal content or blocking connections from certain types of devices. The FCC ordered Comcast to stop slowing all connections that were used by BitTorrent. Comcast then sued the FCC and won saying the 2005 rules didn't give them enough power.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: this.redColor , color: '#fff',boxShadow:'none' }}
                    contentArrowStyle={{ borderRight: `7px solid  ${this.redColor}` }}
                    date="2014-2015"
                    iconStyle={{ background: this.redColor, color: '#fff' }}
                    icon={<img/>}
                >
                    <h3 className="vertical-timeline-element-title">FCC and the Fast Lanes</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4> */}
                    <p>
                    In 2014, the FCC proposed a new proposal that would allow for internet "fast lanes" where ISPs would be allowed to certain services faster connection speeds than others and discriminate between customers as well. 
                    Through major push back lead by John Oliver of <i>Last Week Tonight</i>, the proposal became much more like theoretical net neutrality. 
                    These rules got passed, and everyone was happy.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: this.redColor , color: '#fff',boxShadow:'none'}}
                    contentArrowStyle={{ borderRight: `7px solid  ${this.redColor}` }}
                    date="2017"
                    iconStyle={{ background: this.redColor, color: '#fff' }}
                    icon={<img/>}
                >
                    <h3 className="vertical-timeline-element-title">FCC Changeup: the Rise of Ajit Pai </h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4> */}
                    <p>
                    With the results of the 2016 Election, President Trump appointed Ajit Pai as the new FCC Chair. 
                    Almost immediately unveiling a plan to undo the 2015 changes. 
                    In December 2017, a vote repealed all of the 2015 changes.
                    This has faced public outcry and a number of legal groups are fighting to reobtain net neutrality.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{ background: this.greenColor, color: '#fff', justifyContent: 'center',display:'flex',alignItems:'center'}}
                    icon={<h4>NOW</h4>}
                />

            </VerticalTimeline>
            <Paper variant="outlined" style={{ background: this.greenColor, color: '#fff', width: '50%', margin:'auto'}}>
                <Typography fontWeight="fontWeightBold" fontFamily="Monospace" m={1}>
                    With the modern conditions of Covid-19, it's even more apparent than ever that we need unbiased nondiscriminatory internet access across the nation. 
                    The number of people, with no access to their work or education or family due to limited internet connections.
                    Many people have relied on public areas like libraries or McDonald's to be able to access the internet.
                    Just imagine ISPs slowing down connections to their competitors or throttling connections to companies or schools because they can.
                    It's a terrible world, and we have an increasingly large list of issues in which to stay vigilant.  
                </Typography>
            </Paper>
        </div>)
    }
}

export default NN