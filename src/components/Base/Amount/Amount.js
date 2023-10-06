function Amount({ handleIncrement, handleDecrement, quantity }) {
  return (
    <div className="amount">
      <button className="amount__minus" onClick={handleDecrement}>
        -
      </button>
      <div className="amount__curr-quantity">{quantity}</div>
      <button className="amount__plus" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
}

export default Amount;
