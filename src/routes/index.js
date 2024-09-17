const express = require("express");
const router = express.Router();
const assetRoute = require("./asset.route");
const userRoute = require("./user.route");

const routes = [
  {
    path: "/asset",
    route: assetRoute,
  },
  {
    path: "/user",
    route: userRoute,
  },
];

routes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
