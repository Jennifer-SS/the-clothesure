import './carrousel.messages.styles.css';

export const CarrouselMessages = ({ messages }) => {
    return (
        <>
            <div className="messages">

                <p className="messages__title">Comentarios</p>

                <div className="messages__list">
                    {messages?.map((message) => (

                        <div key={message.id} className="message__list--item">

                            <div className="item__user">

                                <img className="item__user--photo" src={message.photoUrl} alt="user_photo.webp" />

                                <div>
                                    <p className="item__user--name">{message.user}</p>
                                    <p className="item__user--text">{message.text}</p>
                                </div>
                            </div>


                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}