import React from 'react';
import { Provider } from 'react-redux';

import store from './src/app/store';
import Navigators from './src/navigators';

export const App = () => {
    return (
        <Provider store={store}>
            <Navigators />
        </Provider>
    );
};
export default App;
