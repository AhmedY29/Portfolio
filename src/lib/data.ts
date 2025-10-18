import { IProject } from "../../types";

export const GENERAL_INFO = {
  email: "tasmirolislam@gmail.com",

  emailSubject: "Let's collaborate on a project",
  emailBody: "Hi Tajmirul, I am reaching out to you because...",

  oldPortfolio: "https://www.legacy.me.toinfinite.dev",
  upworkProfile: "https://www.upwork.com/freelancers/tajmirul",
};

export const SOCIAL_LINKS = [
  { name: "github", url: "https://github.com/Tajmirul" },
  { name: "linkedin", url: "https://www.linkedin.com/in/tajmirul" },
  { name: "facebook", url: "https://www.facebook.com/tajmirul.2000" },
  { name: "Old Version", url: GENERAL_INFO.oldPortfolio },
];

export const MY_STACK = {
  frontend: [
    {
      name: "JavaScript",
      icon: "/logo/js.png",
    },
    {
      name: "TypeScript",
      icon: "/logo/ts.png",
    },
    {
      name: "React",
      icon: "/logo/react.png",
    },
    {
      name: "Next.js",
      icon: "/logo/next.png",
    },
    {
      name: "Svelte",
      icon: "/logo/svelte.png",
    },
    {
      name: "Redux",
      icon: "/logo/redux.png",
    },
    {
      name: "Zustand",
      icon: "/logo/zustand.png",
    },
    {
      name: "Tailwind CSS",
      icon: "/logo/tailwind.png",
    },
    {
      name: "Material UI",
      icon: "/logo/mui.png",
    },
    {
      name: "ShadCN",
      icon: "/logo/shadcn.png",
    },
    {
      name: "GSAP",
      icon: "/logo/gsap.png",
    },
    {
      name: "Framer Motion",
      icon: "/logo/framer-motion.png",
    },
    {
      name: "Sass",
      icon: "/logo/sass.png",
    },
    {
      name: "Bootstrap",
      icon: "/logo/bootstrap.svg",
    },
  ],
  backend: [
    {
      name: "Node.js",
      icon: "/logo/node.png",
    },
    {
      name: "Express.js",
      icon: "/logo/express.png",
    },
    {
      name: "Supbase",
      icon: "/logo/supabase.jpg",
    },
  ],
  database: [
    {
      name: "MySQL",
      icon: "/logo/mysql.svg",
    },
    {
      name: "PostgreSQL",
      icon: "/logo/postgreSQL.png",
    },
    {
      name: "MongoDB",
      icon: "/logo/mongodb.svg",
    },
    {
      name: "Prisma",
      icon: "/logo/prisma.png",
    },
    {
      name: "Drizzle",
      icon: "/logo/drizzle.png",
    },
  ],
//   tools: [
//     {
//       name: "Git",
//       icon: "/logo/git.png",
//     },
//      {
//        name: "Docker",
//        icon: "/logo/docker.svg",
//      },
//     {
//       name: "AWS",
//       icon: "/logo/aws.png",
//     },
//   ],
};

export const PROJECTS: IProject[] = [
  {
    title: "Bus Line",
    slug: "bus-line",
    liveUrl: "https://electroev.co.uk/",
    year: 2025,
    description: `
    A modern transportation platform built to connect students with private bus drivers, solving daily commute challenges for schools and universities. <br/> <br/>
    
    Key Features:<br/>
    <ul>
      <li>🔐 Multi-Role Authentication: Separate login systems for Admin, Driver, and Student</li>
      <li>🎫 Real-Time Booking: Interactive booking system with live trip updates</li>
      <li>🗺️ Google Maps Integration: Interactive maps with route visualization and real-time tracking</li>
      <li>👨‍💼 Admin Dashboard: Complete CRUD operations for users, drivers, buses, trips, and destinations</li>
      <li>🚗 Driver Portal: Trip management, passenger tracking, and earnings overview</li>
      <li>🎓 Student Portal: Trip booking, history view, and live bus tracking</li>
      <li>⭐ Review System: Customer testimonials and rating system</li>
      <li>📱 Fully Responsive: Modern, professional design optimized for all devices</li>
    </ul><br/>
    
    Technical Highlights:
    <ul>
      <li>Implemented real-time communication using Socket.io for live tracking</li>
      <li>Built secure JWT-based authentication with role-based access control</li>
      <li>Integrated Cloudinary for efficient image management and uploads</li>
      <li>Developed coordinate extraction system for Google Maps links</li>
      <li>Created modern toast notification system replacing browser alerts</li>
      <li>Optimized performance with code splitting and lazy loading</li>
    </ul>
    `,
    role: `
    Team Leader & Backend Lead & Full-Stack Contributor (Team Project) <br/>
    Led backend development and contributed to full-stack integration:
    <ul>
      <li>🔧 Backend Architecture: Built complete Node.js/TypeScript backend with Express framework</li>
      <li>🗄️ Database Design: Designed and implemented MongoDB schemas with Mongoose ODM</li>
      <li>🔒 Authentication System: Developed JWT-based authentication with bcrypt encryption and role-based access control</li>
      <li>🌐 RESTful API: Created comprehensive API endpoints for all platform features</li>
      <li>⚡ Real-Time Features: Implemented Socket.io for live bus tracking and instant updates</li>
      <li>☁️ Cloud Integration: Configured Cloudinary for secure image uploads and management</li>
      <li>🔗 Frontend Integration: Connected backend APIs with React frontend and handled data flow</li>
      <li>🎨 UI Development: Built key frontend pages and components using React and Tailwind CSS</li>
      <li>🌍 Localization: Implemented full Arabic/English translation system across the platform</li>
      <li>🚀 Deployment: Deployed backend on Render with production-ready configuration</li>
      <li>🐛 Testing & Debugging: Ensured API reliability and handled error management</li>
    </ul>
  `,
    techStack: [
      "MERN Stack",
      "Tailwind CSS",
      "ShadCN",
      "Framer Motion",
      "Socket.io",
      "Mapbox",
      "i18next",
      "JWT",
      "Cloudinary",
    ],
    thumbnail: "/projects/thumbnail/busline-thumbnail.png",
    longThumbnail: "/projects/long/busline-thumbnail.png",
    images: [
      "/projects/images/busline-1.png",
      "/projects/images/busline-2.png",
      "/projects/images/busline-3.png",
      "/projects/images/busline-4.png",
      "/projects/images/busline-5.png",
    ],
  },
  {
    title: "Maskn",
    slug: "maskn",
    techStack: [
      "MERN Stack",
      "Zustand",
      "Cloudinary",
      "Material UI",
      "Leaflet Map",
      "JWT",
      "Mailtrap",
    ],
    thumbnail: "/projects/thumbnail/maskn-thumbnail.png",
    longThumbnail: "/projects/long/maskn-thumbnail.png",
    images: [
      "/projects/images/maskn-1.png",
      "/projects/images/maskn-2.png",
      "/projects/images/maskn-3.png",
      "/projects/images/maskn-4.png",
      "/projects/images/maskn-5.png",
    ],
    liveUrl: "https://mskan.onrender.com/",
    year: 2024,
    description: `
    A comprehensive real estate platform connecting users with property listings and real estate agencies for buying and renting properties across Saudi Arabia. <br/> <br/>
    
    Key Features:<br/>
    <ul>
      <li>🔐 Multi-Role Authentication: Separate systems for Admin, Individual Users, and Real Estate Companies</li>
      <li>🏠 Property Management: Full CRUD operations for property listings with detailed information</li>
      <li>🔍 Advanced Search & Filtering: Search by location, price range, property type, rooms, and more</li>
      <li>🗺️ Interactive Maps: Leaflet/OpenStreetMap integration with property markers and location tracking</li>
      <li>💼 Real Estate Agency System: Companies can manage multiple employees and property listings</li>
      <li>⭐ Save Properties: Users can bookmark favorite properties for later viewing</li>
      <li>📊 Dashboards: Customized control panels for users, agencies, and administrators</li>
      <li>📱 Fully Responsive: Optimized design for all device sizes</li>
      <li>📧 Email Verification: Mailtrap integration for account verification and password reset</li>
      <li>🌐 Google Maps Coordinate Extraction: Automatic extraction of coordinates from Google Maps links</li>
    </ul><br/>
    
    Technical Highlights:
    <ul>
      <li>Built modern UI with Material-UI (MUI) components and custom styling</li>
      <li>Implemented state management using Zustand for efficient data flow</li>
      <li>Integrated Cloudinary for scalable image and video storage</li>
      <li>Developed RESTful API with Express and MongoDB for data persistence</li>
      <li>Created dynamic property filtering system with multiple search criteria</li>
      <li>Implemented secure JWT-based authentication with role-based access control</li>
      <li>Built company management system with employee roles and permissions</li>
      <li>Integrated interactive maps with custom markers and property visualization</li>
    </ul>
    `,
    role: `
    Full-Stack Developer <br/>
    Independently developed the entire platform from scratch:
    <ul>
      <li>⚛️ Frontend Development: Built complete React application with Vite, Material-UI, and custom components</li>
      <li>🔧 Backend Architecture: Designed and implemented Node.js/Express REST API with MongoDB</li>
      <li>🗄️ Database Design: Created comprehensive MongoDB schemas using Mongoose ODM</li>
      <li>🔒 Authentication System: Implemented JWT authentication with bcryptjs encryption and role-based access</li>
      <li>🌐 Maps Integration: Integrated Leaflet for interactive property location maps</li>
      <li>☁️ Cloud Integration: Configured Cloudinary for image and video uploads</li>
      <li>📧 Email System: Set up Mailtrap for email verification and password reset functionality</li>
      <li>🎨 UI/UX Design: Created responsive layouts with Material-UI and custom CSS</li>
      <li>🔍 Search Engine: Built advanced filtering system with multiple search parameters</li>
      <li>🏢 Agency Management: Developed complete company system with employee management and roles</li>
      <li>💾 State Management: Implemented Zustand stores for efficient client-side state</li>
      <li>🚀 Deployment: Deployed full-stack application with production-ready configuration</li>
      <li>🧪 Testing & Debugging: Ensured system reliability and performance optimization</li>
    </ul>
  `,
  },
    {
    title: "Travel Planner AI-Powered",
    slug: "travel-planner",
    techStack: ["React.js", "Gemini API","i18n", "GSAP"],
    thumbnail: "/projects/thumbnail/travel-thumbnail.png",
    longThumbnail: "/projects/long/travel-thumbnail.png",
    images: [
      "/projects/images/travel-1.png",
      "/projects/images/travel-2.png",
    ],
    liveUrl: "https://travel-plan1.netlify.app/",
    year: 2025,
    description: `A web application designed to help users plan their trips. The website offers features such as creating customized travel itineraries, exploring popular destinations, and accessing trip details, integrated with Gemini, Build your plan by Asking some questions using Gemini Api.`,
    role: ``,
  },
    {
    title: "Activision - Clone",
    slug: "activision-clone",
    techStack: ["React.js", "Tailwind CSS"],
    thumbnail: "/projects/thumbnail/activision-thumbnail.png",
    longThumbnail: "/projects/long/activision-thumbnail.png",
    images: [
      "/projects/images/activision-1.png",
      "/projects/images/activision-2.png",
      "/projects/images/activision-3.png",
    ],
    liveUrl: "https://activision-clone-ahmed.netlify.app/",
    year: 2025,
    description: `This is a clone of Activision, meticulously recreated with React and Tailwind. While retaining the original design, I identified and fixed several UI/functional issues.This demonstrates both replication skills and problem-solving in front-end development`,
    role: ``,
  },

  {
    title: "Landing Page",
    slug: "landing-page",
    techStack: ["HTML", "CSS", "AOS"],
    thumbnail: "/projects/thumbnail/landing-thumbnail.png",
    longThumbnail: "/projects/long/landing-thumbnail.png",
    images: [
      "/projects/thumbnail/landing-thumbnail.png",
    ],
    liveUrl: "https://ahmedy29.github.io/Landing-1/",
    year: 2024,
    description:
      "A modern and professional landing page for a project management application. The page features a responsive design with smooth scroll animations using AOS library. It includes multiple sections: hero banner, client logos, feature highlights, customer testimonials, achievement metrics, tool integrations, mobile app promotion, and footer. Built with HTML5, CSS3, and includes a clean purple and cyan color scheme. The design is fully responsive and optimized for all devices, showcasing the app's capabilities and encouraging user engagement through strategic call-to-action buttons.",
    role: ``,
  },
  {
    title: "Youtube Clone",
    slug: "youtube-clone",
    techStack: ["React.js", "Tailwind CSS", "Youtube API"],
    thumbnail: "/projects/thumbnail/youtube-thumbnail.png",
    longThumbnail: "/projects/long/youtube-thumbnail.png",
    images: [
      "/projects/images/youtube-1.png",
      "/projects/images/youtube-2.png",
      "/projects/images/youtube-3.png",
    ],
    liveUrl: "https://youtube-clone-kfni.onrender.com/",
    year: 2025,
    description:
      "This is a clone of Youtube, meticulously recreated with React and Tailwind. While retaining the original design, I identified and fixed several UI/functional issues.This demonstrates both replication skills and problem-solving in front-end development.",
    role: ``,
  },
  {
    title: "Tuwaiq Academy - Clone",
    slug: "tuwaiq-clone",
    techStack: ["HTML", "CSS", "Bootstrap"],
    thumbnail: "/projects/thumbnail/tuwaiq-thumbnail-2.png",
    longThumbnail: "/projects/long/tuwaiq-thumbnail.png",
    images: [
      "/projects/images/tuwaiq-1.png",
      "/projects/images/tuwaiq-2.png",
    ],
    liveUrl: "https://ahmedy29.github.io/Tuwaiq-Clone/",
    year: 2025,
    description:
      "This is a clone of Tuwaiq, meticulously recreated with HTML,CSS and Bootstrap. While retaining the original design, I identified and fixed several UI/functional issues.This demonstrates both replication skills and problem-solving in front-end development.",
    role: ``,
  },
  {
    title: "Subscription Tracker - API",
    slug: "subscription-tracker",
    techStack: ["TypeScript","Node.js", "Express", "MongoDB", "JWT", "Bcrypt", "Nodemailer", "Arcjet"],
    thumbnail: "/projects/thumbnail/subscription-thumbnail.png",
    longThumbnail: "/projects/long/subscription-thumbnail.png",
    images: [
      "/projects/thumbnail/subscription-thumbnail.png",
    ],
    sourceCode: "https://github.com/AhmedY29/Subscription-Tracker-Backend",
    year: 2025,
    description: "A comprehensive RESTful API for managing subscriptions with user authentication, email notifications, and advanced security features built with Node.js, Express, TypeScript, and MongoDB.",
    role: ``,
  },
  {
    title: "Car Dealership - API",
    slug: "car-dealership",
    techStack: ["TypeScript","Node.js", "Express", "MongoDB", "JWT", "Bcrypt", "Winson", "Helmet"],
    thumbnail: "/projects/thumbnail/car-dealership-thumbnail.png",
    longThumbnail: "/projects/long/car-dealership-thumbnail.png",
    images: [
      "/projects/thumbnail/car-dealership-thumbnail.png",
    ],
    sourceCode: "https://github.com/AhmedY29/express-carDealer-mongo",
    year: 2025,
    description: "A RESTful API for managing car dealerships, car manufacturers, and vehicle inventory built with Node.js, Express, TypeScript, and MongoDB.",
    role: ``,
  },
];

export const MY_EXPERIENCE = [
  {
    title: "Web Developer",
    company: "Freelancer",
    duration: "July 2025 - Present",
  },
  {
    title: "Full-Stack JavaScript Developer",
    company: "Tuwaiq Academy Bootcamp",
    duration: "Apr 2025 - July 2025",
  },
  {
    title: "IT Specialist (COOP)",
    company: "Labor Office",
    duration: "Jan 2022 - May 2022",
  },
];
