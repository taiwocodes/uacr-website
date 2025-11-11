import mrBiggsNavImage from '@/assets/images/nav-images/mrbiggs-nav-image.png'
import MrBiggsLogo from '@/assets/images/mrbiggs-logo.png'
import debonairsNavImage from '@/assets/images/nav-images/debonairs-nav-image.png'
import DebonairsLogo from '@/assets/images/debonairs-logo.png'
import iceCreamNavImage from '@/assets/images/nav-images/icecream-nav-image.png'
import IceCreamLogo from '@/assets/images/ice-cream-logo(2).png'
import CareersNavIcon from '@/assets/images/careers-nav-icon.png'
import OpenRolesNavImage from '@/assets/images/nav-images/open-roles-nav-image.png'
import CareersNavImage from '@/assets/images/nav-images/careers-nav-image.png'
import { Link, NewsItem } from './model'

export const navLinks: Link[] = [
  {
    title: "Brands",
    path: '/brands',
    subLinks: [
      { path: "/brands/mrbiggs", title: "Mr Biggs", image: mrBiggsNavImage, logo: MrBiggsLogo },
      { path: "/brands/debonairs", title: "Debonairs", image: debonairsNavImage, logo: DebonairsLogo },
      { path: "#", title: "Ice Cream", image: iceCreamNavImage, logo: IceCreamLogo },
    ],
  },
  {
    title: "About Us", path: "/about", subLinks: [
      { path: "/about", title: "About UACR" },
      { path: '/about/team', title: 'Team (Management and Board)' },
      { path: "/about/impact", title: "Impact" },
      { path: '/about/faq', title: "FAQ" },

    ]
  },
  { path: "/catering", title: "Catering" },
  { path: "/blogs", title: "Blogs" },
  {
    title: "Careers", path: "/careers", subLinks: [
      { path: "/careers/careers-at-uacr", title: "Careers at UACR", logo: CareersNavIcon, image: CareersNavImage },
      { path: "/careers/open-roles", title: "Open Roles", logo: CareersNavIcon, image: OpenRolesNavImage },
    ]
  },

]

export const ManagementTraineePrograms: NewsItem[] = [
  {
    image: '/images/career-images/management-trainee-1.png',
    title: 'UAC Foods Limited – Management Trainee Program',
    description: 'Join UACR, a subsidiary of UAC PLC, in building a rewarding career through structured learning in sales, manufacturing, and supply chain.',
    date: 'October 5, 2024',
  },
  {
    image: '/images/career-images/management-trainee-2.png',
    title: 'Grand Cereals Limited – Management Trainee Program',
    description: 'Join UACR, a subsidiary of UAC PLC, in building a rewarding career through structured learning in sales, manufacturing, and supply chain.',
    date: 'August 20, 2024',
  },
  {
    image: '/images/career-images/management-trainee-3.png',
    title: 'UAC Nigeria Management Trainee Scheme',
    description: 'A corporate-wide initiative by UAC of Nigeria PLC to develop fresh graduates into future managers through intensive business training and rotations.',
    date: 'April 18, 2024',
  }
]

export const GraduateTrainee: NewsItem[] = [

  {
    image: '/images/career-images/graduate-trainee-3.png',
    title: 'UACR Graduate Trainee Program – Marketing & Brand Development',
    description: 'Develop skills in digital marketing, campaign execution, and customer engagement across flagship food brands like Mr. Bigg’s and Debonairs Pizza.',
    date: 'June 15, 2024',
  },
  {
    image: '/images/career-images/graduate-trainee-4.png',
    title: 'UACR Graduate Trainee Program – Finance & Accounting',
    description: 'Build a solid finance foundation with rotational assignments in budgeting, auditing, and financial reporting.',
    date: 'April 8, 2024',
  },
  {
    image: '/images/career-images/graduate-trainee-5.png',
    title: 'UACR Graduate Trainee Program – Human Resources Track',
    description: 'Learn the ropes of people management, talent acquisition, and employee engagement in a fast-paced food services environment.',
    date: 'February 27, 2024',
  }
]