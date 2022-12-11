import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [step, setStep] = useState(1);
  const [progressCheck, setProgressCheck] = useState(0);
  let sharedState = {
    step,
    setStep,
    progressCheck,
    setProgressCheck,
  };

  return (
    <AppContext.Provider value={sharedState}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
