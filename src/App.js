import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import NN from './NN';
import FLOSS from './FLOSS';
import ABOUT from './ABOUT';
import { Typography } from '@material-ui/core';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root} style={{backgroundColor:'rgb(24,26,27)'}}>
      <AppBar position="static">
      <Typography style={{textAlign:"center"}} variant='h4'>Freedom of Software and Internet Access</Typography>

        <Tabs value={value} onChange={handleChange}  style={{marginTop: '-=15px'}} aria-label="simple tabs example" centered>

          <Tab label="Net Neutrality" {...a11yProps(0)} />
          <Tab label="Free And Open Source Software" {...a11yProps(1)} />
          <Tab label="About" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <NN/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <FLOSS/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ABOUT/>
      </TabPanel>
    </div>
  );
}
