// src/MainApp.jsx
import Sidebar from "./components/Sidebar";
import Newproject from "./components/Newproject";
import NoProject from "./components/NoProject";
import { useState } from "react";
import SelectedProject from "./components/SelectedProject";

function MainApp() {
  const [projectSelected, setSelectedProject] = useState({
    projects: [],
    selectedProjectId: undefined,
    tasks: []
  });

  // All your task/project handler functions go here (unchanged)...

  function handleAddTask(text) {
    const newTask = {
      id: Math.random(),
      projectId: projectSelected.selectedProjectId,
      text,
    };
    setSelectedProject((prev) => ({
      ...prev,
      tasks: [newTask, ...prev.tasks],
    }));
  }

  function handleDeleteTask(taskId) {
    setSelectedProject((prev) => ({
      ...prev,
      tasks: prev.tasks.filter((task) => task.id !== taskId),
    }));
  }

  function handleProjectSelect(projectId) {
    setSelectedProject((prev) => ({
      ...prev,
      selectedProjectId: projectId,
    }));
  }

  function handleClose() {
    setSelectedProject((prev) => ({
      ...prev,
      selectedProjectId: undefined,
    }));
  }

  function handleStartProject() {
    setSelectedProject((prev) => ({
      ...prev,
      selectedProjectId: null,
    }));
  }

  function handleDeleteProject(projectId) {
    setSelectedProject((prev) => ({
      ...prev,
      selectedProjectId: undefined,
      projects: prev.projects.filter((project) => project.id !== projectId),
    }));
  }

  function handleAddProject(projectData) {
    const newProject = { ...projectData, id: Math.random() };
    setSelectedProject((prev) => ({
      ...prev,
      selectedProjectId: undefined,
      projects: [...prev.projects, newProject],
    }));
  }

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
    content = (
      <Newproject
        onAddProject={handleAddProject}
        onCancel={handleClose}
      />
    );
  } else if (projectSelected.selectedProjectId === undefined) {
    content = <NoProject onStartProject={handleStartProject} />;
  }

  return (
    <main className="flex gap-8 h-screen">
      <Sidebar
        onStartProject={handleStartProject}
        projects={projectSelected.projects}
        onSelectProject={handleProjectSelect}
        selectedProjectId={projectSelected.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default MainApp;