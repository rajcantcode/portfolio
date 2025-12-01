export type Project = {
  title: string;
  description: Array<string>;
  techStack: Array<string>;
  liveLink: string | null;
  repoLink: string;
  thumbnail: string;
};

export const projects: Array<Project> = [
  {
    title: "Mp4Together",
    description: [
      "Built a webapp to watch youtube or local videos on your device together with friends and family using react, node.js, mongodb, and typescript",
      "Supports room functionality, wherein participants can communicate over text chat and live audio calling",
      "Implemented sfu architecture and WebRTC for audio communication with mediasoup to overcome limitations of mesh topology",
    ],
    liveLink: "https://mp4together.live",
    repoLink: "https://github.com/rajcantcode/Mp4Together-client",
    thumbnail: "mp4together.webp",
    techStack: [
      "React",
      "Redux",
      "Node.js",
      "MongoDB",
      "TypeScript",
      "WebRTC",
      "GCP",
    ],
  },
  {
    title: "Dingit (Reddit clone)",
    description: [
      "Built a full-stack reddit clone using next.js, postgresql, typescript",
      "Implemented Authentication using NextAuth & Google, image uploads & link previews, custom feed for authenticated users",
      "Implement infinite scrolling by using virtualization",
    ],
    techStack: ["Next.js", "PostgreSQL", "TypeScript", "Prisma", "NextAuth"],
    liveLink: "https://dingit.vercel.app",
    thumbnail: "dingit.webp",
    repoLink: "https://github.com/rajcantcode/dingit",
  },
  {
    title: "Mediasoup SFU",
    description: [
      "Integrated a Selective Forwarding Unit (SFU) using mediasoup for multi-party audio/video communication",
      "Integrated WebRTC protocols to ensure low-latency and high-quality media streaming",
    ],
    techStack: ["mediasoup", "WebRTC", "Typescript"],
    liveLink: null,
    repoLink: "https://github.com/rajcantcode/Mp4Together-sfu",
    thumbnail: "SFU_Architecture.webp",
  },
  {
    title: "HTTP Parser",
    description: [
      "Developed a HTTP parser using Go and the builtin TCP(net) package",
      "Implemented parsing of HTTP requests, including headers and body",
    ],
    techStack: ["Go", "TCP"],
    liveLink: null,
    repoLink: "https://github.com/rajcantcode/tcpfromhttp",
    thumbnail: "go.webp",
  },
];

export const skills = [
  {
    title: "Programming Languages",
    skills: "JavaScript, TypeScript, Java, Go",
  },
  {
    title: "Frameworks & Libraries",
    skills: "React, Next.js, Node.js, Express.js",
  },
  {
    title: "Databases",
    skills: "PostgreSQL, MongoDB, Redis",
  },
  {
    title: "Tools & Platforms",
    skills: "Git, Github, Docker, GCP, Vercel",
  },
];
