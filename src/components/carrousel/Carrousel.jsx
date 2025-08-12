import './carrousel.styles.css';
import { FaHeart, FaThumbsUp, FaThumbsDown, FaComment, FaShareAlt, } from 'react-icons/fa';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { users } from '../../data/db';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import '../../styles.css';

// import required modules
import { EffectCards } from 'swiper/modules';
import { useRef, useState } from 'react';
import { CarrouselMessages } from './messages/CarrouselMessages';
import { setValueMetric } from '../../analytics/analytics.page';

export const Carrousel = ({ setViewModal }) => {

    const [dataCards, setDataCards] = useState(users);
    const refSlideSwiper = useRef(false);
    const refViewMessages = useRef(false);

    const handleClick = (data) => {
        const { id, opc } = data;

        const dataUpdated = dataCards.map((card) => {

            if (card.id === id) {

                const reactions = card.reactions;
                const currentReaction = reactions[opc];

                setValueMetric(refViewMessages, "counterViewMessages")

                if (currentReaction.status) {
                    currentReaction.status = false;
                    (opc != 'comments') ? currentReaction.count -= 1 : null;
                } else {
                    Object.keys(reactions).forEach((key) => {
                        if (reactions[key].status) {
                            reactions[key].status = false;

                            if (opc != "comments") {
                                reactions[key].count -= 1;
                            }
                        }
                    });

                    currentReaction.status = true;
                    (opc != 'comments') ? currentReaction.count += 1 : null;
                }
            }
            return card;
        });

        setDataCards(dataUpdated);
    };

    return (
        <div className="carrousel">

            <div className="carrousel__content">

                <div className="carrousel__layout">
                    <div className="carrousel__cards">
                        <Swiper
                            effect={'cards'}
                            grabCursor={true}
                            modules={[EffectCards]}
                            className="mySwiper"
                            onSlideChange={() => {
                                gtag('event', 'carrusel_interaccion', {
                                    'event_category': 'carrusel',
                                    'event_label': 'clic_siguiente',
                                    'value': 1
                                });
                                setValueMetric(refSlideSwiper, "counterSlideSwiper");
                            }}
                        >
                            {dataCards?.map((card) => (
                                <SwiperSlide className='swiper__slide'>
                                    <div className="swiper__card">

                                        <div className='swiper__profile'>
                                            <img src={card.profileUrl} alt="photo_perfil" className='swiper__profile-img' />
                                            <p>{card.flagEmoji}</p>
                                            <p className='swiper__name'>{card.name}</p>
                                        </div>

                                        <div className='swiper__data'>

                                            {card.reactions.comments.status ?
                                                <CarrouselMessages
                                                    messages={card.reactions?.comments?.list}
                                                />
                                                :
                                                <>
                                                    <div className='swiper__data-texts'>

                                                        <div className='swiper__share'>
                                                            <p className='swiper__data-tags'>{card.tags}</p>
                                                            <button className='reaction reaction__share' onClick={() => setViewModal(true)}>
                                                                <FaShareAlt />
                                                            </button>
                                                        </div>

                                                        <p className='swiper__data-description'>{card.description}</p>
                                                    </div>

                                                    <div className='swiper__photo'>
                                                        <img src={card.imageURL} alt="photo_up" className='swiper__photo-img' />
                                                    </div>
                                                </>
                                            }

                                            <div className='swiper__reactions'>

                                                <button className={`reaction ${card.reactions.love.status ? 'reaction__love-on' : 'reaction__of '}`}
                                                    onClick={() => handleClick({ id: card.id, opc: 'love' })}>
                                                    <FaHeart />
                                                    <p>{card.reactions.love.count}</p>
                                                </button>

                                                <button className={`reaction ${card.reactions.like.status ? 'reaction__like-on' : 'reaction__of '}`}
                                                    onClick={() => handleClick({ id: card.id, opc: 'like' })}>
                                                    <FaThumbsUp />
                                                    <p>{card.reactions.like.count}</p>
                                                </button>

                                                <button className={`reaction ${card.reactions.comments.status ? 'reaction__comment-on' : 'reaction__of '}`}
                                                    onClick={() => handleClick({ id: card.id, opc: 'comments' })}>
                                                    <FaComment />
                                                    <p>{card.reactions.comments.list.length}</p>
                                                </button>

                                                <button className={`reaction ${card.reactions.dislike.status ? 'reaction__dislike-on' : 'reaction__of '}`}
                                                    onClick={() => handleClick({ id: card.id, opc: 'dislike' })}
                                                >
                                                    <FaThumbsDown />
                                                    <p>{card.reactions.dislike.count}</p>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div className="carrousel__description">
                        <h1 className="carrousel__title">
                            ¡Vive la experiencia Clothesure!
                        </h1>
                        <p className='carrousel__text'>¡Explora cada tarjeta y déjate sorprender! Descubre
                            cómo otras personas viven la moda en distintos eventos.
                            Inspírate, conecta y encuentra tu estilo ideal en solo unos swipes.
                        </p>

                        <div className='carrousel__arrow' >
                            <img src="./arrow.webp" alt="arrow.webp" className='carrousel__arrow-img' />
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
}