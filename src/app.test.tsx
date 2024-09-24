import App from './App.tsx';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';

describe('test App', () => {
    test('render app', () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        );
    });
});
