import { ReduxState, Record, Identifier } from "ra-core";

export type ThemeName = "light" | "dark";

export interface AppState extends ReduxState {
  theme: ThemeName;
}

export interface Category extends Record {
  name: string;
}

export interface Product extends Record {
  category_id: Identifier;
  description: string;
  height: number;
  image: string;
  price: number;
  reference: string;
  stock: number;
  thumbnail: string;
  width: number;
}

export interface Customer extends Record {
  first_name: string;
  last_name: string;
  address: string;
  city: string;
  zipcode: string;
  avatar: string;
  birthday: string;
  first_seen: string;
  last_seen: string;
  has_ordered: boolean;
  latest_purchase: string;
  has_newsletter: boolean;
  groups: string[];
  nb_commands: number;
  total_spent: number;
}

export interface Order extends Record {
  basket: BasketItem[];
}

export interface BasketItem {
  product_id: string;
  quantity: number;
}

/**
 * Types to eventually add in react-admin
 */
export interface FieldProps<T extends Record = Record> {
  addLabel?: boolean;
  label?: string;
  record?: T;
  source?: string;
}

export interface Review extends Record {
  customer_id: string;
}

export interface User extends Record {
  nom: String;
  prenom: String;
  pseudo: String;
  email: String;
  password: String;
  roles: String; // TODO see how to support enums
  // enum: ["internaut", "admin", "fact_checker"];
  // default: "internaut";
  // TODO: Remove not essential
  avatar?: string;
  birthday?: string;
  first_seen?: string;
  last_seen?: string;
  has_ordered?: boolean;
  latest_purchase?: string;
  has_newsletter?: boolean;
  groups?: string[];
  nb_commands?: number;
  total_spent?: number;
}

export interface Author extends Record {
  fullName?: String;
  email?: String;
}

export interface News extends Record {
  sources?: string[];
  media?: string[];
  description: string;
  status: string;
  paysOrigin?: string;
  author?: Author;
  location?: string;
  factCheck?: FactCheck;
}

export interface FactCheck extends Record {
  news?: News[];
  author?: User;
  titleQuestion?: String;
  claim?: String;
  verdict: String;
  checkedFact: String;
  scentificArgument: String;
  links?: string[];
  media?: string[];
  lang: String;
  publishedAt: Date;
  slug: String;
}

export interface FactCheckNewsItem extends Record {
  news: News[];
}
