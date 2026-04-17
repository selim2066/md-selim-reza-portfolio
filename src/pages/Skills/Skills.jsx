import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import { Code2, Database, Layout, Cpu } from "lucide-react";

import { FaReact, FaNodeJs, FaFigma } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiDocker,
  SiVercel,
  SiVite,
} from "react-icons/si";

import { TbBrandVscode } from "react-icons/tb";
import { BsGrid1X2, BsFileEarmarkCode } from "react-icons/bs";

// ---------------- Skill Card ----------------
const SkillCard = ({ icon: Icon, title, subtitle, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
    <CardContent className="p-6">
      {/* Header */}
      <div className="flex items-start gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-6 h-6" />
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">
            {title}
          </h3>
          <p className="text-xs text-gray-400 mt-1">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="bg-gray-900/40 border border-gray-700/60 hover:border-gray-500/60 text-gray-200 flex items-center gap-2 py-2 px-3 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
          >
            {skill.icon}
            <span className="text-sm">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

// ---------------- Main Section ----------------
const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Engineering",
      subtitle: "Building performant and accessible interfaces",
      color: "text-blue-400",
      skills: [
        { name: "React", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
        { name: "Next.js", icon: <SiNextdotjs className="w-4 h-4 text-white" /> },
        { name: "TypeScript", icon: <SiTypescript className="w-4 h-4 text-[#3178C6]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" /> },
      ],
    },
    {
      icon: Database,
      title: "Backend Engineering",
      subtitle: "APIs, databases and scalable systems",
      color: "text-green-400",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="w-4 h-4 text-[#339933]" /> },
        { name: "Express", icon: <BsGrid1X2 className="w-4 h-4 text-gray-300" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="w-4 h-4 text-[#336791]" /> },
        { name: "MongoDB", icon: <SiMongodb className="w-4 h-4 text-[#47A248]" /> },
        { name: "Prisma", icon: <SiPrisma className="w-4 h-4 text-white" /> },
        { name: "REST APIs", icon: <BsGrid1X2 className="w-4 h-4 text-[#FF6C37]" /> },
      ],
    },
    {
      icon: Layout,
      title: "UI / Product Design",
      subtitle: "Clean, responsive and user-focused design",
      color: "text-purple-400",
      skills: [
        { name: "Figma", icon: <FaFigma className="w-4 h-4 text-[#F24E1E]" /> },
        { name: "Responsive UI", icon: <Layout className="w-4 h-4 text-[#38B2AC]" /> },
        { name: "Shadcn UI", icon: <BsGrid1X2 className="w-4 h-4 text-white" /> },
      ],
    },
    {
      icon: Cpu,
      title: "DevOps & Tools",
      subtitle: "Deployment, tooling and workflow",
      color: "text-pink-400",
      skills: [
        { name: "Docker", icon: <SiDocker className="w-4 h-4 text-[#2496ED]" /> },
        { name: "Postman", icon: <BsGrid1X2 className="w-4 h-4 text-[#FF6C37]" /> },
        { name: "Vercel", icon: <SiVercel className="w-4 h-4 text-white" /> },
        { name: "Git", icon: <BsFileEarmarkCode className="w-4 h-4 text-gray-300" /> },
        { name: "Vite", icon: <SiVite className="w-4 h-4 text-[#646CFF]" /> },
        { name: "VS Code", icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" /> },
      ],
    },
  ];

  return (
    <main className="pt-16 text-white min-h-screen bg-[#04081A] relative">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <section className="container mx-auto px-4 py-12 relative z-10">
        {/* Globe */}
        <div className="flex justify-center items-center mb-10">
          <IconCloudDemo />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              subtitle={category.subtitle}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>

      {/* Styles */}
      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(100, 100, 255, 0.08) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(100, 100, 255, 0.08) 1px,
              transparent 1px
            );
          background-size: 32px 32px;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;