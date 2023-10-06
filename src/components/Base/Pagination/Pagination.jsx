import React from 'react';
import ReactPaginate from 'react-paginate';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

const Pagination = ({ onPageChange, pageCount, forcePage = 1 }) => {
  const handlePageClick = (data) => {
    const selectedPage = data.selected + 1;
    console.log(`User requested page number ${selectedPage}`);
    onPageChange(selectedPage);
  };

  return (
    <ReactPaginate
      className="pagination"
      previousClassName="pagination__prev-arrow"
      nextClassName="pagination__next-arrow"
      pageClassName="pagination__item"
      pageLinkClassName="pagination__link"
      breakClassName="pagination__dots"
      breakLabel="..."
      nextLabel={<SlArrowRight />}
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      pageCount={pageCount}
      previousLabel={<SlArrowLeft />}
      renderOnZeroPageCount={null}
      forcePage={forcePage - 1}
    />
  );
};

export default Pagination;
