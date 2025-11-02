const TEDBackground = ({ backgroundColor = 'rgba(255, 255, 255, 1)' }) => {
  return (
    <div 
      className="absolute inset-0 pointer-events-none"
      style={{
        background: `
          radial-gradient(circle at center, 
            rgba(220, 38, 38, 0.08) 0%, 
            rgba(220, 38, 38, 0.04) 25%,
            ${backgroundColor} 50%,
            ${backgroundColor} 100%
          )
        `,
      }}
    />
  );
};

export default TEDBackground;

