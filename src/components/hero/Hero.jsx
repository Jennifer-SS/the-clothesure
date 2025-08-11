import { useEffect, useRef } from 'react';
import './hero.styles.css';
import { setValueMetric } from '../../analytics/analytics.page';

export const Hero = () => {

    const refClickButtonHero = useRef(false);

    return (
        <>
            <div className="hero">
                <div className="hero__container">
                    <header className="hero__logo">
                        <p className="hero__logo__title">The Clothesure</p>
                    </header>

                    <div className="hero__content">
                        <div className="hero__texts">
                            <h1 className="hero__title">¿Sin ideas para tu próximo look?</h1>

                            <p className="hero__slogan">
                                La red social donde los outfits hablarán según tu evento
                            </p>

                            <p className="hero__description">
                                Comparte tu estilo, descubre nuevos looks y vota por los outfits que mejor encajan con cada ocasión. Únete a la comunidad que viste con propósito.
                            </p>

                            <a
                                href='#demo'
                                className="hero__btn"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setValueMetric(refClickButtonHero, 'counterClickButtonHero');
                                    const element = document.getElementById("demo");
                                    if (element) {
                                        element.scrollIntoView({ behavior: "smooth" });
                                    }
                                }}
                            >Echa un vistazo</a>
                        </div>
                    </div>
                </div>

                <div style={{ height: '150px', overflow: 'hidden' }} className="hero__wave"><svg
                    viewBox="0 0 500 150" preserveAspectRatio="none"
                    style={{ height: '100%', width: ' 100%' }}>
                    <path d="M-9.82,11.31 C150.00,149.60 349.20,-49.85 500.00,49.85 L522.35,200.28 L-31.26,177.65 Z"
                        style={{ stroke: 'none', fill: ' #000' }}></path></svg></div>

            </div>
        </>
    );
}