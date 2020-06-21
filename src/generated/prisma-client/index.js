"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Category",
    embedded: false
  },
  {
    name: "BlogPost",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://blog-mz-e4a4da529c.herokuapp.com/demo_service/michal`
});
exports.prisma = new exports.Prisma();
