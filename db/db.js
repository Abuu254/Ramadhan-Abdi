export const bio = [
  "Hello there &#128075;",
  "I'm Ramadhan Abdi, currently pursuing a Computer Science degree at Yale University. Driven by a passion for software development and a profound belief in the transformative power of technology, my mission is to leverage these attributes in creating solutions that positively impact our world.",
  "Apart from coding, I love playing soccer, mentoring students, and participating in charity events.",
  "As a lifelong learner, I'm always seeking new knowledge and experiences to broaden my perspective and enhance my skills.",
  "Thanks for taking the time to learn a little about me!",
];

export const skills = [
  {
    title: "Programming Languages",
    skillName: "Python, C, C++, JavaScript",
    color: "1",
    percentage: "100",
  },
  {
    title: "Web Technologies",
    skillName: "HTML 5, CSS 3, Flask, React.js, Next.js",
    color: "6",
    percentage: "100",
  },
  {
    title: "Database Management",
    skillName: "SQLite, SQLAlchemy, MySQL",
    color: "4",
    percentage: "100",
  },
  {
    title: "Version Control",
    skillName: "Git",
    color: "7",
    percentage: "100",
  },
  {
    title: "Web Development",
    skillName: "Full-Stack Web Programming",
    color: "3",
    percentage: "100",
  },
  {
    title: "Data Analysis",
    skillName: "Data Structures, Algorithms, Data Exploration, Machine Learning",
    color: "5",
    percentage: "100",
  },
  {
    title: "Editor",
    skillName: "VS Code",
    color: "6",
    percentage: "100",
  },
];

export const projects = [
    {
      projectName: "Talks At Yale",
      image: "images/talksatyale.png",
      summary:
        "Led a team of five in developing “Talks at Yale,” a secure full-stack web application using Next.js, Flask, and SQLAlchemy, enhancing the user experience through optimized API routes and database queries. Spearheaded the design and implementation of key features, ensuring the application’s performance, security, and usability, contributing to a seamless user interface and robust backend infrastructure.",
      preview: "https://github.com/Abuu254/talksatyale",
      techStack: ["Reactjs", "Nextjs", "Flask", "SQLAlchemy"],
    },
    {
      projectName: "Toxic Comment Classification",
      image: "",
      summary:
        "Developed a TensorFlow-based model to classify toxic comments, addressing a key concern in the online community.",
      preview: "https://github.com/Abuu254/Toxic-Comment-Classification",
      techStack: ["Python", "tensorflow", "pandas", "sklearn"],
    },
  {
      projectName: "Commerce Website",
      image: "images/market.png",
      summary:
        "Implemented a dynamic and responsive web application for a marketplace platform using Flask, Python, and SQLAlchemy. Utilized various features such as user authentication, file uploads, and database management to enable users to list and purchase items.",
      preview: "https://github.com/Abuu254/talksatyale",
      techStack: ["Flask", "Python", "SQLAlchemy"],
    },
    {
      projectName: "Micro Operating System",
      image: "",
      summary:
        "Implemented a micro operating system in C, featuring user vs. kernel privilege separation, virtual memory management, and process lifecycle management. Designed and developed core OS functionalities, including process creation, virtual memory handling, and efficient resource cleanup enhancing system performance and stability.",
      preview:"https://github.com/Abuu254",
      techStack: ["C"],
    },
  ];

  export const experience = [
    {
      title: "Yale University|African American Studies Department Lab",
      duration: "June 2023 - Aug 2023",
      subtitle: "Data Research Assistant (python)",
      details: [
        "Developed web scraping scripts to facilitate comprehensive literature searches, collecting data from over 100 schools to enhance research on combating racism in healthcare. Engineered datasets that accurately account for race among medicine’s gatekeepers, extracting and processing over 4000 data entries from requested websites with 90%+ accuracy, advancing equitable healthcare practices."
      ],
      tags: ["Python", "Web Scraping", "Data Analysis"],
      icon: "heartbeat",
    },
    {
      title: "Yale Library | Digital Reformatting & Microfilm Services",
      duration: "September 2021 - May 2023",
      subtitle: "Student Imaging Specialist & Software Automation Assistant",
      details: [
        "Developed and deployed Python scripts to automate digitization, improving efficiency in locating requested folders from network storage. Contributed to the digitization of over 1000 rare library resources, making them accessible in the library catalog and aiding research efforts."
      ],
      tags: ["Python", "Automation", "Digitization"],
      icon: "archive",
    },
    {
      title: "Cross World Africa",
      duration: "June 2022 - August 2022",
      subtitle: "Data Analysis Intern",
      details: [
        "Conducted field visits to 18 CWA beneficiaries in Kenya, collected data, and drafted reports on program impact aiding in initiative refinement. Mentored 37 scholarship students and participated in charity events, supporting the organization’s mission to combat poverty and foster academic and personal success among youth."
      ],
      tags: ["Field Work", "Mentorship", "Charity"],
      icon: "globe-africa",
    },
  ];

  export const education = [
    {
      title: "Yale University",
      duration: "Expected Graduation: May 2025",
      subtitle: "Major: Computer Science",
      details: [
        "I am continually excited by the opportunities for intellectual growth at Yale, regularly exploring beyond the core curriculum to engage with diverse classes. This quest for knowledge is not confined to the classroom—I am constantly seeking to apply what I've learned in practical scenarios through the initiation and completion of various mini projects."
      ],
      tags: [ "Object-oriented programming (python)", "Data Structures & Programming Techniques (C & C++)", "Full-Stack Web Development (Flask, Next.js, HTML & CSS, SQL)", "Systems Programming & Computer Organization (C & Rust)", "Data Exploration & Analysis", "Introduction to Database Systems", "Introduction to Machine Learning", "Software Engineering", "Human-Computer Interaction"],
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
      }
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
        link: "https://ke.linkedin.com/in/abubakar-ramadhan-2112a4201",
      },

    ],
  },
];
