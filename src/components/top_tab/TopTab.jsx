import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IntroScreen from '../../screens/IntroScreen';
import PostScreen from '../../screens/PostScreen';
import AboutUs from '../about_us/AboutUs';
import Partners from '../partners/Partners';
import ContactUs from '../contact_us/ContactUs';
import logo from "../../assets/logo.png"
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Button from '@mui/material/Button';

function CustomTabPanel(props) {
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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TopTab() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%'}}>

      {/* Navbar elements */}
      <Box sx={{marginBottom: 3}}>

          <Box sx={{position: "absolute", left: 10, top: 40, marginRight: 100}}>
            <img src={logo} width="300" height="100" />
          </Box>

          <Box sx={{ marginTop: 7, marginLeft: 10}}>
              <Tabs value={value} onChange={handleChange} centered textColor='primary' >
                  <Tab label="Acceuil" {...a11yProps(0)} />
                  <Tab label="Actualités" {...a11yProps(1)} />
                  <Tab label="La Fédération" {...a11yProps(2)} />
                  <Tab label="Nos partenaires" {...a11yProps(3)} />
                  <Tab label="Contacter-nous" {...a11yProps(4)} />
              </Tabs>
          </Box>

          <Box sx={{position: "absolute", right: 90, top: 60}}>
            <Button variant="contained" 
                startIcon={<ExitToAppIcon />} 
                size='medium'
                href='/sign_in'
              >
                SignIn
            </Button>
          </Box>

      </Box>


      <CustomTabPanel value={value} index={0}>
          <IntroScreen />
      </CustomTabPanel>


      <CustomTabPanel value={value} index={1}>
          <PostScreen/>
      </CustomTabPanel>


      <CustomTabPanel value={value} index={2}>
        <AboutUs/>
      </CustomTabPanel>


      <CustomTabPanel value={value} index={3}>
        <Partners/>
      </CustomTabPanel>


      <CustomTabPanel value={value} index={4}>
        <ContactUs/>
      </CustomTabPanel>

    </Box>
  );
}