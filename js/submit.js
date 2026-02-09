document.getElementById("projectForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const { error } = await supabase.from("projects").insert([{
    title: title.value,
    description: description.value,
    category: category.value,
    tech_stack: tech.value,
    live_url: live.value,
    repo_url: repo.value,
    author_name: author.value
  }]);

  if (error) {
    msg.innerText = "❌ Submission failed";
    msg.style.color = "red";
    console.error(error);
  } else {
    msg.innerText = "✅ Project submitted successfully!";
    msg.style.color = "green";
    e.target.reset();
  }
});
