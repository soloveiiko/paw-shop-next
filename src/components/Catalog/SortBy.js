import { IoIosArrowDown } from 'react-icons/io';
import { useState } from 'react';

function SortBy({ sortByList, handleSort, sortItem, orderItem }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`sort-by${isOpen ? ' open' : ''}`} tabIndex="0">
      <h3 className="sort-by__title">Sort by: </h3>
      <span className="sort-by__selected-item" onClick={toggleIsOpen}>
        {
          sortByList.find(
            (el) => el.sort === sortItem && el.order === orderItem
          )?.name
        }
        <IoIosArrowDown />
      </span>
      <ul className="sort-by__options">
        {sortByList.map((el) => (
          <li
            className={`sort-by__option ${
              sortItem === el.sort && el.order === orderItem ? 'selected' : ''
            }`}
            key={el.id}
            onClick={() => handleSort(el.sort, el.order)}
          >
            {el.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SortBy;
