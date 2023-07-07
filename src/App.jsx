import { useState, useEffect } from "react";
import Loader from './components/Loader';
import Header from './components/Header';
import Work from './components/Work';
import History from './components/History';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3500);
  }, []);

  return (
    <> 
      {isLoading ? (
        <Loader />
      ) : (
        <>
        <Header />
        <Work />
        <History />
        <Contact />
        <Footer />
        </>
      )}
    </>
  );
}

export default App;