async function returnElems() {
  const index = await fetch("index.html");
  const gallery = await fetch("gallery.html");
  const service = await fetch("service.html");
  const impressum = await fetch("impressum.html");
  const aboutus = await fetch("about.html");
  const indexText = await index.text();
  const galleryText = await gallery.text();
  const serviceText = await service.text();
  const impressumText = await impressum.text();
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = indexText + galleryText + serviceText + impressumText;
  const fetchedToggleElems = tempDiv.querySelectorAll("#toggleBtn");
  const currentToggleElems = document.querySelectorAll("#toggleBtn");
  const fetchedListItems = tempDiv.querySelectorAll("[data-allListItems]");
  const currentListItems = document.querySelectorAll("[data-allListItems]");
  const allListItemsChange = [...fetchedListItems, ...currentListItems];
  const allToggleElems = [...currentToggleElems, ...fetchedToggleElems];
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.remove("bg-white");
    document.body.classList.add("bg-black");
    document
      .querySelector("[data-body]")
      .querySelector("[data-bgzinc400]")
      .classList.remove("bg-zinc-400");
    document
      .querySelector("[data-body]")
      .querySelector("[data-bgzinc400]")
      .classList.add("bg-zinc-800");
    document.querySelectorAll("[data-textblack]").forEach((items) => {
      items.classList.remove("text-black");
      items.classList.add("text-white");
    });
    document.querySelectorAll("[data-bgzinc100]").forEach((items) => {
      items.classList.add("bg-zinc-800");
      items.classList.remove("bg-zinc-100");
    });

    document.querySelectorAll("[data-textzinc700]").forEach((items) => {
      items.classList.remove("text-zinc-700");
      items.classList.add("text-[#d6d6d6]");
    });
    allListItemsChange.forEach((items) => {
      items.classList.add("hover:after:bg-Accent");
      items.classList.remove("hover:after:bg-Primary");
    });

    document.querySelectorAll("[data-allListItems]").forEach((items) => {
      items.classList.add("hover:after:bg-Accent");
      items.classList.remove("hover:after:bg-Primary");
    });
    document.querySelectorAll("[data-bgzinc300]").forEach((items) => {
      items.classList.remove("bg-zinc-300");
      items.classList.add("bg-zinc-800");
      items.classList.remove("shadow-[0_0px_30px_0px_hsl(233_8%_85%)]");
    });
    document.querySelector("#footer").classList.remove("bg-gray-500");
    document.querySelector("#footer").classList.add("bg-zinc-800");

    if (window.location.pathname.includes("gallery.html")) {
      document.querySelector("#galleryHeading").classList.remove("text-black");
      document.querySelector("#galleryHeading").classList.add("text-white");
      document.querySelector("#bgblackgallery").classList.remove("bg-white");
      document.querySelector("#bgblackgallery").classList.add("bg-black");
    }
    if (window.location.pathname.includes("service.html")) {
      document.querySelector("#servicesHeading").classList.remove("text-black");
      document.querySelector("#servicesHeading").classList.add("text-white");

      document.querySelectorAll("[data-changeColor]").forEach((items) => {
        items.classList.remove("bg-slate-300");
        items.classList.add("bg-zinc-800");
      });
      document.querySelectorAll("label").forEach((items) => {
        items.classList.remove("text-black");
        items.classList.add("text-white");
      });
      document.querySelector("[data-primary]").classList.remove("bg-Primary");
      document.querySelector("[data-primary]").classList.add("bg-Accent");
      document
        .querySelectorAll("[data-services]")[0]
        .classList.add("rounded-l-sm");
      document
        .querySelectorAll("[data-services]")[2]
        .classList.add("rounded-r-sm");
      document.querySelector("#buildingButton").classList.remove("bg-Primary");
      document.querySelector("#buildingButton").classList.add("bg-Accent");
      document.querySelector("#upgradesButton").classList.remove("bg-Primary");
      document.querySelector("#upgradesButton").classList.add("bg-Accent");
      document.querySelector("#repairsButton").classList.remove("bg-Primary");
      document.querySelector("#repairsButton").classList.add("bg-Accent");
      document.querySelectorAll("[data-changecolorLeft").forEach((items) => {
        items.classList.remove("text-black");
        items.classList.add("text-white");
      });
    }
    // console.log(window.location.pathname);

    if (window.location.pathname.includes("about.html")) {
      document.querySelectorAll("[data-sectionColor]").forEach((items) => {
        items.classList.add("bg-zinc-800");
        items.classList.remove("bg-slate-200");
      });
      document.querySelectorAll("[data-whiteMode]").forEach((items) => {
        items.classList.remove("text-black");
        items.classList.add("text-white");
      });
      document.querySelectorAll("[data-whitemodePara]").forEach((items) => {
        items.classList.remove("text-black");
        items.classList.add("text-gray-200");
      });
    }

    allToggleElems.forEach((items) => {
      items.querySelector("#toggleDiv").classList.remove("translate-x-[40px]");
      items.querySelector("#moonsun").classList.add("fa-moon");
      items.classList.remove("bg-slate-300");
      items.classList.add("bg-slate-900");
      items.querySelector("#toggleDiv").classList.add("bg-white");
      items.querySelector("#toggleDiv").classList.remove("bg-slate-900");
      items.querySelector("#moonsun").classList.remove("fa-sun");
    });
  } else {
    document.body.classList.remove("bg-black");
    document.body.classList.add("bg-white");
    allListItemsChange.forEach((items) => {
      items.classList.remove("hover:after:bg-Accent");
      items.classList.add("hover:after:bg-Primary");
    });
    document
      .querySelector("[data-body]")
      .querySelector("[data-bgzinc400]")
      .classList.add("bg-zinc-400");
    document
      .querySelector("[data-body]")
      .querySelector("[data-bgzinc400]")
      .classList.remove("bg-zinc-800");
    document.querySelectorAll("[data-textblack]").forEach((items) => {
      items.classList.add("text-black");
      items.classList.remove("text-white");
    });
    document.querySelectorAll("[data-bgzinc100]").forEach((items) => {
      // console.log(items);
      items.classList.toggle("bg-zinc-800");
      items.classList.toggle("bg-zinc-100");
    });

    document.querySelectorAll("[data-textzinc700]").forEach((items) => {
      items.classList.add("text-zinc-700");
      items.classList.remove("text-[#d6d6d6]");
    });
    document.querySelectorAll("[data-bgzinc300]").forEach((items) => {
      items.classList.add("bg-zinc-300");
      items.classList.remove("bg-zinc-800");
      items.classList.remove("shadow-[0_0px_30px_0px_hsl(233_8%_85%)]");
    });
    document.querySelector("#footer").classList.toggle("bg-gray-500");
    document.querySelector("#footer").classList.toggle("bg-zinc-800");

    if (window.location.pathname.includes("gallery.html")) {
      document.querySelector("#galleryHeading").classList.add("text-black");
      document.querySelector("#galleryHeading").classList.remove("text-white");
      document.querySelector("#bgblackgallery").classList.add("bg-white");
      document.querySelector("#bgblackgallery").classList.remove("bg-black");
    }
    if (window.location.pathname.includes("service.html")) {
      document.querySelector("#servicesHeading").classList.add("text-black");
      document.querySelector("#servicesHeading").classList.remove("text-white");

      document.querySelectorAll("[data-changeColor]").forEach((items) => {
        items.classList.add("bg-slate-300");
        items.classList.remove("bg-zinc-800");
      });
      document.querySelectorAll("label").forEach((items) => {
        items.classList.add("text-black");
        items.classList.remove("text-white");
      });
      document.querySelector("[data-primary]").classList.add("bg-Primary");
      document.querySelector("[data-primary]").classList.remove("bg-Accent");
      document.querySelector("#buildingButton").classList.add("bg-Primary");
      document.querySelector("#buildingButton").classList.remove("bg-Accent");
      document.querySelector("#upgradesButton").classList.add("bg-Primary");
      document.querySelector("#upgradesButton").classList.remove("bg-Accent");
      document.querySelector("#repairsButton").classList.add("bg-Primary");
      document.querySelector("#repairsButton").classList.remove("bg-Accent");
      document.querySelectorAll("[data-changecolorLeft").forEach((items) => {
        items.classList.add("text-black");
        items.classList.remove("lg:bg-zinc-800");
        items.classList.add("lg:bg-slate-300");
        items.classList.remove("text-white");
      });

      document
        .querySelector("[data-allService]")
        .classList.remove("text-white");
      document.querySelector("[data-allService]").classList.add("text-black");
      document
        .querySelector("[data-allService]")
        .classList.remove("bg-zinc-800");
      document.querySelector("[data-allService]").classList.add("bg-slate-100");
    }
    if (window.location.pathname.includes("about.html")) {
      document.querySelectorAll("[data-sectionColor]").forEach((items) => {
        items.classList.remove("bg-zinc-800");
        items.classList.add("bg-slate-200");
      });
      document.querySelectorAll("[data-whiteMode]").forEach((items) => {
        items.classList.add("text-black");
        items.classList.remove("text-white");
      });
      document.querySelectorAll("[data-whitemodePara]").forEach((items) => {
        items.classList.add("text-black");
        items.classList.remove("text-gray-200");
      });
    }

    allToggleElems.forEach((items) => {
      items.querySelector("#toggleDiv").classList.add("translate-x-[40px]");
      items.classList.add("bg-slate-300");
      items.classList.remove("bg-slate-900");
      items.querySelector("#toggleDiv").classList.remove("bg-white");
      items.querySelector("#toggleDiv").classList.add("bg-slate-900");

      items.querySelector("#moonsun").classList.add("fa-sun");
      items.querySelector("#moonsun").classList.remove("fa-moon");
    });
  }
  allToggleElems.forEach((items) => {
    items.addEventListener("click", (e) => {
      if (document.body.classList.contains("bg-white")) {
        localStorage.setItem("theme", "white");
        localStorage.setItem("accenttext", "text-Primary");
        localStorage.setItem("accentbg", "bg-Primary");
        localStorage.setItem("border", "border-Primary");
        localStorage.setItem("bgblack", "bg-black");
        document.body.classList.remove("bg-black");
        document.body.classList.add("bg-white");
        localStorage.setItem("tblack", "text-black");
      } else {
        localStorage.setItem("theme", "dark");
        localStorage.setItem("accenttext", "text-Accent");
        localStorage.setItem("accentbg", "bg-Accent");
        localStorage.setItem("border", "border-Accent");
        localStorage.setItem("bgblack", "bg-white");
        document.body.classList.add("bg-black");
        document.body.classList.remove("bg-white");
        localStorage.setItem("tblack", "text-white");
      }
    });
  });
}
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "white") {
  const spansL = localStorage.getItem("accenttext");
  const spansBg = localStorage.getItem("accentbg");
  const bgblack = localStorage.getItem("bgblack");
  const tblack = localStorage.getItem("tblack");
  const border = localStorage.getItem("border");
  document.body.classList.add("bg-white");
  document.body.classList.remove("bg-black");
  if (window.location.pathname.includes("index.html")) {
    document.querySelector("#spans").classList.add(spansL);
    document.querySelector("#quoteBtn").classList.add(spansBg);
    document.querySelector("#black").classList.add(spansBg);
    document.querySelector("[data-sameClr]").classList.remove("bg-white");
    document.querySelector("[data-sameClr]").classList.add(bgblack);
    document.querySelector("[data-arrow]").classList.remove("text-white");
    document.querySelector("[data-arrow]").classList.add(tblack);

    document.querySelectorAll("[data-borderPrimary]").forEach((items) => {
      items.classList.remove("border-Accent");
      items.classList.add(border);
    });
    document.querySelector("#touchBar").classList.remove("bg-Accent");
    document.querySelector("#touchBar").classList.add(spansBg);
    document.querySelector("#contactBtn").classList.remove("bg-Accent");
    document.querySelector("#contactBtn").classList.add(spansBg);
    document
      .querySelector("#borderleftcolor")
      .classList.remove("border-Accent");
    document.querySelector("#borderleftcolor").classList.add(border);
  }
} else if (savedTheme === "dark") {
  const spansL = localStorage.getItem("accenttext");
  const spansBg = localStorage.getItem("accentbg");
  const bgblack = localStorage.getItem("bgblack");
  const tblack = localStorage.getItem("tblack");
  const border = localStorage.getItem("border");
  document.body.classList.add("bg-black");
  document.body.classList.remove("bg-white");
  if (window.location.pathname.includes("index.html")) {
    document.querySelector("#spans").classList.add(spansL);
    document.querySelector("#quoteBtn").classList.add(spansBg);
    document.querySelector("#black").classList.add(spansBg);
    document.querySelector("[data-sameClr]").classList.remove("bg-black");
    document.querySelector("[data-sameClr]").classList.add(bgblack);
    document.querySelector("[data-arrow]").classList.remove("text-black");
    document.querySelector("[data-arrow]").classList.add(tblack);
    document.querySelectorAll("[data-borderPrimary]").forEach((items) => {
      items.classList.remove("border-Primary");
      items.classList.add(border);
    });
    document.querySelector("#touchBar").classList.remove("bg-Primary");
    document.querySelector("#touchBar").classList.add(spansBg);
    document.querySelector("#contactBtn").classList.remove("bg-Primary");
    document.querySelector("#contactBtn").classList.add(spansBg);
    document
      .querySelector("#borderleftcolor")
      .classList.remove("border-Primary");
    document.querySelector("#borderleftcolor").classList.add(border);
  }
}
if (document.body.classList.contains("bg-white")) {
  localStorage.setItem("theme", "white");
  localStorage.setItem("accentbg", "bg-Primary");
  localStorage.setItem("accenttext", "text-Primary");
  localStorage.setItem("bgblack", "bg-black");
  localStorage.setItem("tblack", "text-black");
  localStorage.setItem("border", "border-Primary");
} else {
  localStorage.setItem("theme", "dark");
  localStorage.setItem("accenttext", "text-Accent");
  localStorage.setItem("accentbg", "bg-Accent");
  localStorage.setItem("bgblack", "bg-white");
  localStorage.setItem("tblack", "text-white");
  localStorage.setItem("border", "border-Accent");
}
returnElems();
