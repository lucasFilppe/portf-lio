// ./app/components/DeviceFrame.jsx (ou onde quer que você o tenha criado)

import React from 'react';
import Image from 'next/image';

const DeviceFrame = ({ title, url, screenshot, width = 280, height = 560 }) => {
  return (
    <div className="flex flex-col items-center mb-8">
      <h3 className="mb-2 font-semibold text-xl">{title}</h3>
      
      {/* Container que simula o frame do celular */}
      <div 
        // Note: Aumentei um pouco o tamanho para compensar a borda (10px de cada lado = 20px)
        className="relative border-[10px] border-black bg-white rounded-[40px] shadow-2xl overflow-hidden p-0"
        style={{ width: `${width + 20}px`, height: `${height + 20}px` }} 
      >
        {/* Simulação da "câmera" no topo (notch) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-2 bg-black rounded-b-lg z-10"></div>
        
        {/* 🚨 O ELEMENTO CHAVE: O iFrame com o projeto real 🚨 */}
        <iframe
          src={url}
          title={`Interação com ${title}`}
          className="w-full h-full border-0"
          style={{ width: `${width}px`, height: `${height}px` }}
        >
          {/* Fallback (opcional): Exibe a imagem estática se o iframe falhar no navegador */}
          {screenshot && (
              <Image src={screenshot} alt={`Screenshot de ${title}`} width={width} height={height} />
          )}
          
          Seu navegador não suporta iframes.
        </iframe>
      </div>

      {/* Opção para abrir em tela cheia (link direto) */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
      >
        Abrir projeto em {title} (Tela Cheia)
      </a>
    </div>
  );
};

export default DeviceFrame;