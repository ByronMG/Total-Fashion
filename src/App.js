import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';


function App() {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    const fetchHtmlContent = async () => {
      try {
        const response = await fetch('/index.html'); // Ruta relativa a la raíz del servidor
        const html = await response.text();
        setHtmlContent(html);
      } catch (error) {
        console.error('Error al cargar el archivo HTML:', error);
      }
    };

    fetchHtmlContent();
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}

export default App;