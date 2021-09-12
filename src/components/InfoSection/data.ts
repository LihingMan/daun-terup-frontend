export interface IInfoSectionObj {
  id: string;
  lightBg: boolean;
  lightText: boolean;
  lightTextDesc: boolean;
  topLine: string;
  headline: string;
  description: string;
  buttonLabel: string;
  imgStart: boolean;
  img: any;
  alt: string;
  dark: boolean;
  primary: boolean;
  darkText: boolean;
}

export const firstHomeObj: IInfoSectionObj = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Deez NUTS',
  headline: 'Tanak wagu malaysia',
  description: "Don't feed the horses daddy. Please don't feed them and don't let them touch me.",
  buttonLabel: 'Get started',
  imgStart: false,
  img: require('../../../assets/landing/two-cards.svg'),
  alt: 'Cards',
  dark: true,
  primary: true,
  darkText: false,
};
