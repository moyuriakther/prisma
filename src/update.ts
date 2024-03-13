import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updates = async () => {
  // single update
  //   const singleUpdate = await prisma.posts.update({
  //     where: {
  //       id: 4,
  //     },
  //     data: {
  //       title: "end of Ramadan",
  //       content: "There is no seheri today",
  //     },
  //   });
  // const updateMany = await prisma.posts.updateMany({
  //   where: {
  //     title: "2nd Ramadan",
  //   },
  //   data: {
  //     published: true,
  //   },
  // });
  const upsertData = await prisma.posts.upsert({
    where: {
      id: 1,
    },
    update: {
      title: "Updated title",
      author: "Anik",
    },
    create: {
      title: "Second Entry",
      content: "Here goes the content for the second entry.",
      author: "Jane Smith",
    },
  });
  console.log({ upsertData });
};
updates();
