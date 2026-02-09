async function loadProjects() {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });

  const container = document.getElementById("project-list");

  if (error) {
    container.innerHTML = "<p>❌ Error loading projects</p>";
    console.error(error);
    return;
  }

  if (data.length === 0) {
    container.innerHTML = "<p>No projects found.</p>";
    return;
  }

  data.forEach(project => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <p><strong>Category:</strong> ${project.category || "N/A"}</p>
      <p><strong>Tech Stack:</strong> ${project.tech_stack || "N/A"}</p>
      <a href="${project.live_url}" target="_blank">Live</a> |
      <a href="${project.repo_url}" target="_blank">Code</a>
      <hr>
    `;
    container.appendChild(div);
  });
}

loadProjects();
