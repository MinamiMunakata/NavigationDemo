import { createStackNavigator, createAppContainer } from 'react-navigation'

import SampleContentScreen from '../Screens/SampleContentScreen'
import IDCardScreen from '../Screens/IDCardScreen'

const StackNavigation = createStackNavigator(
  {
    SampleContent: { screen: SampleContentScreen },
    IDCard: { screen: IDCardScreen },
  },
  {
    headerMode: 'float',
    initialRouteName: 'SampleContent',

    navigationOptions: ({ navigation }) => {
      let navTitle = 'SampleContent'
      if (navigation.state.params) {
        navTitle = navigation.state.params.title || navTitle
      }
      return {
        title: navTitle,
      }
    },
  }
)

export default createAppContainer(StackNavigation)
