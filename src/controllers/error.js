exports.client = (req, res) => {
  res.status(404)
    .render('error', {
      layout: 'basic',
      statusCode: 404,
      errorMessage: 'Page not found',
    });
};

exports.server = (err, req, res, next) => { //eslint-disable-line
  res.status(500)
    .render('error', {
      layout: 'basic',
      statusCode: 500,
      errorMessage: 'Internal server error',
    });
};
