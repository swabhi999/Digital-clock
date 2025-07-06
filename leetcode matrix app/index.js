document.addEventListener('DOMContentLoaded', function () {

  const searchButton = document.getElementById('search-btn');
  const searchInput = document.getElementById('user-input');
  const statContainer = document.querySelector('.stat-container');
  const easyProgressCircle = document.querySelector('.easy-progress-circle');
  const mediumProgressCircle = document.querySelector('.medium-progress-circle');
  const hardProgressCircle = document.querySelector('.hard-progress-circle');
  const easyLabel = document.querySelector('.easy-label');
  const mediumLabel = document.querySelector('.medium-label');
  const hardLabel = document.querySelector('.hard-label');
  const statCardContainer = document.querySelector('.stat-card');

  function checkvalidateusername(username) {
    if (username.trim() === "") {
      alert("Username should not be empty");
      return false;
    }
    const regex = /^[a-zA-Z0-9_]{1,20}$/;
    const ismatching = regex.test(username);
    if (!ismatching) {
      alert("Invalid username. It must be 1-20 characters long and can only contain letters, numbers, and underscores.");
    }
    return ismatching;
  }

  function updateProgress(solved, total, label, circle) {
    const progressDegree = (solved / total) * 100;
    circle.style.setProperty("--progress-degree", `${progressDegree}%`);
    label.textContent = `${solved}/${total}`;
  }

  async function fetchUserDetails(username) {
    try {
      searchButton.textContent = "Searching...";
      searchButton.disabled = true;
      statContainer.classList.add("hidden");
  
      const response = await fetch(`https://leetcode-restful-api.vercel.app/user/${username}`);
      if (!response.ok) throw new Error("User not found");
  
      const result = await response.json();
      const data = result.data;
  
      const easy = data.easySolved;
      const medium = data.mediumSolved;
      const hard = data.hardSolved;
      const total = data.totalSolved;
  
      // Total questions in platform (estimates)
      const totaleasyQues = 700;
      const totalmediumQues = 1400;
      const totalhardQues = 600;
  
      updateProgress(easy, totaleasyQues, easyLabel, easyProgressCircle);
      updateProgress(medium, totalmediumQues, mediumLabel, mediumProgressCircle);
      updateProgress(hard, totalhardQues, hardLabel, hardProgressCircle);
  
      const cardsData = [
        { label: "Easy Solved", value: easy },
        { label: "Medium Solved", value: medium },
        { label: "Hard Solved", value: hard },
        { label: "Total Solved", value: total }
      ];
  
      statCardContainer.innerHTML = cardsData.map(d => `
        <div class="card">
          <h3>${d.label}</h3>
          <h3>${d.value}</h3>
        </div>
      `).join("");
  
      statContainer.classList.remove("hidden");
  
    } catch (error) {
       statContainer.innerHTML = `<p>${error.message}</p>`
       
    } finally {
      searchButton.textContent = "Search";
      searchButton.disabled = false;
    }
  }
  
  searchButton.addEventListener('click', function () {
    const username = searchInput.value;
    if (checkvalidateusername(username)) {
      fetchUserDetails(username);
    }
  });
});