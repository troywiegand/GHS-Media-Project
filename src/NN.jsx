import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

class NN extends Component {

    blueColor='rgb(42,55,122)'
    redColor= 'rgb(233, 30, 99)'
    greenColor='rgb(16, 204, 82)'

    render = () => {
        return (<div className="NN">

            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: this.blueColor , color: '#fff' }}
                    contentArrowStyle={{ borderRight: `7px solid  ${this.blueColor}` }}
                    date="October 1969"
                    iconStyle={{ background: this.blueColor, color: '#fff' }}
                    icon={<img/>}
                >
                    <h3 className="vertical-timeline-element-title">Birth of the Internet</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
                    <p>The Internet</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: this.blueColor , color: '#fff' }}
                    contentArrowStyle={{ borderRight: `7px solid  ${this.blueColor}` }}
                    date="2010 - 2011"
                    iconStyle={{ background: this.blueColor, color: '#fff' }}
                    icon={<img/>}
                >
                    <h3 className="vertical-timeline-element-title">Internet Evolves</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */}
                    <p>
Something insightful    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: this.redColor , color: '#fff' }}
                    contentArrowStyle={{ borderRight: `7px solid  ${this.redColor}` }}
                    date="April 2013"
                    iconStyle={{ background: this.redColor, color: '#fff' }}
                    icon={<img/>}
                >
                    <h3 className="vertical-timeline-element-title">Start of Net Neutrality</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">Online Course</h4> */}
                    <p>
Person did blah    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: this.redColor , color: '#fff' }}
                    contentArrowStyle={{ borderRight: `7px solid  ${this.redColor}` }}
                    date="2002 - 2006"
                    iconStyle={{ background: this.redColor, color: '#fff' }}
                    icon={<img/>}
                >
                    <h3 className="vertical-timeline-element-title">Other thing happened</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4> */}
                    <p>
People Dingus    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{ background: this.greenColor, color: '#fff', justifyContent: 'center',display:'flex',alignItems:'center'}}
                    icon={<h4>NOW</h4>}
                />
            </VerticalTimeline>
        </div>)
    }
}

export default NN