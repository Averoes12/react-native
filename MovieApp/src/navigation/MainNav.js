import Home from '../screen/Home';
import Detail from '../screen/Detail'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createMaterialTopTabNavigator, createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

const screens = {
    Movie : {
        screen : Home
    },

    Detail :{
        screen : Detail
    }
}


const stack = createStackNavigator(screens)

export default createAppContainer(stack)