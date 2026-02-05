"use client";

import { memo } from "react";
import type { Project } from "@/types";
import { styles } from "@/lib";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export const ProjectCard = memo(function ProjectCard({
  project,
  index = 0,
}: ProjectCardProps) {
  const { title, description, tags, liveUrl, githubUrl } = project;

  return (
    <div className={`${styles.card} group`}>
      {/* Number */}
      <div className="h-32 bg-white/5 border-b border-white/10 flex items-center justify-center">
        <span className="text-4xl font-bold text-white/10 group-hover:text-white/20 transition-colors">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <h3 className={styles.heading3}>{title}</h3>
        <p className={`${styles.body} text-sm line-clamp-2`}>{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {tags.slice(0, 3).map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-3 border-t border-white/10">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white hover:text-gray-300 uppercase tracking-wider"
            >
              Live →
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-500 hover:text-white uppercase tracking-wider"
            >
              Code →
            </a>
          )}
        </div>
      </div>
    </div>
  );
});
