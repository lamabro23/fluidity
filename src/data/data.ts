import pic_1 from "./pictures/pic_1.jpg";
import pic_2 from "./pictures/pic_2.jpg";
import pic_3 from "./pictures/pic_3.jpg";
import pic_4 from "./pictures/pic_4.jpg";
import pic_5 from "./pictures/pic_5.jpg";
import pic_6 from "./pictures/pic_6.jpg";
import pic_7 from "./pictures/pic_7.jpg";
import pic_8 from "./pictures/pic_8.png";
import { queryToken } from "../Startpage/Searchbar/Searchbar";

export interface dataElem {
  label: string;
  value: string;
}

export interface linkGroup {
  title: string;
  links: dataElem[];
}

/* eslint-disable */
/*
──────▄▌▐▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀​▀▀▀▀▀▀▌
───▄▄██▌█ BEEP BEEP
▄▄▄▌▐██▌█ GAY PORN DELIVERY
███████▌█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄​▄▄▄▄▄▄▌
▀(@)▀▀▀▀▀▀▀(@)(@)▀▀▀▀▀▀▀▀▀▀▀▀▀​▀▀▀▀(@)▀
*/
/* eslint-enable */

export const links: linkGroup[] = [
  {
    title: "Reddit",
    links: [
      {
        label: "r/startpages",
        value: "https://www.reddit.com/r/startpages/",
      },
      {
        label: "r/unixporn",
        value: "https://www.reddit.com/r/unixporn/",
      },
      {
        label: "r/rainmeter",
        value: "https://www.reddit.com/r/rainmeter/",
      },
      {
        label: "r/AnimalsBeingDerps",
        value: "https://www.reddit.com/r/AnimalsBeingDerps/",
      },
    ],
  },
  {
    title: "3D Modelling",
    links: [
      {
        label: "Blender",
        value: "https://www.blender.org/",
      },
      {
        label: "BlenderGuru",
        value: "https://www.blenderguru.com/",
      },
      {
        label: "Poliigon",
        value: "https://www.poliigon.com/",
      },
      {
        label: "Blender tutorial",
        value:
          "https://www.youtube.com/watch?v=NyJWoyVx_XI&list=PLjEaoINr3zgEq0u2MzVgAaHEBt--xLB6U",
      },
      {
        label: "The other Blender tutorial",
        value:
          "https://www.youtube.com/watch?v=bpvh-9H8S1g&list=PL8eKBkZzqDiU-qcoaghCz04sMitC1yx6k&index=1",
      },
    ],
  },
  {
    title: "Design",
    links: [
      {
        label: "PixlrX",
        value: "https://pixlr.com/x/",
      },
      {
        label: "AI Image Enlarger",
        value: "https://bigjpg.com/en",
      },
      {
        label: "Img to Svg Converter",
        value: "https://picsvg.com/",
      },
      {
        label: "Affinity",
        value: "https://affinity.serif.com/en-us/tutorials/designer/desktop/",
      },
      {
        label: "Affinity - YT",
        value: "https://www.youtube.com/c/AffinityRevolution/playlists",
      },
    ],
  },
  {
    title: "Music",
    links: [
      {
        label: "i wanna be a cowboy",
        value: "https://www.youtube.com/watch?v=8zWz92f_HGs",
      },
      {
        label: "let the bodies hit the floor",
        value: "https://www.youtube.com/watch?v=b--VKaCB9u0",
      },
      {
        label: "Nobody Kanna Cross It",
        value: "https://www.youtube.com/watch?v=2wqTnwJGvtc",
      },
      {
        label: "Smug Dancin",
        value: "https://www.youtube.com/watch?v=eNZ9Od1jQ4Q",
      },
      {
        label: "Utamaru - The Sanctified Mind Cover",
        value: "https://www.youtube.com/watch?v=MHlJKLlS07U",
      },
    ],
  },
  {
    title: "Sauce",
    links: [
      {
        label: "Pictures - DeathAndMilk",
        value: "https://www.instagram.com/deathandmilk_/",
      },
      {
        label: "Icons - FontAwesome",
        value: "https://fontawesome.com/icons",
      },
      {
        label: "Text Flicker - CodeMyUI",
        value:
          "https://codemyui.com/crt-screen-text-flicker-animation-in-pure-css/",
      },
      {
        label: "Wave Animation - mburakerman",
        value: "https://codepen.io/mburakerman/pen/eRZZEv",
      },
      {
        label: "Da real sauce ԅ(♡﹃♡ԅ)",
        value: "https://www.youtube.com/watch?v=qr89xoZyE1g",
      },
      {
        label: "Even more real sauce ( ͡° ͜ʖ ͡°)",
        value: "https://www.youtube.com/watch?v=VLhJOd_TFiI",
      },
    ],
  },
];

export const images: dataElem[] = [
  { label: "pic_1", value: pic_1 },
  { label: "pic_2", value: pic_2 },
  { label: "pic_3", value: pic_3 },
  { label: "pic_4", value: pic_4 },
  { label: "pic_5", value: pic_5 },
  { label: "pic_6", value: pic_6 },
  { label: "pic_7", value: pic_7 },
  { label: "pic_8", value: pic_8 },
];

export const searchEngines: dataElem[] = [
  {
    label: "Google",
    value: `https://www.google.com/search?q=${queryToken}`,
  },
  {
    label: "DuckDuckGo",
    value: `https://duckduckgo.com/?q=${queryToken}`,
  },
  {
    label: "Qwant",
    value: `https://qwant.com/?q=${queryToken}`,
  },
  {
    label: "Ecosia",
    value: `https://ecosia.org/search/?q=${queryToken}`,
  },
];

export type FastForwards = Record<string, string>;

export interface Search {
  engine: string;
  fastForward: FastForwards;
}

export const searchSettings: Search = {
  engine: searchEngines[0].value,
  fastForward: {
    deepl: "https://deepl.com/",
    maps: "https://google.de/maps/",
    reddit: "https://reddit.com/",
    github: "https://github.com/",
    gitlab: "https://gitlab.com/",
    youtube: "https://youtube.com/",
  },
};

export interface colorsType {
  [key: string]: string;
  "--bg-color": string;
  "--default-color": string;
  "--accent-color": string;
  "--accent-color2": string;
}

export interface Theme {
  name: string;
  colors: colorsType;
  image: string;
}

export const themes: Theme[] = [
  {
    name: "Kitties",
    image:
      "https://64.media.tumblr.com/5a232d5c0999d02388d78e5c1025f94f/0572516693bf4014-3d/s500x750/0306dc89b657093529aa3ce96e64b9c43572e901.gifv",
    colors: {
      "--bg-color": "#2e2e2e",
      "--default-color": "#e6e6e6",
      "--accent-color": "#8b638c",
      "--accent-color2": "#77a3ca",
    },
  },
  {
    name: "RH",
    image:
      "https://64.media.tumblr.com/5228ca556c242f1b9c7187cd1a874c04/tumblr_p8c6xsY2Jn1tyr2z8o2_400.gifv",
    colors: {
      "--bg-color": "#111111",
      "--default-color": "#d4d4d4",
      "--accent-color": "#a60000",
      "--accent-color2": "#808080",
    },
  },
];
