const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')

function create_Category(parent, args, context) {
  return context.prisma.createCategory({
    name: args.name,
  })
}

function create_Post(parent, args, context) {
  return context.prisma.createBlogPost({
    name: args.name,
    categories : {
      connect: {
        name : args.category
      }
    }
  })
}

module.exports = {
  create_Category,
  create_Post,
}
