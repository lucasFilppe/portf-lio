// Exemplo em JSX/React (como você está usando no Next.js)

// Exemplo em JSX/React

const ExemploInterativo = () => {
  return (
    <div style={{ 
        width: '350px', 
        height: '500px', 
        margin: '20px auto', 
        border: '10px solid black', 
        borderRadius: '20px', 
        overflow: 'hidden', 
        boxShadow: '0 4px 15px rgba(0,0,0,0.4)'
    }}>
      <iframe
    // Exemplo de um Pen famoso de carregamento
    src="https://codepen.io/chrisgannon/embed/jZzGvW?default-tab=result&theme-id=light" 
    width="100%" 
    height="100%"
    frameBorder="0" 
    allowFullScreen={true}
    title="Exemplo de animação pública do CodePen"
>
    Seu navegador não suporta iframes.
</iframe>
    </div>
  );
}

export default ExemploInterativo;