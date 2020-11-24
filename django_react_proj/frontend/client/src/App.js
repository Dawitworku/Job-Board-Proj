import React from 'react';
import Main from './components/Main';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from './components/images/loading-gif.gif';

function App() {

  const { isLoading } = useAuth0();

  if (isLoading) return <div><img src={Loading} alt="loading"></img></div>

  return (
    <div>
      <Main />
    </div>
  );
}

export default App;