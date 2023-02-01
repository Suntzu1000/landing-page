import AboutImg from "./assets/about.png";
import Feature1Img from "./assets/feature1.png";
import Feature1bg from "./assets/feature1_bg.png";
import Feature2Img from "./assets/feature2.png";
import Feature2bg from "./assets/feature2_bg.png";
import Feature3Img from "./assets/feature3.png";
import Feature3bg from "./assets/feature3_bg.png";
import Feature4Img from "./assets/feature4.png";
import Feature4bg from "./assets/feature4_bg.png";
import Logo from "./assets/favicon_.png";
import Hero from "./assets/hero-img.png";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsChatDotsFill } from "react-icons/bs";

export const navigationData = [
  {
    name: "Entrega",
    href: "#",
  },
  {
    name: "Sobre nós",
    href: "#",
  },
  {
    name: "Recursos",
    href: "#",
  },
  {
    name: "Inscrever-se",
    href: "#",
  },
];

export const heroData = {
  title: "Encomendar produtos mais rápido e mais fácil!",
  subtitle:
    "Peça sua comida favorita em qualquer momento e entregaremos onde você estiver!",
  btnText: "Pesquisar",
  image: Hero,
};

export const aboutData = {
  image: AboutImg,
  title: "Descubra um pouco sobre nós.",
  subtitle:
    "Nós somos uma empresa dedicada á distribuição de produtos em entrega para a sua casa ou lugar onde estiver.",
};

export const featuresData = {
  title: "Alguns Serviços que nós oferecemos. ",
  subtitle:
    "Com nosso App você pode ver a rota do seu pedido do local de origem até onde você está.  Experimente o App agora!",
  list: [
    {
      image: Feature1Img,
      bgImage: Feature1bg,
      title: "Pagamento Feito",
      description: "Pagamento com cartão Visa ou Paypal.",
      linkText: "Aprenda mais",
      delay: "400",
    },
    {
      image: Feature2Img,
      bgImage: Feature2bg,
      title: "Encontre seu Produto",
      description: "Nós oferecemos vendas de produtos através da Internet.",
      linkText: "Aprenda mais",
      delay: "700",
    },
    {
      image: Feature3Img,
      bgImage: Feature3bg,
      title: "Impressão",
      description:
        "Serviço de impressão oferece conveniência se algum dia precisar da impressão de dados de alguma compra feita.",
      linkText: "Aprenda mais",
      delay: "1000",
    },
    {
      image: Feature4Img,
      bgImage: Feature4bg,
      title: "Produto recebido",
      description:
        "Em nosso App você pode ver o motivo do atraso do seu pedido.",
      linkText: "Aprenda mais",
      delay: "1300",
    },
  ],
};

export const ctaData = {
  title: "Entre em contato conosco",
  subtitle: "Ganhe 1 semana grátis limitada, experimente nossos recursos.",
  btnText1: "Mais",
  btnText2: "Acessar",

};

export const footerData = {
  logo: Logo,
  address: 'Product Texas, 234 Bokki Avenue Street BMW 99388',
  email: 'gabrielfootze@gmail.com',
  phone: '(62) 9953-96918 (Main)',
  list1: [
    {
      name: 'Perfil',
      href: 'https://meu-portfolio-livid.vercel.app/',
    },
    {
      name: 'Recursos',
      href: '#',
    },
    {
      name: 'Projetos',
      href: 'https://meu-portfolio-livid.vercel.app/project',
    },
  ],
  list2: [
    {
      name: 'Suporte',
      href: '#',
    },
    {
      name: 'Contato',
      href: 'https://meu-portfolio-livid.vercel.app/contact',
    },
    {
      name: 'Guia',
      href: '#',
    },
    {
      name: 'Reports',
      href: '#',
    },
    {
      name: 'Q & A',
      href: '#',
    },
  ],
  socialList: [
    {
      icon: <FaLinkedinIn />,
      href: 'https://www.linkedin.com/in/gabriel-andrade-52a803205/',
    },
    {
      icon: <FaGithub />,
      href: 'https://github.com/Suntzu1000',
    },
  ],
};

export const copyData = {
  text: '© Product Go, 2022. All rights reserved. Gabriel Andrade Dos Santos',
  icon: <BsChatDotsFill />,
};
