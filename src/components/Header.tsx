import { AppContext } from '@/context/AppContext';
import { Tooltip } from '@nextui-org/react';
import Link from 'next/link';
import { useContext } from 'react';

export default function Header() {
  const { dimensions } = useContext(AppContext);

  return (
    <header
      style={{
        textAlign: 'center',
        borderBottom: '3px solid var(--variant)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: dimensions.h < 1000 ? '100px' : '200px',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        background: 'var(--bg)',
        zIndex: 99,
      }}
    >
      <Link
        href="https://github.com/oGabrielSilva"
        target="_blank"
        draggable="false"
      >
        <Tooltip placement="bottom" content="GitHub" color="invert">
          <h1>Gabriel</h1>
        </Tooltip>
      </Link>
    </header>
  );
}
