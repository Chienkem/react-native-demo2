
import Router from './Navigations/Router'
import FlashMessage from "react-native-flash-message";
import { configureStore } from '@reduxjs/toolkit';
import { Provider, useSelector } from 'react-redux';
import userReducer from './features/user';
import { SafeAreaView } from "react-native"
import Navbar from './Components/Navbar';
export const store = configureStore({
  reducer: {
    user: userReducer
  }
});
export default function App() {
  return (
    <>
      <Provider store={store}>
        <Router />
        <FlashMessage
          style={{ marginTop: 20 }}
          position="top"
        />
        <Navbar />
      </Provider>
    </>
  );
}

