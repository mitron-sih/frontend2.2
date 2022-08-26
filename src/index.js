import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import { Accessibility } from 'accessibility/dist/accessibility';

window.addEventListener('load', function() { new Accessibility(); }, false);
localStorage.clear();
var labels = {
  resetTitle: true,
  closeTitle: true,
  menuTitle: 'title',
  increaseText: 'increase text size',
  decreaseText: 'decrease text size',
  increaseTextSpacing: false,
  decreaseTextSpacing: false,
  invertColors: false,
  grayHues: false,
  underlineLinks: 'underline links',
  bigCursor: 'big cursor',
  readingGuide: 'reading guide',
  textToSpeech: 'text to speech',
  speechToText: false,     
  disableAnimations: false,
  textPixelMode: true
 };

var options = { labels: labels };

options.Modules = {
  increaseText: true,
  decreaseText: true,
  invertColors: false,
  increaseTextSpacing: false,
  decreaseTextSpacing: false,
  grayHues: true,
  underlineLinks: true,
  bigCursor: true,
  readingGuide: true,
  textToSpeech: true,
  speechToText: false,     
  disableAnimations: false
};

options.textToSpeechLang = 'ta';
new Accessibility(options);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
