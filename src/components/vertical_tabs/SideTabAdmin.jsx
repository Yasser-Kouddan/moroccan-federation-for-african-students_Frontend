import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// components
import TableMembers from '../table_members/TableMembers';
import AddPost from '../add_post/AddPost';
import AddCommunity from '../add_community/AddCommunity';
import AddMember from '../add_member/AddMember';
import TableCommunity from '../table_community/TableCommunity';




function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function SideTabAdmin() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, display: 'flex', height: "100%" }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 5, borderColor: 'divider', color: "red", marginRight: 10}}
      >
        <Tab label="Liste des membres"  {...a11yProps(0)} sx={{ padding: 4, fontSize: 14}}/>
        <Tab label="Ajouter un membre" {...a11yProps(1)} sx={{ padding: 4, fontSize: 14}}/>
        <Tab label="Ajouter un post"  {...a11yProps(2)} sx={{ padding: 4, fontSize: 14}}/>
        <Tab label="Liste des communautés"  {...a11yProps(3)} sx={{ padding: 4, fontSize: 14}}/>
        <Tab label="Ajouter une communauté" {...a11yProps(4)} sx={{ padding: 4, fontSize: 14, }}/>
      </Tabs>
      <TabPanel value={value} index={0} >
          <TableMembers/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AddMember/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AddPost/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <TableCommunity/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <AddCommunity/>
      </TabPanel>
    </Box>
  );
}