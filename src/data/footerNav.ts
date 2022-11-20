import type { FooterLink, FooterLinkKey } from "~/types/data";

export const footerNavLinksData: Record<FooterLinkKey, FooterLink> = {
  TicketTailor: {
    href: "tickettailor",
    src: "img-tt-preview",
    alt: "TicketTailor design",
    description: "A new identity for a group of dreamers",
    tag: "UX/UI Design",
  },
  Atriom: {
    href: "atriom",
    src: "img-at-preview",
    alt: "Atriom design",
    description: "A startup looking for a clean and safe look",
    tag: "UX/UI Design",
  },
  EmailOctopus: {
    href: "emailoctopus",
    src: "img-eo-preview",
    alt: "EmailOctopus design",
    description: "Re-branding a trusted Email platform",
    tag: "Branding - UX/UI Design",
  },
  FootballApp: {
    href: "football-app",
    src: "img-ft-preview",
    alt: "Football app design",
    description: "Concept: Making a space for the ultimate fan",
    tag: "UX/UI Design",
  },
  SmallBusiness: {
    href: "small-bussiness",
    src: "img-mc-preview",
    alt: "Small business design",
    description: "Giving a hand to the small business",
    tag: "UX/UI Design",
  },
  Vector: {
    href: "vector",
    src: "img-v-preview",
    alt: "Vector design",
    description: "New brand for new beginnings",
    tag: "Branding - UX/UI Design",
  },
};
