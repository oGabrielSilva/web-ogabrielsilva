import { AppContext } from '@/context/AppContext';
import { useContext, useEffect, useRef } from 'react';
import Skill from './Skill';

export default function ServicesCard() {
  const { currentCard, strings } = useContext(AppContext);

  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!!cardRef.current) {
      const { current } = cardRef;
      if (currentCard !== 'S') {
        current.style.transform = 'translateY(-100vh)';
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
      <div>
        <h2>Frontend</h2>
        <Skill
          skillName={strings.javascript}
          helpContent={strings.javascriptHelp}
          percent={100}
        />
        <Skill
          skillName={strings.react}
          helpContent={strings.reactHelp}
          percent={95}
        />
        <Skill
          skillName={strings.typescript}
          helpContent={strings.typescriptHelp}
          percent={93}
        />
        <Skill
          skillName={strings.webpack}
          helpContent={strings.webpackHelp}
          percent={88}
        />
        <Skill
          skillName={strings.css}
          helpContent={strings.cssHelp}
          percent={75}
        />
        <h2 style={{ marginTop: '1rem' }}>{strings.backend}</h2>
        <Skill
          skillName={strings.nodejs}
          helpContent={strings.nodejsHelp}
          percent={100}
        />
        <Skill
          skillName={strings.express}
          helpContent={strings.expressHelp}
          percent={99}
        />
        <Skill
          skillName={strings.nextjs}
          helpContent={strings.nextjsHelp}
          percent={96}
        />
        <Skill
          skillName={strings.prisma}
          helpContent={strings.prismaHelp}
          percent={88}
        />
        <Skill
          skillName={strings.websocket}
          helpContent={strings.websocketHelp}
          percent={70}
        />
      </div>
    </div>
  );
}
