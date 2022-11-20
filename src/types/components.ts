import type { FooterLink } from "~/types/data";

export type IconProps = {
  className?: string;
};

export type LayoutProps = {
  children: React.ReactNode;
  className?: string;
};

export type FooterNavProps = {
  links: FooterLink[];
};

export type ButtonProps = {
  className?: string;
  children: React.ReactNode;
};
