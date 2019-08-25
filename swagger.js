const fs = require("fs");
const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  swaggerDefinition: {
    components: {},
    openapi: "3.0.0",
    info: {
      title: "Analytics Service API",
      version: "1.0.0",
      description: "Get api calls statistics and quota usage from analytics pipeline",
    }
  },
  apis: [
  "./index.js"
  ],
};

const specs = swaggerJsdoc(options);

fs.writeFile("./swagger.json", JSON.stringify(specs, null, 2), "utf-8", (err) => {
  console.log("Finished writing swagger.json file", err);
  process.exit(0);
});