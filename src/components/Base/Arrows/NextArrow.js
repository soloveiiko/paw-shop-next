import { SlArrowRight } from 'react-icons/sl';

function NextArrow({ innerRef, className }) {
  return (
    <button
      ref={innerRef}
      className={`next-arrow${className ? ` ${className}` : ''}`}
      aria-hidden="true"
    >
      <SlArrowRight />
    </button>
  );
}

export default NextArrow;
