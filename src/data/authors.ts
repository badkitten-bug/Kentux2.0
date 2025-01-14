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
    slug: "mario-sanchez",
    image: marioImage,
    bio: "Mario is a Staff Engineer specialising in Frontend at Vercel, as well as being a co-founder of Acme and the content management system Sanity. Prior to this, he was a Senior Engineer at Apple.",
  },
  {
    name: "Steve Gomez",
    slug: "steve-gomez",
    image: steveImage,
    bio: "Steve is a Project Manage Engineer. A Data Analytics at Acme, specializing in the use of cloud infrastructure for Machine Learning and Deep Learning operation at scale.",
  },
  {
    name: "Jose Flores",
    slug: "jose-flores",
    image: joseImage,
    bio: "He's the only person that said the true :c",
  },
  {
    name: "Roxana Ingaruca",
    slug: "roxana-ingaruca",
    image: roxanaImage,
    bio: "Erika Oliver is a successful entrepreuner. She is the founder of Acme Inc, a bootstrapped business that builds affordable SaaS tools for local news, indie publishers, and other small businesses.",
  },
];
