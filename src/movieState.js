//Import Images
import athlete from "./img/mtnbike.png";
import athlete2 from "./img/athlete2.jpg";
import goodtimes2 from "./img/good-times2.jpg";
import musician2 from "./img/sunset-guitar.png";
import wedding from "./img/wedding.png"
import rapper from './img/rapper.png'

export const MovieState = () => {
  return [
    {
      title: "The Athlete",
      mainImg: athlete,
      secondaryImg: athlete2,
      url: "/work/the-athlete",
      awards: [
        {
          title: "Perfect for any sport!",
          description:
            "“From golf to motocross, we'll get that perfect shot.”",
        },
        {
          title: "Stills or Video",
          description:
            "“Catch big-air in slow-motion!”",
        },
        {
          title: "On location, where you need us.",
          description:
            "“We come to you, at your gym, your game, or where ever!”",
        },
      ],
    },
    {
      title: "The Couple",
      mainImg: wedding,
      url: "/work/the-couple",
      secondaryImg: goodtimes2,
      awards: [
        {
          title: "Perfect for any occasion.",
          description:
            "“For the big day or just a random photoshoot with your favorite person.”",
        },
        {
          title: "Memories forever",
          description:
            "“Our high quality captures will help your special moments live on forever.”",
        },
        {
          title: "Anywhere, Anytime",
          description:
            "“Either choose the location, or we can help!”",
        },
      ],
    },
    {
      title: "The Musician",
      mainImg: rapper,
      url: "/work/the-musician",
      secondaryImg: musician2,
      awards: [
        {
          title: "Music Videos",
          description:
            "“We do it all, including music videos and album covers.”",
        },
        {
          title: "We're here to help",
          description:
            "“Don't know what to do with your hands in a music video? Our pro's will help you out.”",
        },
        {
          title: "Highest Quality Equipment",
          description:
            "“Only using the best equipment available, you can be sure your photos and videos will be of the highest quality.”",
        },
      ],
    },
  ];
};