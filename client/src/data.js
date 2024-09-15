// import icons
import { FaYoutube, FaInstagram, FaGithub } from 'react-icons/fa';
import { BsChatDotsFill } from 'react-icons/bs';

// import images
import AboutImg from '../src/assets/img/about.png';
import Feature1Img from '../src/assets/img/features/feature1.png';
import Feature2Img from '../src/assets/img/features/feature2.png';
import Feature3Img from '../src/assets/img/features/feature3.png';
import Feature4Img from '../src/assets/img/features/feature4.png';
import Avatar1Img from '../src/assets/img/testimonials/avatar1.png';
import Avatar2Img from '../src/assets/img/testimonials/avatar2.png';
import Avatar3Img from '../src/assets/img/testimonials/avatar3.png';
import LogoV2 from '../src/assets/img/logo-v2.png';
import HeroImage from '../src/assets/img/hero-img.png';
import Feature1BgImg from '../src/assets/img/features/feature1_bg.png';
import Feature2BgImg from '../src/assets/img/features/feature2_bg.png';
import Feature3BgImg from '../src/assets/img/features/feature3_bg.png';
import Feature4BgImg from '../src/assets/img/features/feature4_bg.png';

export const navigationData = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Offre de stage',
    path: 'offre-de-stage',
  },
  {
    name: "Offre d'emploi",
    path: "offre-d'emploi",
  },
  {
    name: 'Contact',
    path: 'contact',
  },
];

export const heroData = {
  title: ` Order Products Faster Easier`,
  subtitle:
    'Order your favorite foods at any time and we will deliver them right to where you are.',
  btnText: 'Get Started',
  image: HeroImage,
};

export const aboutData = {
  image: AboutImg,
  title: 'Find Out A Little More About Us',
  subtitle:
    'We are a company dedicated to the distribution of products by delivery to your home or to the place where you are, with the best quality of delivery.',
};

export const featuresData = {
  title: 'Some Services We Offer',
  subtitle:
    'With our app you can view the route of your order, from our local headquarters to the place where you are. Look for the app now!',
  list: [
    {
      image: "https://beta.coficab.com/wp-content/uploads/2021/06/ecof.jpg",
      bgImage: Feature1BgImg,
      title: 'Electromobility Cables',
      description:
        'High voltage cables for ELECTROMOBILITY',
      linkText: 'Learn more',
      delay: '400',
    },
    {
      image:"https://beta.coficab.com/wp-content/uploads/2021/06/ecof-charge.jpg",
      bgImage: Feature2BgImg,
      title: 'Charging Cables',
      description:
        'According to the plugins in the market for HYBRID AND FULL ELECTRIC CARS',
      linkText: 'Learn more',
      delay: '700',
    },
    {
      image: "https://beta.coficab.com/wp-content/uploads/2021/06/cof-data.jpg",
      bgImage: Feature3BgImg,
      title: 'Data Cables',
      description:
        'For CONNECTIVITY to be used in multimedia applications',
      linkText: 'Learn more',
      delay: '1000',
    },
    {
      image: "https://beta.coficab.com/wp-content/uploads/2021/06/cof-sense.jpg",
      bgImage: Feature4BgImg,
      title: 'Sensor Cables',
      description:
        'In our app you can see the delay time of your order...',
      linkText: 'Learn more',
      delay: '1300',
    },
  ],
};

export const testimonialsData = [
  {
    image: Avatar1Img,
    name: 'Serena',
    web: 'rena.com',
    message:
      'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.',
    delay: '300',
  },
  {
    image: Avatar2Img,
    name: 'Natalia',
    web: 'nataliya.com',
    message:
      'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.',
    delay: '600',
  },
  {
    image: Avatar3Img,
    name: 'Vebin',
    web: 'vebin.com',
    message:
      'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.',
    delay: '900',
  },
];

export const ctaData = {
  title: 'Contact Us From Here',
  subtitle: 'Get limited 1 week free try our features!',
  btnText1: 'Learn more',
  btnText2: 'Request Demo',
};

export const footerData = {
  logo: LogoV2,
  address: 'Mailing Address : 40, rue 18 Janvier 1952, 1001 Tunis RP – TUNISIA',
  email: 'info@coficab.com',
  phone: '(+216) 71 156 000',
  list1: [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: "Offre d'emploi",
      href: '#',
    },
    {
      name: 'Offer de stage',
      href: '#',
    },
    {
      name: 'Conatct',
      href: '#',
    },
  ],
  list2: [
    {
      name: 'Support',
      href: '#',
    },
    {
      name: 'Sign Up',
      href: '#',
    },
    {
      name: 'Guide',
      href: '#',
    },
    {
      name: 'Reports',
      href: '#',
    },
   
  ],
  socialList: [
    {
      icon: <FaYoutube color='red'/>,
      href: '#',
    },
    {
      icon: <FaInstagram color='#f64354'/>,
      href: '#',
    },
    {
      icon: <FaGithub color='black' />,
      href: '#',
    },
  ],
};

export const copyrightData = {
  text: '© Product Texas, 2022. All rights reserved. Company Registration Number: 09833888.',
  icon: <BsChatDotsFill />,
};
