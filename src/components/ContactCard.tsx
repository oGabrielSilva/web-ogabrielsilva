import { AppContext } from '@/context/AppContext';
import { useContext, useEffect, useRef } from 'react';

export default function ContactCard() {
  const { currentCard, strings, setCardsEvent } = useContext(AppContext);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const otherContactRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!!cardRef.current) {
      const { current } = cardRef;
      if (currentCard !== 'C') {
        current.style.transform = 'translateX(-100vw)';
        setTimeout(() => {
          current.style.display = 'none';
        }, 400);
      } else {
        setTimeout(() => {
          current.style.display = '';
        }, 400);
        setTimeout(() => {
          current.style.transform = 'translateX(0)';
        }, 500);
      }
    }
  }, [currentCard]);

  return (
    <div ref={cardRef} className="c-card">
      <h2>{strings.contact}</h2>
      <p style={{ padding: '0 1rem' }}>
        <small>{strings.formContactExtra}</small>
      </p>
      <form
        className="form"
        style={{ width: '100%', padding: '1rem' }}
        acceptCharset="utf-8"
        onSubmit={(e) => {
          e.preventDefault();
          if (
            !nameRef.current ||
            !emailRef.current ||
            !otherContactRef.current ||
            !messageRef.current
          )
            return;
          const name = nameRef.current.value;
          const email = emailRef.current.value;
          const otherContact = otherContactRef.current.value;
          const message = messageRef.current.textContent;

          fetch('/api/mail', {
            method: 'POST',
            body: JSON.stringify({ name, email, otherContact, message }),
            headers: { 'Content-type': 'application/json' },
          });
          setCardsEvent('OFF');
        }}
      >
        <label htmlFor="name">{strings.name}:</label>
        <input ref={nameRef} type="text" id="name" />
        <label htmlFor="email">{strings.email}:</label>
        <input ref={emailRef} type="email" id="email" />
        <label htmlFor="other-contact">{strings.otherContact}:</label>
        <input ref={otherContactRef} type="text" id="other-contact" />
        <label
          onClick={(e) => {
            if (e.currentTarget.parentElement?.querySelector('.textarea'))
              (
                e.currentTarget.parentElement.querySelector(
                  '.textarea'
                ) as HTMLDivElement
              )?.focus();
          }}
          htmlFor="message"
        >
          {strings.message}:
        </label>
        <div
          ref={messageRef}
          style={{ minHeight: 'calc(4em + 2rem)' }}
          contentEditable
          className="textarea"
          id="message"
        ></div>
        <button
          type="submit"
          className="hover-b"
          style={{
            background: 'var(--bg)',
            padding: '0.5rem 1.5rem',
            border: '1px solid var(--variant)',
            borderRadius: 'var(--border-radius)',
            cursor: 'pointer',
          }}
        >
          <i className="bi bi-send"></i>
        </button>
      </form>
    </div>
  );
}
