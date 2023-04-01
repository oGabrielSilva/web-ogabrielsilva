import { AppContext } from '@/context/AppContext';
import { Tooltip } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import CardsContainer from './CardsContainer';

export default function Main() {
  const { strings, dimensions, setCardsEvent } = useContext(AppContext);

  return (
    <main>
      <div
        style={{
          display: 'flex',
          justifyContent: dimensions.h < 1000 ? 'space-around' : 'center',
          alignItems: 'center',
          flexDirection: 'column',
          padding: '2rem 1rem',
          textAlign: 'center',
          minHeight: 'calc(100vh - 100px)',
          marginTop: 100,
        }}
      >
        <div>
          <Tooltip
            style={{ width: 'auto' }}
            rounded
            color="invert"
            content="Gabriel Henrique da Silva"
          >
            <Image
              src="/profile.jpg"
              alt="Gabriel"
              width={dimensions.h < 1000 ? 200 : 350}
              height={dimensions.h < 1000 ? 200 : 350}
              style={{
                borderRadius: '100%',
                objectFit: 'cover',
                border: 'var(--border-radius) solid var(--variant)',
              }}
              draggable="false"
              priority
            />
          </Tooltip>
          <h2 style={{ fontWeight: 400 }}>{strings.helloThere}</h2>
          <h1>
            {strings.iAm}{' '}
            <Link
              target="_blank"
              href="https://www.mongodb.com/languages/full-stack-development"
            >
              <Tooltip color="invert" content={strings.fullstackResume}>
                <span
                  className="hover-b"
                  style={{ color: 'var(--text-variant)' }}
                >
                  {strings.fullstack}
                </span>
              </Tooltip>
            </Link>
          </h1>
          <p
            style={{
              width: '100%',
              maxWidth: dimensions.h < 1500 ? 450 : 1000,
            }}
          >
            {strings.resume}
          </p>
        </div>
        <button
          onClick={() => setCardsEvent((e) => (e === 'OFF' ? 'ON' : 'OFF'))}
          className="hover-b"
          style={{
            marginTop: '2rem',
            padding: '0.5rem 1rem',
            borderRadius: 'var(--border-radius)',
            background: 'var(--bg)',
            border: '3px solid var(--text-variant)',
            cursor: 'pointer',
            transition: '0.1s ease-in-out',
            fontSize: 'inherit',
          }}
        >
          {strings.about}
        </button>
      </div>
      <CardsContainer />
    </main>
  );
}
