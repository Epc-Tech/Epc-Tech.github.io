const toggleBtn = document.querySelectorAll("#toggleBtn");

toggleBtn.forEach((items, index) => {
  items.addEventListener("click", (e) => {
    if (
      !items
        .querySelector("#toggleDiv")
        .classList.contains("translate-x-[40px]")
    ) {
      document.querySelector("#spans").classList.remove("text-Accent");
      document.querySelector("#spans").classList.add("text-Primary");
      document.querySelector("#quoteBtn").classList.remove("bg-Accent");
      document.querySelector("#quoteBtn").classList.add("bg-Primary");
      document.querySelector("#black").classList.add("bg-Primary");
      document.querySelector("#black").classList.remove("bg-Accent");
      document.querySelector("[data-sameClr]").classList.add("bg-black");
      document.querySelector("[data-sameClr]").classList.remove("bg-white");
      document.querySelector("[data-arrow]").classList.add("text-black");
      document.querySelector("[data-arrow]").classList.remove("text-white");
      document.querySelector("#touchBar").classList.remove("bg-Accent");
      document.querySelector("#touchBar").classList.add("bg-Primary");
      document.querySelectorAll("[data-borderPrimary").forEach((items) => {
        items.classList.remove("border-Accent");
        items.classList.add("border-Primary");
      });
      document.querySelector("#contactBtn").classList.remove("bg-Accent");
      document.querySelector("#contactBtn").classList.add("bg-Primary");
      document
        .querySelector("#borderleftcolor")
        .classList.add("border-Primary");
      document
        .querySelector("#borderleftcolor")
        .classList.remove("border-Accent");
    } else {
      document.querySelector("#spans").classList.add("text-Accent");
      document.querySelector("#spans").classList.remove("text-Primary");
      document.querySelector("#quoteBtn").classList.add("bg-Accent");
      document.querySelector("#quoteBtn").classList.remove("bg-Primary");
      document.querySelector("#black").classList.remove("bg-Primary");
      document.querySelector("#black").classList.add("bg-Accent");
      document.querySelector("[data-sameClr]").classList.remove("bg-black");
      document.querySelector("[data-sameClr]").classList.add("bg-white");
      document.querySelector("[data-arrow]").classList.remove("text-black");
      document.querySelector("[data-arrow]").classList.add("text-white");

      document.querySelectorAll("[data-borderPrimary").forEach((items) => {
        items.classList.add("border-Accent");
        items.classList.remove("border-Primary");
      });
      document.querySelector("#touchBar").classList.add("bg-Accent");
      document.querySelector("#touchBar").classList.remove("bg-Primary");
      document.querySelector("#contactBtn").classList.add("bg-Accent");
      document.querySelector("#contactBtn").classList.remove("bg-Primary");
      document
        .querySelector("#borderleftcolor")
        .classList.remove("border-Primary");
      document.querySelector("#borderleftcolor").classList.add("border-Accent");
    }

    if (localStorage.getItem("theme") === "dark") {
      document
        .querySelector("[data-bgzinc300]")
        .classList.add("shadow-[0_0px_30px_0px_hsl(233_8%_85%)]");
      document.querySelectorAll("[data-toggleDiv]").forEach((items2) => {
        items2.classList.toggle("translate-x-[40px]");
        items2.classList.remove("bg-white");
        items2.classList.add("bg-slate-900");
      });
      document.querySelectorAll("#moonsun").forEach((items) => {
        items.classList.toggle("fa-sun");
      });
      document.querySelectorAll("#moonsun").forEach((items) => {
        items.classList.toggle("fa-moon");
      });

      toggleBtn.forEach((items2) => {
        items2.classList.add("bg-slate-300");
      });
      toggleBtn.forEach((items2) => {
        items2.classList.remove("bg-slate-900");
      });
      document.querySelectorAll("#moonsun").forEach((items) => {
        items.classList.add("animate-[spin_.6s_ease-out]");
      });
      setTimeout(() => {
        document.querySelectorAll("#moonsun").forEach((items) => {
          items.classList.remove("animate-[spin_.6s_ease-out]");
        });
      }, 600);

      document.querySelectorAll("[data-bggray500]").forEach((items) => {
        items.classList.toggle("bg-gray-500");
      });
      document.querySelectorAll("[data-bggray500]").forEach((items) => {
        items.classList.toggle("bg-zinc-800");
      });
      document.querySelectorAll("[data-bgzinc100]").forEach((items) => {
        items.classList.toggle("bg-zinc-100");
      });
      document.querySelectorAll("[data-bgzinc100]").forEach((items) => {
        items.classList.toggle("bg-zinc-800");
      });
      document.querySelector("[data-body]").classList.toggle("bg-white");
      document.querySelector("[data-body]").classList.toggle("bg-black");
      document.querySelectorAll("[data-textblack]").forEach((items) => {
        items.classList.toggle("text-black");
      });
      document.querySelectorAll("[data-textblack]").forEach((items) => {
        items.classList.toggle("text-white");
      });
      document.querySelectorAll("[data-textzinc700]").forEach((items) => {
        items.classList.toggle("text-zinc-700");
      });
      document.querySelectorAll("[data-textzinc700]").forEach((items) => {
        items.classList.toggle("text-[#d6d6d6]");
      });
      document
        .querySelector("[data-bgzinc300]")
        .classList.toggle("bg-zinc-300");

      document
        .querySelector("[data-bgzinc300]")
        .classList.toggle("bg-zinc-800");

      document
        .querySelector("[data-bgzinc400]")
        .classList.toggle("bg-zinc-400");
      document
        .querySelector("[data-bgzinc400]")
        .classList.toggle("bg-zinc-800");

      document.querySelector("[data-bgblack]").classList.toggle("bg-black");
      document.querySelector("[data-bgblack]").classList.toggle("bg-white");

      document.querySelectorAll("[data-languageSelection]").forEach((items) => {
        items.classList.toggle("bg-slate-900");
      });
      document.querySelectorAll("[data-languageSelection]").forEach((items) => {
        items.classList.toggle("bg-white");
      });
      document.querySelectorAll("[data-languageSelection]").forEach((items) => {
        items.classList.toggle("text-black");
      });
      document.querySelectorAll("[data-languageSelection]").forEach((items) => {
        items.classList.toggle("text-white");
      });
      document
        .querySelector("[data-bgzinc400]")
        .classList.add("shadow-[0_0px_20px_0px_hsl(233_8%_62%)]");
    } else if (localStorage.getItem("theme") === "white") {
      document
        .querySelector("[data-bgzinc400]")
        .classList.remove("shadow-[0_0px_20px_0px_hsl(233_8%_62%)]");
      document
        .querySelector("[data-bgzinc300]")
        .classList.remove("shadow-[0_0px_30px_0px_hsl(233_8%_85%)]");
      document.querySelectorAll("[data-toggleDiv]").forEach((items2) => {
        items2.classList.toggle("translate-x-[40px]");
        items2.classList.add("bg-white");
        items2.classList.remove("bg-slate-900");
      });

      toggleBtn.forEach((items2) => {
        items2.classList.remove("bg-slate-300");
      });
      toggleBtn.forEach((items2) => {
        items2.classList.add("bg-slate-900");
      });
      document.querySelectorAll("#moonsun").forEach((items) => {
        items.classList.add("animate-[spin_.6s_ease-out]");
      });
      setTimeout(() => {
        document.querySelectorAll("#moonsun").forEach((items) => {
          items.classList.remove("animate-[spin_.6s_ease-out]");
        });
      }, 600);
      document.querySelectorAll("[data-bggray500]").forEach((items) => {
        items.classList.toggle("bg-gray-500");
      });
      document.querySelectorAll("[data-bggray500]").forEach((items) => {
        items.classList.toggle("bg-zinc-800");
      });
      document.querySelectorAll("[data-bgzinc100]").forEach((items) => {
        items.classList.toggle("bg-zinc-100");
      });
      document.querySelectorAll("[data-bgzinc100]").forEach((items) => {
        items.classList.toggle("bg-zinc-800");
      });
      document.querySelector("[data-body]").classList.toggle("bg-white");
      document.querySelector("[data-body]").classList.toggle("bg-black");
      document.querySelectorAll("[data-textblack]").forEach((items) => {
        items.classList.toggle("text-black");
      });
      document.querySelectorAll("[data-textblack]").forEach((items) => {
        items.classList.toggle("text-white");
      });
      document.querySelectorAll("[data-textzinc700]").forEach((items) => {
        items.classList.toggle("text-zinc-700");
      });
      document.querySelectorAll("[data-textzinc700]").forEach((items) => {
        items.classList.toggle("text-[#d6d6d6]");
      });
      document
        .querySelector("[data-bgzinc300]")
        .classList.toggle("bg-zinc-300");

      document
        .querySelector("[data-bgzinc300]")
        .classList.toggle("bg-zinc-800");

      document
        .querySelector("[data-bgzinc400]")
        .classList.toggle("bg-zinc-400");
      document
        .querySelector("[data-bgzinc400]")
        .classList.toggle("bg-zinc-800");

      document.querySelector("[data-bgblack]").classList.toggle("bg-black");
      document.querySelector("[data-bgblack]").classList.toggle("bg-white");

      document.querySelectorAll("[data-languageSelection]").forEach((items) => {
        items.classList.toggle("bg-slate-900");
      });
      document.querySelectorAll("[data-languageSelection]").forEach((items) => {
        items.classList.toggle("bg-white");
      });
      document.querySelectorAll("[data-languageSelection]").forEach((items) => {
        items.classList.toggle("text-black");
      });
      document.querySelectorAll("[data-languageSelection]").forEach((items) => {
        items.classList.toggle("text-white");
      });
      document.querySelectorAll("#moonsun").forEach((items) => {
        items.classList.toggle("fa-sun");
      });
      document.querySelectorAll("#moonsun").forEach((items) => {
        items.classList.toggle("fa-moon");
      });
    }
  });
  if (localStorage.getItem("theme") === "dark") {
    document.querySelectorAll("[data-bggray500]").forEach((items) => {
      items.classList.toggle("bg-gray-500");
    });
    document.querySelectorAll("[data-bggray500]").forEach((items) => {
      items.classList.toggle("bg-zinc-800");
    });
    document.querySelectorAll("[data-bgzinc100]").forEach((items) => {
      items.classList.toggle("bg-zinc-100");
    });
    document.querySelectorAll("[data-bgzinc100]").forEach((items) => {
      items.classList.toggle("bg-zinc-800");
    });

    document.querySelector("[data-body]").classList.toggle("bg-white");
    document.querySelector("[data-body]").classList.toggle("bg-black");
    document.querySelectorAll("[data-textblack]").forEach((items) => {
      items.classList.toggle("text-black");
    });
    document.querySelectorAll("[data-textblack]").forEach((items) => {
      items.classList.toggle("text-white");
    });
    document.querySelectorAll("[data-textzinc700]").forEach((items) => {
      items.classList.toggle("text-zinc-700");
    });
    document.querySelectorAll("[data-textzinc700]").forEach((items) => {
      items.classList.toggle("text-[#d6d6d6]");
    });
    document.querySelector("[data-bgzinc300]").classList.toggle("bg-zinc-300");

    document.querySelector("[data-bgzinc300]").classList.toggle("bg-zinc-800");

    document.querySelector("[data-bgzinc400]").classList.toggle("bg-zinc-400");
    document.querySelector("[data-bgzinc400]").classList.toggle("bg-zinc-800");
    document.querySelector("[data-bgblack]").classList.toggle("bg-black");
    document.querySelector("[data-bgblack]").classList.toggle("bg-white");

    document.querySelectorAll("[data-languageSelection]").forEach((items) => {
      items.classList.toggle("bg-slate-900");
    });
    document.querySelectorAll("[data-languageSelection]").forEach((items) => {
      items.classList.toggle("bg-white");
    });
    document.querySelectorAll("[data-languageSelection]").forEach((items) => {
      items.classList.toggle("text-black");
    });
    document.querySelectorAll("[data-languageSelection]").forEach((items) => {
      items.classList.toggle("text-white");
    });

    document.querySelector("#spans").classList.add("text-Primary");
    document.querySelector("#spans").classList.remove("text-Accent");
    document.querySelector("#black").classList.remove("bg-Primary");
    document.querySelector("#black").classList.add("bg-Accent");
    document
      .querySelector("#borderleftcolor")
      .classList.remove("border-Primary");
    document.querySelector("#borderleftcolor").classList.add("border-Accent");
    document.querySelectorAll("[data-borderPrimary]").forEach((items) => {
      items.classList.remove("border-Primary");
      items.classList.add("border-Accent");
    });
    document.querySelector("#contactBtn").classList.add("bg-Accent");
    document.querySelector("#contactBtn").classList.remove("bg-Primary");
    document.querySelector("#touchBar").classList.add("bg-Accent");
    document.querySelector("#touchBar").classList.remove("bg-Primary");
    document.querySelector("[data-sameClr]").classList.add("bg-white");
    document.querySelector("[data-sameClr]").classList.remove("bg-black");
    document.querySelector("[data-arrow]").classList.add("text-white");
    document.querySelector("[data-arrow]").classList.remove("text-black");
    document
      .querySelector("[data-bgzinc400]")
      .classList.remove("shadow-[0_0px_20px_0px_hsl(233_8%_62%)]");
  } else if (localStorage.getItem("theme") === "white") {
    document
      .querySelector("[data-bgzinc400]")
      .classList.add("shadow-[0_0px_20px_0px_hsl(233_8%_62%)]");
    document.querySelector("[data-arrow]").classList.remove("text-white");
    document.querySelector("[data-arrow]").classList.add("text-black");
    document.querySelector("[data-sameClr]").classList.remove("bg-white");
    document.querySelector("[data-sameClr]").classList.add("bg-black");
    document.querySelector("#contactBtn").classList.remove("bg-Accent");
    document.querySelector("#contactBtn").classList.add("bg-Primary");
    document.querySelector("#touchBar").classList.remove("bg-Accent");
    document.querySelector("#touchBar").classList.add("bg-Primary");
    document.querySelectorAll("[data-borderPrimary]").forEach((items) => {
      items.classList.add("border-Primary");
      items.classList.remove("border-Accent");
    });
    document.querySelector("#black").classList.add("bg-Primary");
    document.querySelector("#black").classList.remove("bg-Accent");
    document.querySelector("#spans").classList.remove("text-Primary");
    document.querySelector("#spans").classList.add("text-Accent");
    document.querySelector("#quoteBtn").classList.add("bg-Primary");
    document.querySelector("#quoteBtn").classList.remove("bg-Accent");
    document.querySelector("#borderleftcolor").classList.add("border-Primary");
    document
      .querySelector("#borderleftcolor")
      .classList.remove("border-Accent");

    document
      .querySelector("[data-bgzinc300]")
      .classList.remove("shadow-[0_0px_30px_0px_hsl(233_8%_85%)]");
    document.querySelectorAll("[data-bggray500]").forEach((items) => {
      items.classList.toggle("bg-gray-500");
    });
    document.querySelectorAll("[data-bggray500]").forEach((items) => {
      items.classList.toggle("bg-zinc-800");
    });
    document.querySelectorAll("[data-bgzinc100]").forEach((items) => {
      items.classList.toggle("bg-zinc-100");
    });
    document.querySelectorAll("[data-bgzinc100]").forEach((items) => {
      items.classList.toggle("bg-zinc-800");
    });
    document.querySelector("[data-body]").classList.toggle("bg-white");
    document.querySelector("[data-body]").classList.toggle("bg-black");
    document.querySelectorAll("[data-textblack]").forEach((items) => {
      items.classList.toggle("text-black");
    });
    document.querySelectorAll("[data-textblack]").forEach((items) => {
      items.classList.toggle("text-white");
    });
    document.querySelectorAll("[data-textzinc700]").forEach((items) => {
      items.classList.toggle("text-zinc-700");
    });
    document.querySelectorAll("[data-textzinc700]").forEach((items) => {
      items.classList.toggle("text-[#d6d6d6]");
    });
    document.querySelector("[data-bgzinc300]").classList.toggle("bg-zinc-300");

    document.querySelector("[data-bgzinc300]").classList.toggle("bg-zinc-800");

    document.querySelector("[data-bgzinc400]").classList.toggle("bg-zinc-400");
    document.querySelector("[data-bgzinc400]").classList.toggle("bg-zinc-800");
    document.querySelector("[data-bgblack]").classList.toggle("bg-black");
    document.querySelector("[data-bgblack]").classList.toggle("bg-white");

    document.querySelectorAll("[data-languageSelection]").forEach((items) => {
      items.classList.toggle("bg-slate-900");
    });
    document.querySelectorAll("[data-languageSelection]").forEach((items) => {
      items.classList.toggle("bg-white");
    });
    document.querySelectorAll("[data-languageSelection]").forEach((items) => {
      items.classList.toggle("text-black");
    });
    document.querySelectorAll("[data-languageSelection]").forEach((items) => {
      items.classList.toggle("text-white");
    });
  }
});
