import {
  SiAppwrite,
  SiExpress,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiReacthookform,
  SiReactrouter,
  SiSass,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiWebpack,
} from "@icons-pack/react-simple-icons";

const TECHNOLOGIES = [
  {
    id: 1,
    label: "TypeScript",
    icon: <SiTypescript color="default" size={16} />,
  },
  {
    id: 2,
    label: "React",
    icon: <SiReact color="default" size={16} />,
  },
  {
    id: 3,
    label: "Appwrite",
    icon: <SiAppwrite color="default" size={16} />,
  },
  {
    id: 4,
    label: "Tailwind CSS",
    icon: <SiTailwindcss color="default" size={16} />,
  },
  {
    id: 5,
    label: "shadcn/ui",
    icon: <SiShadcnui color="default" size={12} />,
  },
  {
    id: 6,
    label: "Motion",
    icon: (
      <svg viewBox="0 0 24 9" id="svg11275533685" width="16" height="16">
        <path
          d="M 9.062 0 L 4.32 8.992 L 0 8.992 L 3.703 1.971 C 4.277 0.882 5.709 0 6.902 0 Z M 19.656 2.248 C 19.656 1.006 20.623 0 21.816 0 C 23.009 0 23.976 1.006 23.976 2.248 C 23.976 3.49 23.009 4.496 21.816 4.496 C 20.623 4.496 19.656 3.49 19.656 2.248 Z M 9.872 0 L 14.192 0 L 9.45 8.992 L 5.13 8.992 Z M 14.974 0 L 19.294 0 L 15.592 7.021 C 15.018 8.11 13.585 8.992 12.392 8.992 L 10.232 8.992 Z"
          fill="var(--token-6d6f97c3-5f4a-41b8-a7b9-eff3df1acd75, rgb(255, 243, 18))"
        ></path>
      </svg>
    ),
  },
  {
    id: 7,
    label: "Context API",
    icon: <SiReact size={16} />,
  },
  {
    id: 8,
    label: "React Router",
    icon: <SiReactrouter color="default" size={16} />,
  },
  {
    id: 9,
    label: "Vite",
    icon: <SiVite color="default" size={16} />,
  },
  {
    id: 10,
    label: "React Hook Form",
    icon: <SiReacthookform color="default" size={16} />,
  },
  {
    id: 11,
    label: "JavaScript",
    icon: <SiJavascript size={16} />,
  },
  {
    id: 12,
    label: "Яндекс Расписания API",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.848.807a12 12 0 1 1-12 12 12 12 0 0 1 12-12Z"
          fill="#FC0"
        ></path>
        <path
          d="m14.998 18.275-1.326 1.17-2.99 2.834h4.902l5.746-5.744-5.728-5.728H10.7l.056.052 1.256 1.11 2.992 2.838H1.018c.203 1.208.59 2.378 1.15 3.468h12.83Z"
          fill="url(#serviceLogo)"
        ></path>
        <g filter="url(#serviceLogoFilter)">
          <path
            d="M10.1 14.807h4.904l-3-2.834-1.256-1.11-.07-.06h14a11.98 11.98 0 0 0-1.152-3.47H10.7l1.322-1.19 2.964-2.8h-4.902L4.356 9.07l5.744 5.738Z"
            fill="#fff"
          ></path>
        </g>
        <defs>
          <linearGradient
            id="serviceLogo"
            x1="11.174"
            y1="22.279"
            x2="11.174"
            y2="10.807"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FC3F1D"></stop>
            <stop offset="1" stopColor="#FF2700"></stop>
          </linearGradient>
          <filter
            id="serviceLogoFilter"
            x="3.727"
            y="2.923"
            width="21.162"
            height="12.304"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            ></feColorMatrix>
            <feOffset dx="-.21"></feOffset>
            <feGaussianBlur stdDeviation=".21"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0.0509804 0 0 0 0 0.137255 0 0 0 0 0.262745 0 0 0 0.05 0"></feColorMatrix>
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_15_8407"
            ></feBlend>
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_15_8407"
              result="shape"
            ></feBlend>
          </filter>
        </defs>
      </svg>
    ),
  },
  {
    id: 13,
    label: "Express",
    icon: <SiExpress color="default" size={16} />,
  },
  {
    id: 14,
    label: "Node.js",
    icon: <SiNodedotjs color="default" size={16} />,
  },
  {
    id: 15,
    label: "Webpack",
    icon: <SiWebpack color="default" size={16} />,
  },
  {
    id: 16,
    label: "Sass",
    icon: <SiSass color="default" size={16} />,
  },
];

export const technologiesById = Object.fromEntries(
  TECHNOLOGIES.map((item) => [item.id, item]),
);
