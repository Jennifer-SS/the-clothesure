import './benefits.styles.css';

export const Benefits = () => {

  // const [particles, setParticles] = useState([]);

  // useEffect(() => {
  //   const newParticles = Array.from({ length: 30 }).map((_, i) => ({
  //     id: i,
  //     size: Math.random() * 20 + 10,
  //     left: Math.random() * 100,
  //     delay: Math.random() * 15,
  //     duration: Math.random() * 15 + 10,
  //     opacity: Math.random() * 0.4 + 0.3
  //   }));
  //   setParticles(newParticles);
  // }, []);

  const benefits = [
    {
      title: 'Inspírate con looks reales',
      description: 'Descubre outfits auténticos para cada tipo de evento social importante.',
      icon: '👗'
    },
    {
      title: 'Participa activamente',
      description: 'Vota y comenta los outfits de otros usuarios para compartir tu estilo.',
      icon: '💬'
    },
    {
      title: 'Desbloquea insignias',
      description: 'Gana reconocimientos exclusivos por tu participación en la comunidad.',
      icon: '🏆'
    },
    {
      title: 'Outfits destacados',
      description: 'Accede a la selección semanal de los looks mejor valorados.',
      icon: '✨'
    }
  ];

  return (
    <div className="s3-container">
      {/* Partículas visibles
      {particles.map(particle => (
        <div
          key={particle.id}
          className="particle"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            top: `-${particle.size}px`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            opacity: particle.opacity
          }}
        />
      ))} */}

      <div className="s3-content">
        <h2 className="s3-title">Beneficios con Estilo</h2>

        <div className="benefits-container">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon">{benefit.icon}</div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
            </div>
          ))}
        </div>

        <p className="s3-slogan">Tu opinión construye las tendencias del mañana</p>
      </div>
      {/* <div style={{ height: '150px', overflow: 'hidden' }} className="hero__wave">
        <svg viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: '100%', width: '110%' }}>
          <path d="M-36.34,-49.69 C82.16,167.80 330.47,-104.81 531.94,58.56 L500.00,149.60 L0.00,149.60 Z"
            style={{ stroke: 'none', fill: '#ffffffff' }}></path></svg>
      </div> */}
    </div>
  );
};