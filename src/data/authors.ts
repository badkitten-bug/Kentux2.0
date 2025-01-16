import marioImage from "../assets/authors/mario.webp";
import roxanaImage from "../assets/authors/roxana.webp";
import steveImage from "../assets/authors/steve.webp";
import joseImage from "../assets/authors/joseflores.webp";

export interface Props {
  name: string;
  slug: string;
  image: ImageMetadata;
  bio: string;
}

export type Author = Props;

export const authors: Props[] = [
  {
    name: "Jorge Silvestre",
    slug: "jorge-silvestre",
    image: marioImage,
    bio: "Jorge is a Senior Engineer specialising in backend with Java, as well as being a co-founder of Kentux.",
  },
  {
    name: "Steve Gomez",
    slug: "steve-gomez",
    image: steveImage,
    bio: "Steve is a Project Manage Engineer. A Data Analytics at Kentux, specializing in the use of cloud infrastructure for Machine Learning and Deep Learning operation at scale.",
  },
  {
    name: "Jose Flores",
    slug: "jose-flores",
    image: joseImage,
    bio: "Jose is a Frontend developer. President of Development Area at IEEE CS UNTELS.",
  },
  {
    name: "Roxana Ingaruca",
    slug: "roxana-ingaruca",
    image: roxanaImage,
    bio: "Roxana is a successful entrepreuner. She is the founder of Acme Inc, a bootstrapped business that builds affordable SaaS tools for local news, indie publishers, and other small businesses.",
  },
];
