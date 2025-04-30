const phone = "+543731551351";
const message = "Hello! I saw your portfolio and would like to chat!";
const encodedMessage = encodeURIComponent(message);

export const social = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/jmsilva83",
    icon: "mdi:linkedin",
  },
  {
    name: "Github",
    href: "https://github.com/jmsilva83",
    icon: "mdi:github",
  },
  {
    name: "Whatsapp",
    href: `https://wa.me/${phone}?text=${encodedMessage}`,
    icon: "mdi:whatsapp",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/jmsilva83",
    icon: "mdi:facebook",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/jmsilva83",
    icon: "mdi:instagram",
  },
];
