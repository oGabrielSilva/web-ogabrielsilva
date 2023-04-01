import { AppContext } from '@/context/AppContext';
import { CSSProperties } from '@nextui-org/react/types/theme';
import { useContext, useEffect, useRef } from 'react';
import ContactCard from './ContactCard';
import ProfileCard from './ProfileCard';
import ServicesCard from './ServicesCard';

const btnStyle: CSSProperties = {
  padding: '0.5rem 0',
  cursor: 'pointer',
  borderRadius: 'var(--border-radius)',
  background: 'var(--bg)',
};

export default function CardsContainer() {
  const { cardsEvent, setCardsEvent, strings, currentCard, setCurrentCard } =
    useContext(AppContext);
  const cardContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardContainerRef.current !== null) {
      const current = cardContainerRef.current;
      if (cardsEvent === 'ON') {
        current.style.transform = 'translateY(0)';
        setTimeout(
          () => (current.style.background = 'rgba(0, 0, 0, 0.7)'),
          400
        );
      } else {
        current.style.transform = 'translateY(-100vh)';
        setTimeout(() => (current.style.background = ''), 400);
      }
    }
  }, [cardsEvent]);

  return (
    <div
      onClick={(e) =>
        (e.target as HTMLDivElement).id === 'cards-container'
          ? setCardsEvent('OFF')
          : void 0
      }
      ref={cardContainerRef}
      id="cards-container"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        flexDirection: 'column',
        top: 0,
        left: 0,
        height: '100vh',
        width: '100vw',
        zIndex: 100,
        transition: '.5s ease',
        padding: '1rem 0',
      }}
      className={cardsEvent === 'ON' ? 'container-on' : 'container-off'}
    >
      <button></button>
      <div
        style={{
          width: '90vw',
          maxWidth: 700,
          background: 'var(--bg)',
          border: '1px solid var(--variant)',
          borderRadius: 'var(--border-radius)',
          marginBottom: '0.5rem',
          boxShadow: '0px 0px 5px var(--variant)',
          transition: '0.4s ease-in',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
          }}
        >
          <button
            onClick={() => setCurrentCard('P')}
            className="hover-b"
            style={{
              ...btnStyle,
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              ...(currentCard === 'P'
                ? { filter: 'brightness(2)', cursor: 'default' }
                : {}),
            }}
          >
            {strings.profile}
          </button>
          <button
            onClick={() => setCurrentCard('S')}
            className="hover-b"
            style={{
              ...btnStyle,
              borderRadius: 0,
              ...(currentCard === 'S'
                ? { filter: 'brightness(2)', cursor: 'default' }
                : {}),
            }}
          >
            {strings.services}
          </button>
          <button
            onClick={() => setCurrentCard('C')}
            className="hover-b"
            style={{
              ...btnStyle,
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              ...(currentCard === 'C'
                ? { filter: 'brightness(2)', cursor: 'default' }
                : {}),
            }}
          >
            {strings.contact}
          </button>
        </div>
      </div>
      <ProfileCard />
      <ServicesCard />
      <ContactCard />
    </div>
  );
}
