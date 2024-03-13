import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const deletes = async () => {
  //   const singleDelete = await prisma.posts.delete({
  //     where: {
  //       id: 1,
  //     },
  //   });
  const deleteMany = await prisma.posts.deleteMany({
    where: {
      title: "4th Ramadan",
    },
  });
  console.log({ deleteMany });
};
deletes();
