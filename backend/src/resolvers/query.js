const jwt = require("jsonwebtoken");

async function users(parent, args, context, info) {
   const allUsers = await context.prisma.user.findMany();

   return allUsers;
}

async function user(parent, args, context, info) {
   return await context.prisma.user.findUnique({
      where: {
         id: parseInt(args.id),
      },
   });
}

async function posts(parent, args, context, info) {
   return await context.prisma.post.findMany({
      orderBy: {
         id: "asc",
      },
   });
}
async function post(parent, args, context, info) {
   return await context.prisma.post.findUnique({
      where: {
         id: parseInt(args.id),
      },
   });
}
async function likes(parent, args, context, info) {
   return await context.prisma.like.findMany();
}
async function like(parent, args, context, info) {
   return await context.prisma.like.findUnique({
      where: {
         id: parseInt(args.id),
      },
   });
}
async function comments(parent, args, context, info) {
   return await context.prisma.comment.findMany();
}
async function comment(parent, args, context, info) {
   return await context.prisma.comment.findUnique({
      where: {
         id: parseInt(args.id),
      },
   });
}
async function commentstocomment(parent, args, context, info) {
   return await context.prisma.commentToComment.findMany();
}
async function commenttocomment(parent, args, context, info) {
   return await context.prisma.commentToComment.findUnique({
      where: {
         id: parseInt(args.id),
      },
   });
}
//
async function checkToken(parent, args, context, info) {
   const token = args.token;
   const decoded = jwt.verify(token, "prisma");

   const user = await context.prisma.user.findUnique({
      where: {
         id: decoded.userId,
      },
   });
   if (!user) {
      throw new Error("USER_NOT_FOUND");
   }
   return user;
}
module.exports = {
   users,
   user,
   posts,
   post,
   likes,
   like,
   comments,
   comment,
   commentstocomment,
   commenttocomment,
   checkToken,
};
