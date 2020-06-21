async function feed(parent, args, context) {
  const count = await context.prisma
    .categoriesConnection({
      where: {
        OR: [
          { name_contains: args.filter },
        ],
      },
    })
    .aggregate()
    .count();
  const categories = await context.prisma.categories({
    where: {
      OR: [
        { name_contains: args.filter },
      ],
    },
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy,
  });
  return {
    count,
    categories,
  }
}

async function feed2(parent, args, context) {

  const count = await context.prisma
      .blogPostsConnection({
      })
      .aggregate()
      .count();
  const blogposts = await context.prisma.blogPosts({
    where: {
          categories_some: {
            name_contains : args.filter,
          }
        }
  });
  return {
    count,
    blogposts
  }
}

async function feed3(parent, args, context) {
  const count = await context.prisma
      .blogPostsConnection({
      })
      .aggregate()
      .count();
  const  blogpost =  await context.prisma.blogPosts({
    where: {
      OR: [
        { name_contains: args.filter },
      ],
    },
  });
  return {
    blogpost,
    count
  }
}
async function feed4(parent, args, context) {
  const count = await context.prisma
      .blogPostsConnection({
      })
      .aggregate()
      .count();
  const  blogposts =  await context.prisma.blogPosts({
    where: {
         createdAt_gt: "2020-03-09T00:00:00Z",
    }
  });
  return {
    blogposts,
    count
  }
}




module.exports = {
  feed,
  feed2,
  feed3,
  feed4,
};
