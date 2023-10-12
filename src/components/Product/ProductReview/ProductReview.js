import { useEffect, useState } from 'react';
import ReviewsItem from '@components/ReviewsItem/ReviewsItem';
import Pagination from '@components/Base/Pagination/Pagination';
import Preloader from '@components/Base/Preloader/Preloader';
import StarsRange from '@components/Base/StarsRange/StarsRange';
import { useLazyProductReviewsQuery } from '@services/reviewApi';
const ProductReview = ({ productId }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const [getReviewItem, { data }] = useLazyProductReviewsQuery();

  useEffect(() => {
    getReviewItem({
      id: productId,
      data: { page: currentPage, per_page: itemsPerPage },
    });
  }, [data, productId, currentPage]);

  if (!data || !data.data) {
    return <Preloader />;
  }
  const handlePagination = (selectedPage) => {
    setCurrentPage(selectedPage);
  };
  console.log('review data', data);
  return (
    <div className="product-review">
      <div className="container product-review__container">
        <div className="product-review__stars-range">
          <StarsRange value={parseFloat(data.total.avg)} size="40" />
          <div className="product-review__range">
            {typeof data.total.avg === 'string'
              ? parseFloat(data.total.avg).toFixed(1)
              : data.total.avg.toFixed(1)}
          </div>
        </div>
        <div className="product-review__list">
          {data.data.map((review) => (
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
        {data.meta.last_page > 1 && (
          <Pagination
            pageCount={data.meta.last_page}
            forcePage={data.meta.current_page}
            onPageChange={handlePagination}
          />
        )}
      </div>
    </div>
  );
};

export default ProductReview;
