function categories(parent, args, context) {
    return context.prisma.blogPost({ id: parent.id }).categories()
}


module.exports = {
    categories,

}
