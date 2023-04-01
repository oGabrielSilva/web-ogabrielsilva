import { AppContext } from '@/context/AppContext';
import { useContext, useEffect, useRef } from 'react';

export default function Footer() {
  const { strings, changeDefaultLang } = useContext(AppContext);

  const optBRRef = useRef<HTMLOptionElement>(null);
  const optENRef = useRef<HTMLOptionElement>(null);

  useEffect(() => {
    if (optBRRef.current && optENRef.current) {
      optENRef.current.selected = strings.lang === 'en';
      optBRRef.current.selected = strings.lang !== 'en';
    }
  }, [strings]);

  return (
    <footer
      style={{
        padding: '1rem',
        borderTop: '1px solid var(--variant)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <select
        style={{ background: 'var(--bg)' }}
        onChange={(e) =>
          changeDefaultLang(e.currentTarget.value === 'en' ? 'en' : 'br')
        }
      >
        <option ref={optBRRef} value="br">
          Português (Brasil)
        </option>
        <option ref={optENRef} value="en">
          English
        </option>
      </select>
      <address>
        <small>&copy; 2023 Gabriel Henrique da Silva. {strings.copy}</small>
      </address>
    </footer>
  );
}
