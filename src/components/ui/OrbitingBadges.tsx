"use client";

import { memo } from "react";
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiGit,
  SiFramer,
} from "react-icons/si";

const innerOrbit = [
  { icon: SiReact, name: "React" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiNextdotjs, name: "Next.js" },
];

const outerOrbit = [
  { icon: SiTailwindcss, name: "Tailwind" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiGit, name: "Git" },
  { icon: SiFramer, name: "Framer" },
];

export const OrbitingBadges = memo(function OrbitingBadges() {
  return (
    <div className="relative w-80 h-80">
      {/* Outer orbit ring */}
      <div className="absolute inset-0 border border-white/15 rounded-full" />

      {/* Inner orbit ring */}
      <div className="absolute inset-14 border border-white/15 rounded-full" />

      {/* Center - code symbol */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 border border-white/30 bg-black flex items-center justify-center">
          <span className="text-xl font-bold text-white/50">&lt;/&gt;</span>
        </div>
      </div>

      {/* Inner orbit icons - faster, clockwise */}
      <div className="absolute inset-14 animate-orbit-inner">
        {innerOrbit.map((tech, i) => {
          const angle = (i * 360) / innerOrbit.length - 90;
          const radian = (angle * Math.PI) / 180;
          const radius = 104; // (320 - 112) / 2 = 104
          const x = Math.cos(radian) * radius;
          const y = Math.sin(radian) * radius;

          return (
            <div
              key={tech.name}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              }}
            >
              <div className="animate-orbit-inner-reverse p-2 bg-black border border-white/30 hover:border-white transition-colors">
                <tech.icon size={18} className="text-white" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Outer orbit icons - slower, counter-clockwise */}
      <div className="absolute inset-0 animate-orbit-outer">
        {outerOrbit.map((tech, i) => {
          const angle = (i * 360) / outerOrbit.length - 90;
          const radian = (angle * Math.PI) / 180;
          const radius = 160; // 320 / 2 = 160
          const x = Math.cos(radian) * radius;
          const y = Math.sin(radian) * radius;

          return (
            <div
              key={tech.name}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              }}
            >
              <div className="animate-orbit-outer-reverse p-2.5 bg-black border border-white/30 hover:border-white transition-colors">
                <tech.icon size={20} className="text-white" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});
