import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Import du favicon pour qu'il soit inclus dans le bundle
import favicon from '../assets/images/logo_img.jpg';

// Définir le favicon dynamiquement
const link = document.createElement('link');
link.rel = 'icon';
link.type = 'image/jpeg';
link.href = favicon;
document.head.appendChild(link);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
