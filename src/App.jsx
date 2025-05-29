import Sidebar from "./components/Sidebar";
import Newproject from "./components/Newproject";
import NoProject from "./components/NoProject";
import { useState } from "react";

function App() {
  const[projectSelected, setSelectedProject] = useState({
    projects: [],
    selectedProjectId: undefined
  })
  
  function handleStartProject() {
    setSelectedProject(prevState => {
      return {
        ...prevState,
        selectedProjectId: null, // Indicates that a new project is being created
      };
    })
  }

  function handleAddProject(projectData) {
    setSelectedProject(prevState => {
      const newProject={
        ...projectData,
        id: Math.random()
      }
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
        // selectedProject: newProject
      };
    });
  }
  console.log(projectSelected);

  let content;

  if (projectSelected.selectedProjectId === null) {
    content = <Newproject onAddProject={handleAddProject} />;
  }
  else if (projectSelected.selectedProjectId === undefined) {
    content = <NoProject onStartProject={handleStartProject}  />;
  }

  return(
    <main className="flex gap-8 h-screen">
      <Sidebar onStartProject={handleStartProject} projects={projectSelected.projects}/>
      {content}
    </main>
  );
}

export default App;
