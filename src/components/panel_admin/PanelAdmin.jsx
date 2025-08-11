import { useEffect, useState } from 'react';
import { Graph } from './graph/Graph';
import { initLocalStorage } from '../../analytics/analytics.page'
import './panel_admin.styles.css';
import { GraphChannel } from './graph/GraphChannel ';

export const PanelAdmin = () => {

    const [metrics, setMetrics] = useState({});

    useEffect(() => {
        setMetrics(initLocalStorage());
        // console.log(metrics);
    }, []);

    return (
        <>
            <div className="panel">

                <div className="panel__container">
                    <h1 className='panel__brand'>The Clothesure</h1>

                    <div className='panel__data panel__data--visits'>
                        <h2 className='panel__data--title'>Métricas del sitio</h2>

                        <div className='panel__data--content'>

                            <div className='panel__graph--counters'>
                                <div className='panel__data--graph'>
                                    <Graph metrics={metrics} />
                                </div>

                                <div className='panel__data--info'>

                                    <p className='panel__data--text'>Datos Recopilados</p>

                                    <div className='panel__data--list'>
                                        <div className='item'>
                                            <svg className='item__circle' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                                <path fill="#e23f58" d="M64 320C64 178.6 178.6 64 320 64C461.4 64 
                                            576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320z" />
                                            </svg>
                                            <p>Visitas totales: {metrics.counterVisits}</p>
                                        </div>

                                        <div className='item'>
                                            <svg className='item__circle' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                                <path fill="#F59153" d="M64 320C64 178.6 178.6 64 320 64C461.4 64 
                                            576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320z" />
                                            </svg>
                                            <p>Vistas al final de la página: {metrics.counterViewEndPage}</p>
                                        </div>

                                        <div className='item'>
                                            <svg className='item__circle' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                                <path fill="#FFCE56" d="M64 320C64 178.6 178.6 64 320 64C461.4 64 
                                            576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320z" />
                                            </svg>
                                            <p>Interacciones con el swiper: {metrics.counterSlideSwiper}</p>
                                        </div>

                                        <div className='item'>
                                            <svg className='item__circle' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                                <path fill="#3BAEB0" d="M64 320C64 178.6 178.6 64 320 64C461.4 64 
                                            576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320z" />
                                            </svg>
                                            <p>Interacciones con los mensajes: {metrics.counterViewMessages}</p>
                                        </div>

                                        <div className='item'>
                                            <svg className='item__circle' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                                <path fill="#62e23fff" d="M64 320C64 178.6 178.6 64 320 64C461.4 64 
                                            576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320z" />
                                            </svg>
                                            <p>Usuarios registrados: {metrics.counterEmailSent}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='panel__data panel__data--channels'>

                        <h2 className='panel__data--title'>Canales de procedencia</h2>

                        <div className='panel__data--content'>

                            <div className='panel__graph--channels'>

                                <div className='panel__data--graph'>
                                    {metrics.channels && <GraphChannel channels={metrics.channels} />}
                                </div>

                                <div className='panel__data--info'>

                                    <p className='panel__data--text'>Datos Recopilados</p>

                                    <div className='panel__data--list'>
                                        <div className='item'>
                                            <svg className='item__circle' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                                <path fill="#003869ff" d="M64 320C64 178.6 178.6 64 320 64C461.4 64 
                                            576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320z" />
                                            </svg>
                                            <p>Facebook: {metrics.channels?.facebook}</p>
                                        </div>

                                        <div className='item'>
                                            <svg className='item__circle' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                                <path fill="#920088ff" d="M64 320C64 178.6 178.6 64 320 64C461.4 64 
                                            576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320z" />
                                            </svg>
                                            <p>Instagram: {metrics.channels?.instagram}</p>
                                        </div>

                                        <div className='item'>
                                            <svg className='item__circle' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                                <path fill="#ac0000ff" d="M64 320C64 178.6 178.6 64 320 64C461.4 64 
                                            576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320z" />
                                            </svg>
                                            <p>Youtube: {metrics.channels?.youTube}</p>
                                        </div>

                                        <div className='item'>
                                            <svg className='item__circle' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                                <path fill="#ac8e34ff" d="M64 320C64 178.6 178.6 64 320 64C461.4 64 
                                            576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320z" />
                                            </svg>
                                            <p>TikTok: {metrics.channels?.tikTok}</p>
                                        </div>

                                        <div className='item'>
                                            <svg className='item__circle' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                                <path fill="#651634ff" d="M64 320C64 178.6 178.6 64 320 64C461.4 64 
                                            576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320z" />
                                            </svg>
                                            <p>Pinterest: {metrics.channels?.pinterest}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
}