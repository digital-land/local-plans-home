//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require("govuk-prototype-kit");
const path = require("path");
const fs = require("fs");
const router = govukPrototypeKit.requests.setupRouter();

const basePath = path.join(__dirname, "./views");

const getAllRoutesFromDir = (dir, ignore = []) => {
  const paths = fs
    .readdirSync(path.join(basePath, dir))
    .filter((p) => !ignore.includes(p));

  return paths.flatMap((p) =>
    fs.lstatSync(path.join(basePath, dir, p)).isDirectory()
      ? getAllRoutesFromDir(path.join(dir, p))
      : [`/${path.join(dir, p.replace(/.html$/, "")).replace(/\\/g, "/")}`]
  );
};

const allAvailableRoutes = [
  ...getAllRoutesFromDir(".", ["layouts", "404.html", "index.html"]),
  "/",
];

router.use("*", (req, res, next) => {
  if (!allAvailableRoutes.includes(req.originalUrl)) {
    res.status(404).render(path.join(__dirname, "./views/404.html"), {
      path: req.originalUrl,
    });
  } else {
    next();
  }
});
