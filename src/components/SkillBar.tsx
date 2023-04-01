interface InterfaceSkillBarProps {
  percent: number;
}

export default function SkillBar({ percent }: InterfaceSkillBarProps) {
  return (
    <div
      style={{
        width: '100%',
        background: 'var(--bg)',
        position: 'relative',
      }}
    >
      <div
        style={{
          background: 'var(--variant)',
          width: `${percent}%`,
          height: '1.5em',
          borderRadius: 'calc(var(--border-radius) * 2)',
        }}
      ></div>
      <span
        style={{
          position: 'absolute',
          zIndex: 2,
          width: '100%',
          textAlign: 'center',
          top: 0,
        }}
      >
        {percent}%
      </span>
    </div>
  );
}
