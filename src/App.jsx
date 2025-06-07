import Sidebar from "./components/Sidebar";
import Newproject from "./components/Newproject";
import NoProject from "./components/NoProject";
import { useState } from "react";
import SelectedProject from "./components/SelectedProject";

function App() {
  const[projectSelected, setSelectedProject] = useState({
    projects: [],
    selectedProjectId: undefined,
    tasks:[] 
  })

  function handleAddTask(text) {
  setSelectedProject(prevState => {
    const newTaskId = Math.random();
    const newTask = {
      id: newTaskId,
      projectId: prevState.selectedProjectId,
      text: text
    };

    return {
      ...prevState,
      tasks: [newTask, ...prevState.tasks] // ✅ add to tasks array
    };
  });
}
  function handleDeleteTask(taskId) {
    setSelectedProject(prevState => {
      const updatedTasks = prevState.tasks.filter(task => task.id !== taskId);
      return {
        ...prevState,
        tasks: updatedTasks
      };
    });
  }

  function handleProjectSelect(projectId) {
    setSelectedProject(prevState => {
      return {
        ...prevState,
        selectedProjectId: projectId, // Reset to indicate no project is selected
      };
    });
  }
  function handleClose(){
    setSelectedProject(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined, // Reset to indicate no project is selected
      };
    });
  }
  
  function handleStartProject() {
    setSelectedProject(prevState => {
      return {
        ...prevState,
        selectedProjectId: null, // Indicates that a new project is being created
      };
    })
  }

  function handleDeleteProject(projectId) {
    setSelectedProject(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: projectSelected.projects.filter(
          project=> project.id !== prevState.selectedProjectId
        )
        // Reset to indicate no project is selected
      };
    });
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

  const selectedProject = projectSelected.projects.find(
    (project) => project.id === projectSelected.selectedProjectId
  );
  
    let content = (
      <SelectedProject 
        project={selectedProject} 
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        onDelete={handleDeleteProject}
        task={projectSelected.tasks}
      />
    );

  if (projectSelected.selectedProjectId === null) {
    content = <Newproject onAddProject={handleAddProject} onCancel={handleClose} />;
  }
  else if (projectSelected.selectedProjectId === undefined) {
    content = <NoProject onStartProject={handleStartProject}  />;
  }

  return(
    <main className="flex gap-8 h-screen">
      <Sidebar onStartProject={handleStartProject} projects={projectSelected.projects}
      onSelectProject={handleProjectSelect}
      selectedProjectId={projectSelected.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
