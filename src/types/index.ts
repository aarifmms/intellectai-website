export interface NavLink {
  label: string;
  href: string;
}

export interface ServicePackage {
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface Stat {
  value: string;
  label: string;
}
