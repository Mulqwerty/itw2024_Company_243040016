function toggleDropdown(action) {
    const dropdown = document.getElementById("dropdown-menu");
    if (action === "open") {
      dropdown.classList.add("active");
    } else if (action === "cancel") {
      dropdown.classList.remove("active");
    }
  }
  