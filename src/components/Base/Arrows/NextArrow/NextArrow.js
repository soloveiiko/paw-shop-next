import { SlArrowRight } from 'react-icons/sl';

function NextArrow({ innerRef, className }) {
  return (
    <div
      ref={innerRef}
      className={`next-arrow${className ? ` ${className}` : ''}`}
      aria-hidden="true"
    >
      <SlArrowRight />
    </div>
  );
}

export default NextArrow;
