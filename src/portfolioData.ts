export const skillsListData = {
  frontend: [
    {
      title: "HTML5, CSS3, Sass",
      subSkills: [],
    },
    { title: "JavaScript (ES6/ES7), TypeScript", subSkills: [] },
    {
      title: "React.js",
      subSkills: [
        "React hooks",
        "Redux.js",
        "Redux-thunk",
        "Redux-saga",
        "Recoil",
        "React Query",
        "Apollo client",
        "React leaflet",
        "Styled-components",
        "Material UI",
        "React BootStrap",
      ],
    },
    {
      title: "Testing",
      subSkills: ["Jest", "React testing library"],
    },
  ],
  backend: [
    { title: "Node.js", subSkills: ["Express.js", "Mongoose"] },
    { title: "Database", subSkills: ["MongoDB"] },
    { title: "API", subSkills: ["REST", "GraphQL"] },
  ],
  tools: [
    { title: "Git", subSkills: [] },
    { title: "Webpack", subSkills: [] },
    { title: "Github Actions", subSkills: [] },
    { title: "Firebase", subSkills: [] },
    { title: "Visual Studio Code", subSkills: [] },
  ],
};

export const projectsListData = [
  {
    title: "Search Local",
    link: "https://search-local-c867f.web.app/",
    description:
      "Shows details of local businesses for a specified place, uses yelp GraphQL api.",
    tags: [
      "React.js",
      "TypeScript",
      "React leaflet",
      "Styled-components",
      "Framer motion",
      "Node.js",
      "Express.js",
      "GraphQL",
    ],
  },
  {
    title: "Code Overview",
    link: "https://code-overview.vercel.app/",
    description: "Shows authenticated user's public Github repository details",
    tags: [
      "React.js",
      "TypeScript",
      "React router dom",
      "Tailwind CSS",
      "Github's GraphQL api",
      "Node.js",
      "Express",
    ],
  },
];
