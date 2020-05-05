import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        color: 'white'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: 'white',
    }
}));

export default function FLOSS() {
    const classes = useStyles();
    let blueColor = 'rgb(42,55,122)'


    return (
        <div className={classes.root}>
            <Paper variant="outlined" style={{ background: blueColor, color: '#fff', textAlign: 'justify' }}>
                <Typography>
                    The concept of Free and Open Source software is a long standing one. At it's core, it is the combination of two key attributes of software.
                    Software that Free is one that gives the user control.
                    They are free to do with it that you will.
                    Open Source software has its source code exposed.
                    People have the ability see what the programs are doing and can help improve it.
                    The combination of the two suggests that we should be developing software that anyone can use however they please and that we are developing it a manner that allows people to see the source and help make it better.
                    A key point that I want to actively iterate is that free is not monetarily free.
                    I can spend money on FOSS if I am then allowed to fully configure and manipulate it.
                    It is relatively common though in this realm that people also create things that financially free as well.
                    Due to this people often refer to the concept as Free/Libre and Open Source Software to help emphasize this distinction.
                    The following will talk about some popular projects and companies at the cross product of these individual concepts.
                    </Typography>
            </Paper>

            <Grid container spacing={3} style={{ paddingTop: '50px', paddingBottom: '50px', color:'white'}}>

                <Grid item xs={12} sm={6} >
                    <ExpansionPanel style={{color: 'white' , backgroundColor:'#434f54'}}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon style={{color:'white'}} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>Not Free And Closed Source</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                The majority of software falls in this category.
                                Another term that describes Not Free and Closed Software is proprietary software.
                                The Microsoft Office Suite, well almost everything put out by Microsoft, is completely proprietary.
                                You don't have the ability to see any source code for the products.
                                You also have limited ability to edit software through their licensing.
                                The Adobe Creative Suite is very similar.
                                Photoshop and Premiere do not have any source code associated with them.
                                Many device drivers which allow your computer to interface with specific physical components are proprietary.
                                This conversation can easily extend to hardware which is made proprietary through its software's distribution.
                                One notable example currently is popular video game company Riot Games' new release <i> Valorant</i> has its anti-cheat program installed at the kernel level.
                                This is very troublesome.
                                We have no idea what Riot Games could be doing with this kernel access.
                                It could be hiding Spyware to monitor user's machines and habits outside of the game.
                                Due to its proprietary nature we have no idea.
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <ExpansionPanel style={{color: 'white' , backgroundColor:'#434f54'}}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon  style={{color: 'white'}}/>}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography className={classes.heading}>Free And Closed Source</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                Most examples fall in the extremes of proprietary or FOSS.
                                However, there are many things that fall in the grey.
                                One example would be Adobe Acrobat Reader.
                                There's no public source code.
                                Despite this, Adobe's license for this program is very open for what you're allowed to do with it as a user.
                                Modding Video Games is also a very common example of free, but closed source software experiences.
                                The source code for games like <i>Minecraft</i> or <i>Skyrim</i> are not available.
                                However, the developers expose certain aspects of the game to external modders to completely bend the experience to their will.
                                This allows for users to have complete freedom to manipulate their software, but they not have complete access to its source so achieving many of these goals can become much more difficult.
                                Popular fighting game <i>Street Fighter V</i> had issues with its Netcode (protocols for managing online multiplayer connections) for years.
                                Within the past year, a fan created a mod for the game greatly improving the online performance for players.
                                In a recent patch to the game, the developers at Capcom used a similar strategy to improve this issue that was never touched in any update previous to this fan's mod.
                                So many of the examples in this category lead to companies getting an improved product through users' efforts to make their software better.
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <ExpansionPanel style={{color: 'white' , backgroundColor:'#434f54'}}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon style={{color: 'white' }} />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography className={classes.heading}>Not Free And Open Source</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                Microsoft Visual Studio Code (VS Code) is a wonderful example of a company trying Open Source with one of its projects.
                                This is a lightweight IDE developed by Microsoft that has become one of the most popular development tools since the project's inception in 2015.
                                You can find that code on Github <a target="blank" href="https://github.com/Microsoft/vscode">here</a>.
                                Despite being open source parts of its compilation prior to release is run through Microsoft proprietary compilers.
                                However, you can compile the source code yourself there might just be certain features missing.
                                There is an extension marketplace of free add-ons to VS Code.
                                Many of which are also Open Source projects.
                                It is so amazing as Microsoft is known for some the most egregious acts of proprietary software, but has also launched this endeavor which has become one of the defacto standards of coding development, especially web based development.
                                Google Chrome also fits in this weird category as some of its source code is available, but there is a lot of code not publicly available.
          </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <ExpansionPanel style={{color: 'white' , backgroundColor:'#434f54'}}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon  style={{color: 'white'}}/>}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography className={classes.heading}>Free And Open Source</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                I can talk the most about this combination.
                                This movement was spearheaded by the work of Richard Stallman and Linus Torvalds.
                                Stallman with the GNU Project which helped define licenses for Open Source Projects and categorize other established software licenses.
                                The  most recent version of the GNU General Public License can be found <a target="blank" href="https://www.gnu.org/licenses/gpl-3.0.en.html" >here</a>.
                                Torvalds revolutionized the game when he developed Linux in 1991.
                                Linux is an open source which at the time was a revolutionary concept.
                                Torvalds was growing Linux through open source collaboration.
                                He and his team were using a proprietary source control system called BitKeeper, and getting all of the licenses for collaborators was getting out of hand.
                                They realized they needed an open source solution.
                                3 April 2005 development of Git began, and on the 29th they achieved their goals.
                                Git has since become the defacto source control tool.
                                It existence has allowed for Open Source to flourish due to the ability for anyone to collaborate on any project.
                                There are so many fantastic Free and Open Source projects and it can all be traced back to the contributions of these men and their respective teams.

          </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </Grid>
            </Grid>
            <Paper variant="outlined" style={{ background: blueColor, color: '#fff', textAlign: 'justify' }}>
                <Typography>
                    One very cool tool developed by the fine people at Github is the <a href="https://choosealicense.com/" target="blank">Chose A License website</a>.
                    It is a sort of chose your own adventure questionnaire to determine what license you should use on your code to get the exact usage you want out of your code. 
                    One of the biggest hassles with the Free and Open Source Movement is the slight nuances between of the licenses that people use on their code.
            </Typography>
            </Paper>
        </div>
    );
}