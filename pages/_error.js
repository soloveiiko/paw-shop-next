function Error({ statusCode, message }) {
  return (
    <div className="page error-page">
      {statusCode || message ? (
        <>
          <div className="error-page__status-code">{statusCode}</div>
          <div className="error-page__message">{message}</div>
        </>
      ) : (
        'An error occurred on client'
      )}
    </div>
  );
}
Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
