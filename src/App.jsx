// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'


import React from 'react';
import RubitcubeLanding from './components/RubitcubeLanding';
import useScrollSpy from './useScrollSpy'; 


export default function App() {
  useScrollSpy({ threshold: 0.6 });
  return <RubitcubeLanding />;
}



