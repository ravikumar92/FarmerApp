import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Introduction from './components/intoduction';
import Login from './components/login';
import Otp from './components/otp';
import Dashboard from './components/dashboard';
import CropDoctor from './components/cropdoctor'
import Crops from './components/cropdoctor/crops'
import CropList from './components/cropdoctor/crop-list'
import SymptomsList from './components/cropdoctor/symptoms-list';
import Sidebar from './components/sideNav';
import MyCrops from './components/myCrops';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Introduction" component={Introduction} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="CropDoctor" component={CropDoctor} />
        <Stack.Screen name="Crops" component={Crops} />
        <Stack.Screen name="CropList" component={CropList} />
        <Stack.Screen name="SymptomsList" component={SymptomsList} />
        <Stack.Screen name="Sidebar" component={Sidebar} />
        <Stack.Screen name="MyCrop" component={MyCrops} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
