import React from 'react';
import { BaseNavigationContainer, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Points from './pages/Home';
import Detail from './pages/Home';

const AppStack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator>
            <AppStack.Screen name="Home" component={Home} />
            <AppStack.Screen name="Points" component={Points} />
            <AppStack.Screen name="Detail" component={Detail} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;