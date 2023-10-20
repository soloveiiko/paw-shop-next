const spriteHref = '/images/sprite.svg';

function Icon({ name, ...props }) {
  return (
    <svg {...props}>
      <use xlinkHref={`${spriteHref}#${name}`} />
    </svg>
  );
}

export default Icon;