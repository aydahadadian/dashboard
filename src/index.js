import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from "react-i18next";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    
    supportedLngs: ['en', 'fa'],
    fallbackLng: "en",
    debug: false,
    
    detection : {
      order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/assets/langs/{{lng}}/translation.json',
    },
    react: {
      useSuspense: false
    },
  
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<ThemeProvider theme={theme} >

<App />
</ThemeProvider>
  

);


