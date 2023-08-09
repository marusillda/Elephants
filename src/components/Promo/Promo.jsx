import './Promo.css';
import {useMousePosition} from '../../hooks/useMousePosition';
import Rain from '../../components/Rain/Rain';

export default function Promo() {
  useMousePosition();

  return (
    <>
      <div className="logo"></div>
      <section className="promo-layers">
        <div className="promo-layers__container">
          <div className="promo-layers__item promo-layers__item_layer-1"></div>
          <div className="promo-layers__item promo-layers__item_layer-2"></div>
          <div className="promo-layers__item promo-layers__item_layer-3">
            <div className="hero-content">
              <h1>
                Elephants
                <span>О слонах</span>
              </h1>
              <div className="hero-content__description">What about elephants?</div>
              <button className="button-start">Узнать больше</button>
            </div>
          </div>
          <div className="promo-layers__item promo-layers__item_layer-4">
            <Rain/>
          </div>
          <div className="promo-layers__item promo-layers__item_layer-5"></div>
          <div className="promo-layers__item promo-layers__item_layer-6"></div>
        </div>
      </section>
      <div style={{height: '100vh'}}></div>
    </>
  );
}