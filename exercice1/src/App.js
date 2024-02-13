import './css/base.css';

const teams = [
  {
    name: "Édouard Jérémie",
    role: "CEO",
    image: "../public/edouard.jpg",
  },
  {
    name: "Amélie Christelle",
    role: "Directeur des recherche",
    image: "../public/amelie.avif",
  },
  {
    name: "Gille Damien",
    role: "Directeur commercial",
    image: "../public/gilles.jpg",
  },
];

function Card({ ppl }) {
  const rows = [];

  ppl.forEach((t) => {
    rows.push(
      <>
        <li className="gallery__pic">
          <img src={t.image} alt="CEO" className="gallery__image"></img>
          <div className="gallery__div">
            <img src="./public/bgshapes.svg"></img>
            <div className="gallery__txt">
              <h2> {t.name} </h2>
              <h3 className="gallery__work">{t.role}</h3>
            </div>
          </div>
        </li>
      </>,
    );
  });

  return rows;
}

export default function App() {
  return (
    <>
      <header className="team__header">
        <h2 className="team__title">Notre équipe</h2>
      </header>
      <section className="team__content">
        <h1 className="team__heading">
          Présentation de notre formidable équipe
        </h1>
        <p className="team__description">
          Découvrez les esprits créatifs qui propulsent Auto Innovation vers de
          nouveaux sommets dans le monde de la conduite à hydrogène.
        </p>
      </section>
      <ul className="gallery">
        <Card ppl={teams} />
      </ul>
    </>
  );
}