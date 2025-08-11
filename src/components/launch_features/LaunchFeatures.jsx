import './launch_features.styles.css';

export const LaunchFeatures = ({ setViewModal }) => {
  const features = [
    {
      icon: '👤',
      title: 'Crea tu perfil',
      description: 'Comparte tus propios outfits y construye tu identidad de estilo.'
    },
    {
      icon: '💬',
      title: 'Recibe feedback real',
      description: 'Opiniones honestas de una comunidad apasionada por la moda.'
    },
    {
      icon: '🏅',
      title: 'Sube en los rankings',
      description: 'Gana visibilidad y reconocimiento por tus looks más votados.'
    },
    {
      icon: '🛠️',
      title: 'Herramientas de estilo',
      description: 'Planifica tus outfits, guarda favoritos y define tu estilo único.'
    }
  ];

  return (
    <div className="s4-container">
      <div className="s4-content">
        <h2 className="s4-title">Lo que estamos por lanzar</h2>
        <p className="s4-subtitle">
          Ésta es tu oportunidad de formar parte de algo nuevo desde el inicio.
        </p>

        <div className="features-container">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>

        <p className="s4-slogan">¿Qué me pongo para esta ocasión? Aquí lo sabrás.</p>

        <div className='content-bell'>
          <button
            className='register-btn'
            onClick={() => setViewModal(true)}
          > Notificarme el lanzamiento
            <svg className='register-icon-bell' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
              <path fill="#F59153" d="M320 64C302.3 64 288 78.3 288 96L288 99.2C215 114 160 178.6 
            60 256L160 277.7C160 325.8 143.6 372.5 113.6 410.1L103.8 422.3C98.7 428.6 96 436.4 96 444.5C96 
            464.1 111.9 480 131.5 480L508.4 480C528 480 543.9 464.1 543.9 444.5C543.9 436.4 541.2 428.6 536.1 
            422.3L526.3 410.1C496.4 372.5 480 325.8 480 277.7L480 256C480 178.6 425 114 352 99.2L352 96C352 78.3 337.7
             64 320 64zM258 528C265.1 555.6 290.2 576 320 576C349.8 576 374.9 555.6 382 528L258 528z" />
            </svg>
          </button>

        </div>

      </div>
    </div>
  );
};