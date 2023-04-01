import SkillBar from './SkillBar';
import { Tooltip } from '@nextui-org/react';

interface InterfaceSkillProps {
  percent: number;
  skillName: string;
  helpContent: string;
}

export default function Skill({
  percent,
  skillName,
  helpContent,
}: InterfaceSkillProps) {
  return (
    <div style={{ marginTop: '0.5rem' }}>
      <div
        style={{
          marginBottom: '0.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0 0.5rem',
        }}
      >
        <span>{skillName}</span>
        <Tooltip color="invert" content={helpContent} placement="left">
          <i
            style={{ cursor: 'pointer' }}
            className="bi bi-info-circle hover-b"
          ></i>
        </Tooltip>
      </div>
      <SkillBar percent={percent} />
    </div>
  );
}
