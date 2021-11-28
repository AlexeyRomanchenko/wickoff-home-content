// import or require the writer-data-acceess npm package
//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

exports.getHomeData = async (event) => {
  // we assume to retrieve the data from the database
  const response = {
    status: 200,
    body: JSON.stringify('Hello from Lambda!'),
    error: null,
  };
  return response;
};
