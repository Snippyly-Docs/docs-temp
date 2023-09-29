import '../global.scss';
import '../theme.scss';
import '../public/fonts/poppins.scss';
import '../public/fonts/firacode.scss';
import { AppProps } from 'next/app';
import GlobalContext from '../components/globalContext';
import { useState, useEffect } from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { initSuperflow } from '@usesuperflow/client'


function MyApp({ Component, pageProps }: AppProps) {

  const [frontendOption, setFrontendOption] = useState(null);
  const [variantSuggestion, setVariantSuggestion] = useState(null);
  const [variantMap, setVariantMap] = useState<Record<string, string>>({});
  const [activeHeader, setActiveHeader] = useState(null);
  const [darkMode, setDarkMode] = useState(true);

  const handleThemeChange = (e) => {

    if (e.matches) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  };

  useEffect(() => {
    if (frontendOption === null) {
      const cachedFrontendOption = sessionStorage.getItem('frontendOption');
      if (cachedFrontendOption) {
        setFrontendOption(cachedFrontendOption);
        return;
      }
    } else {
      sessionStorage.setItem('frontendOption', frontendOption);
    }
  }, [frontendOption]);

  useEffect(() => {
    const rootElement = document.documentElement;
    if (!rootElement) return;
    if (darkMode === null) return;

    if (darkMode) {
      localStorage.setItem('darkMode', 'true');
      rootElement.setAttribute('dark', '');
    } else {
      localStorage.setItem('darkMode', 'false')
      rootElement.removeAttribute('dark');
    }

  }, [darkMode]);

  useEffect(() => {
    initSuperflow('CGyvhBPvTHD1D5WkqqeH');
    const _darkMode = localStorage.getItem('darkMode');

    if (_darkMode === 'true') {
      setDarkMode(true);
    } else if (_darkMode === 'false') {
      setDarkMode(false);
    } else if (_darkMode === null) {
      const query = window.matchMedia('(prefers-color-scheme: dark)');
      setDarkMode(query.matches);
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleThemeChange);
    }

    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handleThemeChange);
    };
  }, []);

  return (
    <GlobalContext.Provider value={{ variantMap, setVariantMap, variantSuggestion, setVariantSuggestion, setDarkMode, darkMode, frontendOption, setFrontendOption, activeHeader, setActiveHeader }}>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;