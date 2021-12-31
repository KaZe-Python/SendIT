import React, {useState} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/stacks/MainStack';
import AuthStack from './src/stacks/AuthStack';

export default function App() {
  const [isAuth, seTisAuth] = useState(false);
  return (
    <NavigationContainer>
      {isAuth ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
}