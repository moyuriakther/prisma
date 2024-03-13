import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // create single
  //   const result = await prisma.posts.create({
  //     data: {
  //       title: "2nd Ramadan",
  //       content: "Today seheri end time 4.55",
  //       author: "Moyuri Akther",
  //     },
  //   });
  const createMany = await prisma.posts.createMany({
    data: [
      {
        title: "Silent Whispers",
        content: "Listening to the quiet voices that speak softly.",
        author: "Liam Thompson",
      },
      {
        title: "Ripples of Change",
        content: "Small actions creating waves of transformation.",
        author: "Chloe Adams",
      },
      {
        title: "Midnight Musings",
        content: "Thoughts dancing in the darkness of the night.",
        author: "Noah Garcia",
      },
      {
        title: "Stardust Dreams",
        content: "Imagining worlds beyond the reach of reality.",
        author: "Avery Wright",
      },
      {
        title: "Songs of Serendipity",
        content: "Melodies that find us in unexpected moments.",
        author: "Grace Cooper",
      },
      {
        title: "Whispers of Wisdom",
        content: "Insights gleaned from the depths of experience.",
        author: "Benjamin Turner",
      },
      {
        title: "Infinite Horizons",
        content: "Boundless vistas stretching toward eternity.",
        author: "Aria Martinez",
      },
      {
        title: "Sands of Time",
        content: "Moments slipping through the hourglass of existence.",
        author: "Elena Rodriguez",
      },
      {
        title: "Canvas of Dreams",
        content: "Painting visions with the colors of imagination.",
        author: "Nathan Scott",
      },
      {
        title: "Harmony in Chaos",
        content: "Finding peace amidst the tumultuous rhythms of life.",
        author: "Emma Baker",
      },
    ],
  });
  console.log({ createMany });
};
main();
