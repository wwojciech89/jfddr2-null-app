const TileContainer = ({ children }) => {
  return (
    <main>
      <p className="TileContainer__p">Odkryj dobre piwo</p>
      <div className="TileContainer__div">{children}</div>
    </main>
  );
};

export default TileContainer;
