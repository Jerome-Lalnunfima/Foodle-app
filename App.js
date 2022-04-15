
import * as React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import store from './redux/store'
import Main from './navigators/Main';
import SafeAreaView from 'react-native';

const App = () => {
  return (
    <Provider store={store}>

        <Main/>   

    </Provider>
  );
}

export default App;