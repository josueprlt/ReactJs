import './css/base.css';
import { useState } from 'react';

const packs = [ 
  {
    name: 'Starter Package',
    price: {
      buy: 29999.99,
      leasing: 299.99
    },
    advantages: [
      { active: true, type: 'Assurance auto complémentaire' },
      { active: true, type: 'Première recharge offerte' },
      { active: true, type: 'Assurance contre le vol' },
      { active: true, type: 'Service de rappel d\'entretien' },
      { active: true, type: 'Nettoyage hebdomadaire' },
      { active: false, type: 'Service de diagnostic à distance' },
      { active: false, type: 'Service de remplissage du réservoir' },
      { active: false, type: 'Service de réparation à domicile' },
      { active: false, type: 'Entretien régulier' },
      { active: false, type: 'Recharge d\'hydrogène illimité' }

    ]
  },

  {
    name: 'Premium Package',
    price: {
      buy: 35999.99,
      leasing: 500
    },
    advantages: [
      { active: true, type: 'Assurance auto complémentaire' },
      { active: true, type: 'Première recharge offerte' },
      { active: true, type: 'Assurance contre le vol' },
      { active: true, type: 'Service de rappel d\'entretien' },
      { active: true, type: 'Nettoyage hebdomadaire' },
      { active: true, type: 'Service de diagnostic à distance' },
      { active: true, type: 'Service de remplissage du réservoir' },
      { active: false, type: 'Service de réparation à domicile' },
      { active: false, type: 'Entretien régulier' },
      { active: false, type: 'Recharge d\'hydrogène illimité' }

    ]
  },

  {
    name: 'Prestige Package',
    price: {
      buy: 49999.99,
      leasing: 700
    },
    advantages: [
      { active: true, type: 'Assurance auto complémentaire' },
      { active: true, type: 'Première recharge offerte' },
      { active: true, type: 'Assurance contre le vol' },
      { active: true, type: 'Service de rappel d\'entretien' },
      { active: true, type: 'Nettoyage hebdomadaire' },
      { active: true, type: 'Service de diagnostic à distance' },
      { active: true, type: 'Service de remplissage du réservoir' },
      { active: true, type: 'Service de réparation à domicile' },
      { active: true, type: 'Entretien régulier' },
      { active: true, type: 'Recharge d\'hydrogène illimité' }

    ]
  },
]

function List({ data }) {
  const rows = [];

  data.forEach((elt) => {
    rows.push(
      <>
      <li className="advantage">
        <span class="advantage__checkmark">{elt.active ? '✔' : ''}</span>
        <p class="advantage__text">{elt.type}</p>
      </li>
      </>
    );
  });

  return rows;
}

function Card({ data }) {
  const rows = [];

  data.forEach((elt) => {
    rows.push(
      <>
        <ul class="offer-box">
          <li className="offer-box__header">
            <h3 className="offer-box__name">{elt.name}</h3>
            <p className="offer-box__price">{leasing ? elt.price.leasing : elt.price.buy}</p>
          </li>
          <li className="offer-box__advantages"></li>
          <List data={elt.advantages}/>
          <button class="header__button btn--hero__nav"> Get Started</button>
        </ul>
      </>
    );
  });

  return rows;
}

function Box() {
  return (
    <>
      <div class="box">
        <Card data={packs} />
      </div>
    </>
  )
}

function Toggle() {
  const [leasing, setLeasing] = useState(false);

  let handler = function() {
    setLeasing(!leasing);
  }

  return (
    <label className="switch">
      <input type="checkbox" id='check'/>
      <span className="slider round"></span>
    </label>
  );
}


function Header() {
  return (
    <>
      <div className="offer">
        <div className="offer-section">
          <h2 className="offer-section__title">Prix et option à l'achat</h2>
          <p className="offer-section__description">Découvrez l'avenir de la mobilité avec des prix compétitifs et des
            options d'achat flexibles chez Auto Innovation.</p>
          <Toggle/>
        </div>
      </div>
    </>
  )
}

export default function App() {

  return (
    <>
      <Header />
      <Box />
    </>
  );
}
