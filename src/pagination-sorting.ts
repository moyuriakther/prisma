import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const paginationSorting = async () => {
  // offset pagination
  const offsetData = await prisma.posts.findMany({
    skip: 4,
    take: 5,
  });
  const cursorData = await prisma.posts.findMany({
    skip: 4,
    take: 3,
    cursor: {
      id: 9,
    },
  });
  const sortedData = await prisma.posts.findMany({
    orderBy: {
      id: "asc",
    },
    where: {
      title: "Whispers of Wisdom",
    },
  });
  console.log({ offsetData });
};
paginationSorting();
