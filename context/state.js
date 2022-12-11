import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [step, setStep] = useState(1);
  const [progressCheck, setProgressCheck] = useState(0);
  const [bigCheckIndex, setBigCheckIndex] = useState(null);
  let sharedState = {
    step,
    setStep,
    progressCheck,
    setProgressCheck,
    bigCheckIndex,
    setBigCheckIndex,
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
