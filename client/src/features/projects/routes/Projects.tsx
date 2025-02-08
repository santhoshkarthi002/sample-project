import { useHeader } from "@/contexts/HeaderContext";
import React, { useLayoutEffect } from "react";

const Projects = () => {
  const { setHeader } = useHeader();

  useLayoutEffect(() => {
    setHeader("Projects");
  }, [setHeader]);

  return <div>Projects</div>;
};

export default Projects;
