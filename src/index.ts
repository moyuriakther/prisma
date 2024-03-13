import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const result = await prisma.posts.create({
    data: {
      title: "2nd Ramadan",
      content: "Today seheri end time 4.55",
      author: "Moyuri Akther",
    },
  });
  const getAll = await prisma.posts.findMany();
  console.log(getAll);
};
main();
