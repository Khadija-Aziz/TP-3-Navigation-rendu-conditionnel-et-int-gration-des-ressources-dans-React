function ListeTaches() {
  const taches = [
    { id: 1, titre: "Apprendre React" },
    { id: 2, titre: "Créer une application react" },
    { id: 3, titre: "Apprendre JEE" }
  ];

  return (
    <ul>
      {taches.map((tache) => (
        <li key={tache.id}>{tache.titre}</li>
      ))}
    </ul>
  );
}

export default ListeTaches;