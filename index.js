"use-strict";
//NAVIGATION BAR
const sidebar = document.querySelector(".side-bar");
const menu = document.getElementById("menu");
document.querySelector(".barLink").addEventListener("click", function () {
	if (sidebar.classList.contains("sidebarHidden")) {
		sidebar.classList.remove("sidebarHidden");
		sidebar.style.opacity = "1";
		sidebar.style.width = "40%";
		menu.classList.toggle("active");
	} else {
		sidebar.classList.add("sidebarHidden");
		menu.classList.toggle("active");
		sidebar.style.opacity = "0";
		sidebar.style.width = "0";
	}
});

const menu_items = document.querySelectorAll(".linkk");

function close() {
	if (sidebar.classList.contains("sidebarHidden")) {
		sidebar.classList.remove("sidebarHidden");
	} else {
		sidebar.classList.add("sidebarHidden");
		sidebar.style.opacity = "0";
		sidebar.style.width = "0";
	}
}

menu_items.forEach((item) => {
	item.addEventListener("click", function () {
		if (window.innerWidth <= 869) {
			menu.classList.toggle("active");
			close();
		}
	});
});
