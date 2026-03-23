import { useState } from 'react';

function Connexion() {
  const [connecte, setConnecte] = useState(false);

  return (
    <div>
      {connecte ? (
        <h3>vouz avez connecté</h3>
      ) : (
        <h3> vous avez déconnecté</h3>
      )}
      <button onClick={() => setConnecte(!connecte)}>
       Vouz pouvez changer l’état
      </button>
    </div>
  );
}

export default Connexion;