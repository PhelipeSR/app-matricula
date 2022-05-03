import React, { useContext, useState } from 'react';
import authContext from '../contexts/auth';

import SignInNavigator from './SignInNavigator';
import AppNavigator from './AppNavigator';
import Intro from '../screens/intro';

export default function Routes() {
  const { signed } = useContext(authContext);
  const [showRealApp, setShowRealApp] = useState(signed);

  if (!showRealApp) {
    return <Intro showRealAppFunc={setShowRealApp} />;
  }

  return signed ? <AppNavigator /> : <SignInNavigator />;
}
