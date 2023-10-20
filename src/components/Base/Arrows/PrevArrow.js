import { SlArrowLeft } from 'react-icons/sl';

function PrevArrow({ innerRef, className }) {
  return (
    <button
      ref={innerRef}
      className={`prev-arrow${className ? ` ${className}` : ''}`}
      aria-hidden="true"
    >
      <SlArrowLeft />
    </button>
  );
}

export default PrevArrow;
