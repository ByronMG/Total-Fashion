import './App.css';
import React, { useEffect, useState } from 'react';
import PayPalButtonCustom from './PaypalButton.js';
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
      <div dangerouslySetInnerHTML={{ __html: htmlContent }}/>
  );
}

function Carrito() {

  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    const fetchHtmlContent = async () => {
      try {
        const response = await fetch('/carrito.html'); // Ruta relativa a la raíz del servidor
        const html = await response.text();
        setHtmlContent(html);
      } catch (error) {
        console.error('Error al cargar el archivo HTML:', error);
      }
    };

    fetchHtmlContent();
  }, []);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }}/>
      <div>
        <PayPalButtonCustom totalValue={"100.9"} invoice={"Taza de Café"} />
      </div>
    </div>
  );
}

function Pasarela(){
  return (
    <div>
    </div>
  )
}
export { App, Carrito, Pasarela };
