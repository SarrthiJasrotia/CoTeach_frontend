import React from 'react';
import Body from './components/Body';
import Footer from './components/footer';
import Nav from './components/Nav';
import './App.css';
import { auth } from './services/firebase';
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => setUser(user));
    //cleanup effect; if user moves away from app
    return unsubscribe;
  }, [])


  return (
    <div className="App">
      <Nav user={user} />
      <Body user={user} />
      <Footer />
    </div>
  );
}

export default App;
