function user(parent, args, context) {
   return context.prisma.comment
      .findUnique({ where: { id: parent.id } })
      .user();
}
function post(parent, args, context) {
   return context.prisma.comment
      .findUnique({ where: { id: parent.id } })
      .post();
}
function commentTo(parent, args, context) {
   return context.prisma.comment
      .findUnique({ where: { id: parent.id } })
      .commentTo();
}
function comments(parent, args, context) {
   return context.prisma.comment
      .findUnique({ where: { id: parent.id } })
      .comments();
}

module.exports = {
   user,
   post,
   commentTo,
   comments,
};
