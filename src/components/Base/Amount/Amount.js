function Amount({ handleIncrement, handleDecrement, quantity }) {
  return (
    <div className="amount">
      <button className="amount__minus" onClick={handleDecrement}>
        -
      </button>
      <span className="amount__curr-quantity">{quantity}</span>
      <button className="amount__plus" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
}

export default Amount;
