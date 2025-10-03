export default function Banner() {
  return (
    <div className="hero min-h-[70vh] bg-gradient-to-r from-primary to-secondary text-white mt-20">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold mb-4">Bienvenue sur PolyMarket 🎉</h1>
          <p className="mb-6">
            Achetez local, soutenez les vendeurs de votre région. Découvrez des produits uniques et de qualité !
          </p>
          <button className="btn btn-accent">Découvrir les produits</button>
        </div>
      </div>
    </div>
  );
}
