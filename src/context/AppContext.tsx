import Strings from '@/resources/Strings';
import { createContext, useCallback, useEffect, useState } from 'react';

interface AppContextProviderProps {
  children: JSX.Element;
}

type TypeCurrentCard = 'P' | 'S' | 'C';
type TypeCardEvent = 'ON' | 'OFF';
type TypeCardEventFn = (current: TypeCardEvent) => TypeCardEvent;
type TypeCurrentCardFn = (current: TypeCurrentCard) => TypeCurrentCard;

interface InterfaceAppContext {
  strings: typeof Strings.VALUES.br;
  dimensions: { w: number; h: number };
  cardsEvent: TypeCardEvent;
  currentCard: TypeCurrentCard;
  setCurrentCard: (event: TypeCurrentCard | TypeCurrentCardFn) => void;
  setCardsEvent: (event: TypeCardEvent | TypeCardEventFn) => void;
  changeDefaultLang: (lang: 'br' | 'en') => void;
}

export const AppContext = createContext<InterfaceAppContext>(
  {} as InterfaceAppContext
);

export default function AppContextProvider({
  children,
}: AppContextProviderProps) {
  const [strings, setStrings] = useState(Strings.get('br'));
  const [dimensions, setDimensions] = useState({ w: 0, h: 0 });
  const [cardsEvent, setCardsEvent] = useState<TypeCardEvent>('OFF');
  const [currentCard, setCurrentCard] = useState<TypeCurrentCard>('P');

  const changeDefaultLang = useCallback((lang: 'br' | 'en') => {
    const current = Strings.updateStrings(lang);
    setStrings(current);
  }, []);

  useEffect(() => setStrings(Strings.get()), []);

  useEffect(() => {
    const handleResize = () =>
      setDimensions({ h: window.innerHeight, w: window.innerWidth });
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <AppContext.Provider
      value={{
        strings,
        dimensions,
        cardsEvent,
        currentCard,
        setCurrentCard,
        setCardsEvent,
        changeDefaultLang,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
