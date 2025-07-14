import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  reactjs,
  git,
  figma,
} from "../assets";

const technologies = [

  {
    name: "TypeScript",
    icon: "/ts.png",
  },  {
    name: "React Native",
    icon: "/reactnative.png",
  },
  {
    name: "Next.js",
    icon: "/nextjs.png",
  },
  {
    name: "Nuxt.js",
    // icon: "https://creazilla-store.fra1.digitaloceanspaces.com/icons/3254152/nuxt-icon-md.png",
    icon: "/nuxt.svg",
  },
  {
    name: "Python",
    icon: "https://th.bing.com/th/id/R.7494e83354e2662240d06630cc31f08d?rik=9tIRLZpYS9oTfQ&pid=ImgRaw&r=0",
  },
  {
    name: "Puppeteer",
    icon: "/puppeteer.png",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.icon-icons.com/icons2/2699/PNG/512/postgresql_src_logo_icon_170834.png",
  },
  {
    name: "Mongodb",
    icon: "https://th.bing.com/th/id/R.3bd34a07ea0d929a429bdb028ebf68f6?rik=fg2M4IMXM3s1eQ&pid=ImgRaw&r=0",
  },
  {
    name: "Tailwind CSS",
    icon: "/tailwindcss.svg",
  },
  {
    name: "Framer-Motion",
    icon: "/framer-motion.svg",
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Zod",
    icon: "/zod.webp",
  },
];

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Backend Systems & API Development",
    icon: backend,
  },
  {
    title: "Mobile App Development",
    icon: web,
  },
  {
    title: "System Quality Analysis",
    icon: mobile,
  },

  {
    title: "Database Systems & Process Automation",
    icon: creator,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "HaHuJobs",
    icon: "https://th.bing.com/th/id/OIP.DdXPSJPdZFN5UKYZkStFvgAAAA?w=171&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    iconBg: "#E6DEDD",
    date: "Jan 2020 - Feb 2021",
    points: [
      "Developed sophisticated, high-performance UIs, delivering seamless, device-responsive experiences.",
      "Enhanced UX with fluid animations and micro-interactions using advanced motion libraries.",
      "Seamlessly integrated complex APIs for dynamic, real-time user interactions",
      "Achieved flawless cross-device optimization, balancing visual impact and performance across all screen sizes.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Jiji Ethiopia",
    icon: "https://th.bing.com/th/id/OIP.jDAG6peIE-Ya1g7EQPHdZQHaHa?w=208&h=208&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    iconBg: "#383E56",
    date: "March 2021 - April 2023",
    points: [
      "Built and maintained scalable, high-performance backend systems to support seamless e-commerce transactions and user interactions.",
      "Designed and optimized APIs for secure, real-time data flow between the website, mobile app, and database.",
      "Implemented advanced authentication, authorization, and encryption protocols to ensure user and transaction data security.",
      "Integrated payment gateways, inventory management, and order processing systems for a streamlined, end-to-end shopping experience across platforms.",
    ],
  },

  {
    title: "Full Stack Developer",
    company_name: "Kiya Equb",
    icon: "https://kiyaequb.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FdQGbM0DR%2Fkiya-equb2.png&w=128&q=75",
    iconBg: "#383E56",
    date: "Jan 2023 - Current",
    points: [
      "Developed a secure, scalable full-stack solution for a Digital Equb system, enabling seamless saving and group contributions via web and mobile platforms.",
      "Built real-time, interactive dashboards for users and admins to track contributions, balances, and transactions with intuitive interfaces.",
      "Integrated payment gateways and secure authentication systems to ensure smooth and safe financial transactions across platforms.",
      "Implemented dynamic data flow between the website, mobile app, and backend, ensuring real-time updates and synchronization of user accounts and group activities.",
    ],
  },
  {
    title: "Database Administrator",
    company_name: "Addis Ababa University",
    icon: "https://weadapt.org/wp-content/uploads/2023/05/screenshot_2019-09-27_at_13.51.05.png",
    iconBg: "#383E56",
    date: "Oct 2023 - Current",
    points: [
      "Managed and optimized large-scale university databases to ensure high availability, security, and data integrity.",
      "Designed efficient database schemas and indexing strategies to support complex academic data requirements.",
      "Automated backup, recovery, and maintenance processes to safeguard critical institutional data.",
      "Collaborated with IT and academic departments to align database solutions with evolving university needs and compliance standards.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Jiji Ethiopia",
    description:
      "A leading online marketplace, connecting buyers and sellers for a wide range of products and services. It offers a user-friendly platform for individuals and businesses to buy and sell items like electronics, vehicles, fashion, and real estate, with a focus on convenience and security. The website and mobile app provide seamless, localized experiences, empowering users across Ethiopia to engage in digital commerce effortlessly.",
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "Puppeteer",
        color: "blue-text-gradient",
      },
      {
        name: "GraphQL",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "WebSockets",
        color: "green-text-gradient",
      },

      {
        name: "Docker",
        color: "pink-text-gradient",
      },
      {
        name: "CI/CD",
        color: "pink-text-gradient",
      },
      {
        name: "Microservices",
        color: "pink-text-gradient",
      },
    ],
    image: "https://assets.jiji.co.ke/static/img/no-image/share_no_image.jpeg",
    source_code_link: "#contact",
  },

  {
    name: "HahuJobs",
    description:
      "A cloud-based platform in Ethiopia, operates under Minab IT Solutions and offers a comprehensive service for job seekers and employers. It aggregates vacancies from various sources, classifies them according to international standards, and provides job alerts across multiple platforms including mobile apps, web interfaces, and bots like Telegram.",
    tags: [
      {
        name: "Nuxt.js",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Framer-Motion",
        color: "pink-text-gradient",
      },
      {
        name: "Webpack",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://cdn.hahu.jobs/public/agency/88a7e310-2d24-11ed-ac70-a7ac4aba1a68",
    source_code_link: "#contact",
  },
  {
    name: "Kiya Equb",
    description:
      "A modern digital platform revolutionizing the traditional Equb savings system in Ethiopia. The service connects users to a secure, efficient platform where they can engage in rotating savings and credit activities, which have been a longstanding cultural practice in Ethiopia. Through their website and mobile app, KiyaEqub allows users to save, invest, and track their financial contributions easily.",
    tags: [
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "RESTful APIs",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://kiyaequb.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FdQGbM0DR%2Fkiya-equb2.png&w=1920&q=75",
    source_code_link: "#contact",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  navLinks,
};
