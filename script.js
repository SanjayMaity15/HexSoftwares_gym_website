const navLinks = document.getElementById("nav-links-menu");
const bar = document.getElementById("bar");

bar.addEventListener("click", () => {
	if (navLinks.classList[0] === "nav-links") {
		navLinks.classList.remove("nav-links");
		navLinks.classList.add("active");
	} else {
        navLinks.classList.add("nav-links");
        navLinks.classList.remove("active");
	}
});
