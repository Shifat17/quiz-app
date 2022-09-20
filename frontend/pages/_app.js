import 'semantic-ui-css/semantic.min.css';
import '../styles/globals.css';
import { useDispatch, useSelector } from 'react-redux';
import { Provider } from 'react-redux';
import store from 'src/app/store';
import { useEffect } from 'react';
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
