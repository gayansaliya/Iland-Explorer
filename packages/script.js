// Simple search filter for packages
const searchInput = document.getElementById("searchInput");
const packagesContainer = document.getElementById("packagesContainer");

searchInput.addEventListener("keyup", () => {
  const searchValue = searchInput.value.toLowerCase();
  const cards = packagesContainer.getElementsByClassName("package-card");

  for (let card of cards) {
    const title = card.querySelector("h3").textContent.toLowerCase();
    if (title.includes(searchValue)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  }
});

