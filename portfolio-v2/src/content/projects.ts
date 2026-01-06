/**
 * Project data
 * 
 * This file contains information about various projects, including their titles,
 * descriptions, and the technologies used.
 * 
 * Edit this file to add, remove, or update project details.
 */

export type Project = {
  title: string;
  description: string;
  tech: string[];
};

export const projects: Project[] = [
  {    
    title: "Escape The Zoo!",
    description:
      "A shared-screen 2D board game built in Unity using C# with random events and mini-games.",
    tech: ["C#", "Unity"],
  },
  {
    title: "SPEED — Research Evidence Database",
    description:
      "A full-stack Next.js web app that allows researchers to browse and manage empirical software engineering data.",
    tech: ["Next.js", "React", "TypeScript", "MongoDB"],
  },
  {
    title: "Secure File Sharing System",
    description:
      "A secure, concurrent file transfer system built in Python with emphasis on reliability and data integrity.",
    tech: ["Python", "Multithreading", "TLS"],
  },
];
