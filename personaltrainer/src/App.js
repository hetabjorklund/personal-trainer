import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import CustomerList from './components/CustomerList';
import TrainingList from './components/TrainingList';
import TrainingCalendar from './components/TrainingCalendar';
import Statistics from './components/Statistics';

function App() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      
      <AppBar position="static">
        <Toolbar>
          <Typography align="center" variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Personal trainer
          </Typography>
        </Toolbar>
      </AppBar>

      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} >
              <Tab label="Customers" value="1" />
              <Tab label="Trainings" value="2" />
              <Tab label="Calendar" value="3" />
              <Tab label="Statistics" value="4" />
            </TabList>
          </Box>
          <TabPanel value="1"> <CustomerList /> </TabPanel>
          <TabPanel value="2"> <TrainingList /> </TabPanel>
          <TabPanel value="3"> <TrainingCalendar /> </TabPanel>
          <TabPanel value="4"> <Statistics /> </TabPanel>
        </TabContext>
        </Box>

    </div>
  );
}

export default App;
