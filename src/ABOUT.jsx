import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';


class ABOUT extends Component {

    render = () => {
        return (<div className="ABOUT" style={{ color: '#fff' }}><Typography>
            This is a project by Troy Wiegand for GHS 210 Freedom And Movement. Below are included sources:
            </Typography>
            <ul>
                <li>Adobe. Adobe Acrobat Reader DC FAQs. December 2019. https://helpx.adobe.com/reader/faq.html</li>
                <li>Ale2610. ComputerCraft Icon v2. 2015. favicon.cc, https://www.favicon.cc/?action=icon&file_id=799726</li>
                <li>Finley, Klint. The WIRED Guide to Net Neutrality. May 2018. https://www.wired.com/story/guide-net-neutrality/ </li>
                <li>GNU Project. Categories of free and nonfree software. February 2019. https://www.gnu.org/philosophy/categories.html </li>
                <li>Stallman, Richard. Why Open Source misses the point of Free Software. January 2020. https://www.gnu.org/philosophy/open-source-misses-the-point.en.html </li>
            </ul>
        </div>)
    }
}

export default ABOUT