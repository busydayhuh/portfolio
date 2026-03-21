import mail from "../assets/e-mail.png";
import gh from "../assets/github.png";
import telegram from "../assets/telegram.png";

type Social = "tg" | "gh" | "mail" | "cv";
type Description = {
  title: string;
  username: string;
  link: string;
  icon?: string;
};
type Contacts = Record<Social, Description>;

export const CONTACTS: Contacts = {
  tg: {
    title: "Telegram",
    username: "@busydayhuh",
    link: "https://t.me/busydayhuh",
    icon: telegram,
  },
  mail: {
    title: "Email",
    username: "valeria.busyday@yandex.ru",
    link: "mailto:valeria.busyday@yandex.ru",
    icon: mail,
  },

  gh: {
    title: "Github",
    username: "@busydayhuh",
    link: "https://github.com/busydayhuh",
    icon: gh,
  },
  cv: {
    title: "Резюме",
    username: "PDF",
    link: "https://disk.yandex.ru/i/GkdWt-MipPtRKw",
  },
};
