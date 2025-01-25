export const bio = [
  "Hello there &#128075;",
  "I'm Ramadhan Abdi, a B.S. in Computer Science candidate at Yale University. I’m passionate about leveraging software engineering and technology to create solutions that positively impact our world.",
  "I’m affiliated with ColorStack and CodePath, and beyond coding, I love playing soccer, mentoring students, and participating in charity events.",
  "I’m continuously exploring new technologies—like Rust—to broaden my skill set and deepen my problem-solving capabilities.",
  "Thanks for taking the time to learn a little about me!",
];

export const skills = [
  {
    title: "Programming Languages",
    skillName: "Python, C, C++, Rust, JavaScript",
    color: "1",
    percentage: "100",
  },
  {
    title: "Web Technologies",
    skillName: "React, Next.js, HTML 5, CSS 3",
    color: "6",
    percentage: "100",
  },
  {
    title: "Database Management",
    skillName: "MySQL, PostgreSQL, SQLAlchemy",
    color: "4",
    percentage: "100",
  },
  {
    title: "Cloud & Containers",
    skillName: "AWS, Docker",
    color: "2",
    percentage: "100",
  },
  {
    title: "Data & ML Frameworks",
    skillName: "Pandas, PyTorch, TensorFlow",
    color: "5",
    percentage: "100",
  },
  {
    title: "Version Control & Collaboration",
    skillName: "Git, GitHub",
    color: "7",
    percentage: "100",
  },
  {
    title: "Systems Programming & OS",
    skillName: "Unix/Linux, C, C++",
    color: "3",
    percentage: "100",
  },
];

export const projects = [
  {
    projectName: "Virtual Art Gallery",
    image: "images/art.png",
    summary:
      "Developed a full-stack Virtual Art Gallery web application using React, Node.js, Express, and PostgreSQL, enabling users to explore over 182,000 art pieces with advanced search and filtering. Deployed on AWS with Docker and NGINX, achieving 98% uptime and faster page loads.",
    preview: "https://yuag-frontend.vercel.app/",
    techStack: ["React", "Node.js", "Express", "AWS", "Docker"],
  },
  {
    projectName: "TalksAtYale",
    image: "images/talksatyale.png",
    summary:
      "Led backend development for a web application built with React, Flask, and SQL, implementing RESTful APIs, CAS login, events scraping, friend features, and optimized database queries to manage 200+ school events. Enabled 50+ users to efficiently search and calendar events.",
    preview: "https://github.com/Abuu254/talksatyale",
    techStack: ["React", "Next.js", "Flask", "SQL"],
  },
  {
    projectName: "Commerce Website",
    image: "images/market.png",
    summary:
      "Implemented a dynamic and responsive marketplace platform using Flask, Python, and SQLAlchemy. Utilized user authentication, file uploads, and database management to enable product listings and purchases.",
    preview: "https://github.com/Abuu254/MarketPlace",
    techStack: ["Flask", "Python", "SQLAlchemy"],
  },
];

export const experience = [
  {
    title: "Yale University – New Haven, CT",
    duration: "June 2023 - August 2023",
    subtitle: "Data Research Analyst (Python)",
    details: [
      "Designed and implemented Python-based web scraping scripts to efficiently extract data from 100+ medical schools, reducing data collection time by 70%.",
      "Engineered and managed datasets of 4000+ entries with 90%+ data accuracy, enabling advanced analytics on equitable healthcare research.",
      "Collaborated with research teams to automate data integration, reducing manual data handling by 50% and streamlining research workflows.",
    ],
    tags: ["Python", "Web Scraping", "Data Analysis"],
    icon: "heartbeat",
  },
  {
    title: "Yale Library | Digital Preservation Services",
    duration: "September 2021 - May 2023",
    subtitle: "Student Imaging Specialist & Software Automation Assistant",
    details: [
      "Developed Python scripts to automate complex digitization processes, reducing manual efforts by 8 hours/week and improving folder search efficiency by 40%.",
      "Digitized 1000+ rare library resources using LIMB Processing and integrated them into the library catalog, boosting resource accessibility by 80%.",
      "Collaborated with cross-functional teams to modernize 100,000+ library resources, improving user access by 60%.",
    ],
    tags: ["Python", "Automation", "Digitization"],
    icon: "archive",
  },
  {
    title: "Cross World Africa",
    duration: "June 2022 - August 2022",
    subtitle: "Data Analysis Intern",
    details: [
      "Analyzed income growth and wealth expansion data from 18 CWA beneficiaries, resulting in a 30% increase in training efficacy and 25% revenue boost.",
      "Authored a 10-page report recommending targeted microfinance initiatives, improving program effectiveness by 40%.",
      "Mentored 37 students through weekly academic coaching sessions, reinforcing leadership and communication skills.",
    ],
    tags: ["Data Analysis", "Mentorship", "Field Work"],
    icon: "globe-africa",
  },
];

export const education = [
  {
    title: "Yale University",
    duration: "Expected Graduation: May 2025",
    subtitle: "B.S. in Computer Science",
    details: [
      "Relevant Coursework: Object-Oriented Programming, Algorithms, Data Structures & Programming Techniques, Full-Stack Web Development, Systems Programming (C, C++), Data Exploration & Analysis, Database Systems, Introduction to Machine Learning, Software Engineering, Human-Computer Interaction, Computer System Design, Computer System Security.",
      "Affiliations: ColorStack, CodePath",
      "I regularly explore beyond the core curriculum to engage with diverse classes and apply my knowledge through various mini-projects."
    ],
    tags: [
      "OOP",
      "Algorithms",
      "Full-Stack",
      "Systems Programming",
      "Machine Learning",
      "Software Engineering",
    ],
    icon: "university",
  },
];

export const footer = [
  {
    label: "Dev Profiles",
    data: [
      {
        text: "GitHub",
        link: "https://github.com/Abuu254",
      },
    ],
  },
  {
    label: "Resources",
    data: [
      {
        text: "Enable Dark/Light Mode",
        func: "enableDarkMode()",
      },
    ],
  },
  {
    label: "Social Profiles",
    data: [
      {
        text: "Linkedin",
        link: "https://www.linkedin.com/in/abuu254",
      },
    ],
  },
];
