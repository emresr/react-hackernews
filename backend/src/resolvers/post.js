function author(parent, args, context) {
   return context.prisma.post.findUnique({ where: { id: parent.id } }).author();
}
function likes(parent, args, context) {
   return context.prisma.post.findUnique({ where: { id: parent.id } }).likes();
}
function comments(parent, args, context) {
   return context.prisma.post
      .findUnique({ where: { id: parent.id } })
      .comments();
}
function hiddenBy(parent, args, context) {
   return context.prisma.post
      .findUnique({ where: { id: parent.id } })
      .hiddenBy();
}
module.exports = {
   author,
   likes,
   comments,
   hiddenBy,
};
