import mrBiggsNavImage from '@/assets/images/nav-images/mrbiggs-nav-image.png'
import MrBiggsLogo from '@/assets/images/mrbiggs-logo.png'
import debonairsNavImage from '@/assets/images/nav-images/debonairs-nav-image.png'
import DebonairsLogo from '@/assets/images/debonairs-logo.png'
import iceCreamNavImage from '@/assets/images/nav-images/icecream-nav-image.png'
import IceCreamLogo from '@/assets/images/ice-cream-logo.png'
import CareersNavIcon from '@/assets/images/careers-nav-icon.png'
import OpenRolesNavImage from '@/assets/images/nav-images/open-roles-nav-image.png'
import CareersNavImage from '@/assets/images/nav-images/careers-nav-image.png'
import { Link } from './model'

export const navLinks: Link[] = [
  {
    title: "Brands",
    subLinks: [
      { path: "/mrbiggs", title: "Mr Biggs", image: mrBiggsNavImage, logo: MrBiggsLogo },
      { path: "/debonairs", title: "Debonairs", image: debonairsNavImage, logo: DebonairsLogo },
      { path: "/ice-cream", title: "Ice Cream", image: iceCreamNavImage, logo: IceCreamLogo },
    ],
  },
  {
    title: "About Us", subLinks: [
      { path: "/about", title: "About UACR" },
      { path: '/team', title: 'Team (Management and Board)' },
      { path: "/impact", title: "Impact" },
      { path: '/faq', title: "FAQ" },

    ]
  },
  { path: "/news", title: "News" },
  {
    title: "Careers", subLinks: [
      { path: "/careers-at-uacr", title: "Careers at UACR", logo: CareersNavIcon, image: CareersNavImage },
      { path: "/open-roles", title: "Open Roles", logo: CareersNavIcon, image: OpenRolesNavImage },
    ]
  },
  { path: "/catering", title: "Catering" },
]
