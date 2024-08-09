"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";

import { ScrollArea } from "../../components/ui/scroll-area";
import { motion } from "framer-motion";
import { list } from "postcss";

const about = {
  title: "About me",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam libero omnis, molestiae",
  info: [
    { fieldName: "Name", fieldValue: "Hassan Iqbal" },
    { fieldName: "Phone", fieldValue: "(+92)3554231410" },
    { fieldName: "Experience", fieldValue: " 2+ years" },
    { fieldName: "Skype", fieldValue: "Hassan.01" },
    { fieldName: "Nationality", fieldValue: "Pakistani" },
    { fieldName: "Email", fieldValue: "hassaniqbalkiu@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "English ,Udru" },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "I am a full-stack developer with a solid foundation in both front-end and back-end technologies. Over the years, I’ve built everything from user-friendly websites to powerful web applications. My experience spans multiple roles, allowing me to see the big picture and deliver complete, effective solutions. I've worked extensively with Next.js",
  items: [
    {
      compnay: "Uconnect",
      position: "Full-Stack Developer",
      duration: "2020 - Present",
    },

    {
      compnay: "Web Design Studio",
      position: "Front-End Developer intern",
      duration: "Summer - 2021",
    },

    {
      compnay: "E-commerce startup",
      position: " Freelance Web Developer",
      duration: "2020 - 2021",
    },

    {
      compnay: "Teach Academy",
      position: "Teaching Assistant",
      duration: "2019 - 2020",
    },

    {
      compnay: "Teach Academy",
      position: "Teaching Assistant",
      duration: "2019 - 2020",
    },

    {
      compnay: "Digital Agency",
      position: "UI/UX desinger",
      duration: "2018 - 2019",
    },

    {
      compnay: "Software Development firm",
      position: "junior Developer",
      duration: "2017 - 2018",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam",
  items: [
    {
      institution: "Online Course Platfrom",
      position: "Full-Stack Web Development Bootcamp",
      duration: "2018",
    },

    {
      institution: "CodeAcademy",
      position: "Front-End Track",
      duration: "2019",
    },
    {
      institution: "Online Course",
      position: "Programming Course",
      duration: "2020",
    },

    {
      institution: "Teach Institute",
      position: "Certified Web Developer",
      duration: "2021",
    },

    {
      institution: "Design School",
      position: "Diploma in Graphic Design",
      duration: "2016-2018",
    },

    {
      institution: "Community Collage",
      position: "Associate Degree in Computer Science",
      duration: "2014-2016",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam, sunt explicabo inventore.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },

    {
      icon: <FaFigma />,
      name: "Figma",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-7 text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {" "}
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-7">
                    {experience.items.map((items, index) => (
                      <li key={index} className="bg-[#232329] h-44 py-6 px-10">
                        <span>
                          {items.duration}
                          <h3>{items.position}</h3>
                          <div>
                            <span></span>
                            <p>{items.compnay}</p>
                          </div>{" "}
                        </span>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              education
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full">
              skills
            </TabsContent>
            {/* about */}
            <TabsContent value="about" className="w-full">
              about
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
