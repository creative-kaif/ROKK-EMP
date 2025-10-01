import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import i18n from './utils/i18n.js'; // import instance, not just init

function Root() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function initLanguage() {
      try {
        const res = await fetch('https://api.rokk.app/api/v1/language');
        const data = await res.json();

        if (data?.main_language) {
          await i18n.changeLanguage(data.main_language);
        }
      } catch (err) {
        console.error('Failed to fetch language, fallback to default EN', err);
      } finally {
        setLoading(false);
      }
    }

    initLanguage();
  }, []);

  if (loading) {
    // you can customize this loader however you want
    return (
      <div className="flex items-center justify-center h-screen text-white text-lg">
        Loading…
      </div>
    );
  }

  return <App />;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
