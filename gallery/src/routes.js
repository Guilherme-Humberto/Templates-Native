import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Images from './pages/Images/index'
import Videos from './pages/Videos/index'

const Routes = createAppContainer(
    createSwitchNavigator({
        Images,
        Videos,
        
     
        
    })
)

export { Routes }