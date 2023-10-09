const categoryList = [
  { id: 1, name: 'Balls' },
  { id: 2, name: 'Beds' },
  { id: 3, name: 'Soft toys' },
];
function CategoryFilter() {
  return (
    <div className="category-filter">
      <button className="category-filter__item">All</button>
      {categoryList.map((category) => (
        <button className="category-filter__item" key={category.id}>
          {category.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
