import StarsRange from '@components/Base/StarsRange/StarsRange';
import ReviewsItem from '@components/ReviewsItem/ReviewsItem';
import Pagination from '@components/Base/Pagination/Pagination';
import { useState } from 'react';

function ProductReview({ comments }) {
  const [currentPage, setCurrentPage] = useState(1);
  const handlePagination = (selectedPage) => {
    setCurrentPage(selectedPage);
  };
  return (
    <div className="product-review">
      <div className="container product-review__container">
        <div className="product-review__stars-range">
          <StarsRange value={parseFloat(comments.data.total.avg)} size="40" />
          <div className="product-review__range">
            {typeof comments.data.total.avg === 'string'
              ? parseFloat(comments.data.total.avg).toFixed(1)
              : comments.data.total.avg.toFixed(1)}
          </div>
        </div>
        <div className="product-review__list">
          {comments.data.data.map((review) => (
            <ReviewsItem
              key={review.id}
              date={review.created_at}
              username={review.name}
              rating={review.rating}
              body={review.body}
              images={review.images}
              isLink={false}
            />
          ))}
        </div>
        {comments.data.meta.last_page > 1 && (
          <Pagination
            pageCount={comments.data.meta.last_page}
            forcePage={comments.data.meta.current_page}
            onPageChange={handlePagination}
          />
        )}
      </div>
    </div>
  );
}
export default ProductReview;
