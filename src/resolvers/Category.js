function blogposts(parent, args, context) {
    return context.prisma.category({ id: parent.id }).blogposts()
}


module.exports = {
    blogposts,
}
