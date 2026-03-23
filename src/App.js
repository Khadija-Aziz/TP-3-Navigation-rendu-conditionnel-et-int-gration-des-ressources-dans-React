import { Routes, Route, Link } from 'react-router-dom';
import PageAccueil from './PageAccueil';
import PageApropos from './PageApropos';
import Connexion from './Connexion';
import ListeTaches from './ListeTaches';
import Logo from './Logo';
import FonctionLecteurAudio from './FonctionLecteurAudio';
function App() {
  return (
    <div>
      <nav>
        <Link to="/">Accueil</Link> |{" "}

        <Link to="/apropos">À propos</Link>
      </nav>
        <Connexion />
         <ListeTaches />
           <FonctionLecteurAudio />
               <Logo />
      <Routes>
        <Route path="/" element={<PageAccueil />} />
        <Route path="/apropos" element={<PageApropos />} />
      </Routes>
    </div>
  );
}


export default App;
