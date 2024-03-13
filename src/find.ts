import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // find all
  const getAll = await prisma.posts.findMany();
  //   find first and find first or Throw
  const findFirst = await prisma.posts.findFirstOrThrow({
    where: {
      id: 9,
    },
  });
  //   find unique and find unique or throw
  const findUnique = await prisma.posts.findUniqueOrThrow({
    where: {
      id: 14,
    },
    select: {
      title: true,
      content: true,
      author: true,
    },
  });

  console.log({ findUnique });
};
main();
