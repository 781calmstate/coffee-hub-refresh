import { useState } from 'react';

import telegramLogo from '@assets/icons/telegram.svg';

function App() {
  const [] = useState();
  return (
    <div className="w-full h-dvh flex items-center justify-center">
      <img src={telegramLogo} alt="telegram logo" className="w-32 h-32" />
    </div>
  );
}

export default App;
