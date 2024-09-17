const securityHeaders = (req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,OPTIONS");
  res.setHeader("X-XSS-Protection", "1; mode=block");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept,Token,token,cookie"
  );
  res.setHeader(
    "Content-Security-Policy",
    "frame-ancestors *; font-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdnjs.cloudflare.com https://www.googletagmanager.com https://dev.visualwebsiteoptimizer.com https://www.google-analytics.com https://connect.facebook.net https://storage.googleapis.com; media-src;form-action; worker-src 'self';"
  );
  res.header("Access-Control-Allow-Credentials", true);
  next();
};

module.exports = securityHeaders;
