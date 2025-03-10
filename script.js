const toggler = document.querySelectorAll("[data-languageSelection]");
toggler.forEach((items) => {
  if (items.value == "Deutsch") {
    if (localStorage.getItem("theme") === "white") {
      document.querySelector("#heading").innerHTML =
        "<span class='text-Primary font-[600]' id='spans'>Personalisierte PCs</span> <br> für Sie </br>";
    } else {
      document.querySelector("#heading").innerHTML =
        "<span class='text-Accent font-[600]' id='spans'>Personalisierte PCs </span> <br> für Sie </br>";
    }
    document.querySelectorAll("[data-home]").forEach((items, i) => {
      items.innerText = "Startseite";
    });
    document.querySelectorAll("[data-gallery]").forEach((items) => {
      items.innerText = "Galerie";
    });
    document.querySelectorAll("[data-service]").forEach((items, i) => {
      items.innerText = "Unsere Leistungen";
    });
    document.querySelectorAll("[data-accounce]").forEach((items, i) => {
      items.innerText = "Aktuelles";
    });
    document.querySelectorAll("[data-aboutus]").forEach((items, i) => {
      items.innerText = "Über uns";
    });
    document.querySelectorAll("[data-legal]").forEach((items, i) => {
      items.innerText = "Impressum";
    });
    document.querySelector("#copyright").innerText =
      "Alle Rechte Vorbehalten -  EPC-Tech - 2025";

    document.querySelector("[data-daten]").innerText = "Datenschutz";
    document.querySelector("#titleP").innerText =
      "Nie wieder zu viel für Ihren PC bezahlen. Individuell zusammengestellt für jeden Kunden.";
    document.querySelector("#quoteBtn").innerText =
      "Holen Sie sich ein Angebot";
    document.querySelector("#serviceweprovideHeading").innerText =
      "Einblick in unsere Arbeit";
    document.querySelector("#ourservices").innerText = "Unsere Leistungen";
    document.querySelector("#servicesPara").innerText =
      "Wir bieten eine Vielzahl an Reparatur- und Anpassungsservices. Egal, ob Sie eine schnelle Reparatur oder einen individuellen PC-Bau benötigen – wir helfen Ihnen weiter. Schauen Sie hier an, was wir anbieten, und finden Sie die passende Lösung.";
    document.querySelector("#servicesBtn").innerHTML =
      "Dienstleistungen<i class='fa-solid fa-arrow-right'></i>";
    document.querySelector("#ourgallery").innerHTML = "Unsere Galerie";
    document.querySelector("#galleryPara").innerHTML =
      "Werfen Sie einen Blick auf unsere bisherigen Projekte! Unsere Galerie zeigt die PC's Builds und Reparaturen, die wir bereits durchgeführt haben. Lass dich inspirieren!";
    document.querySelector("#galleryBtn").innerHTML =
      "Galerie<i class='fa-solid fa-arrow-right'></i>";
    document.querySelector("#aboutusText").innerHTML = "Über uns";
    document.querySelector("#aboutusPara").innerHTML =
      "Bei EPC-Tech bauen und reparieren wir PCs seit 2019. Mit jedem Projekt wächst unsere Erfahrung, sodass wir stets hochwertige Ergebnisse liefern können. Ihre Technik ist bei uns in guten Händen.";
    document.querySelector("#aboutusBtn").innerHTML =
      "Über uns<i class='fa-solid fa-arrow-right'></i>";
    document.querySelector("#contacHeading").innerText = "Kontaktieren Sie uns";
    document.querySelector("#getintouch").innerText = "Nehmen Sie Kontakt auf";
    document.querySelector("#contactPara").innerText =
      "Kontaktieren Sie uns über:";
    document.querySelector("[data-call]").innerText = "Anruf";

    document.querySelector("#messagePlaceholder").innerText = "Nachricht";
    document.querySelector("#textareaContact").placeholder = "Ihre Nachricht";
    document.querySelector("#contactBtn").innerText = "Absenden";
  } else {
    if (localStorage.getItem("theme") === "white") {
      document.querySelector("#heading").innerHTML =
        "<span class='text-Primary font-[600]' id='spans'>Custom PCs</span> are on the horizon";
    } else {
      document.querySelector("#heading").innerHTML =
        "<span class='text-Accent font-[600]' id='spans'>Custom PCs</span> are on the horizon";
    }
    document.querySelector("[data-daten]").innerText = "Privacy Policy";
    document.querySelectorAll("[data-home]").forEach((items, i) => {
      items.innerText = "Home";
    });
    document.querySelectorAll("[data-gallery]").forEach((items) => {
      items.innerText = "Gallery";
    });
    document.querySelectorAll("[data-service]").forEach((items, i) => {
      items.innerText = "Services";
    });
    document.querySelectorAll("[data-aboutus]").forEach((items, i) => {
      items.innerText = "About Us";
    });

    document.querySelectorAll("[data-accounce]").forEach((items, i) => {
      items.innerText = "Announcements";
    });

    document.querySelectorAll("[data-legal]").forEach((items, i) => {
      items.innerText = "Legal Notice";
    });

    document.querySelector("#copyright").innerText = "Copyright 2025 EPC-Tech";
    document.querySelector("#titleP").innerText =
      "No need for overpriced custom builds. Built per customer, no hidden costs.";
    document.querySelector("#quoteBtn").innerText = "Get a quote";
    document.querySelector("#serviceweprovideHeading").innerText =
      "Dienstleistungen, die wir anbieten";
    document.querySelector("#ourservices").innerText = "Our Services";
    document.querySelector("#serviceweprovideHeading").innerText =
      "Services We Provide";
    document.querySelector("#servicesPara").innerText =
      "We offer a range of repair and customization services. Whether you need a simple fix or a complete PC build, we’ve got you covered. Check out what we offer here and find the right service for your needs.";
    document.querySelector("#servicesBtn").innerHTML =
      "Services<i class='fa-solid fa-arrow-right'></i>";
    document.querySelector("#ourgallery").innerHTML = "Our Gallery";
    document.querySelector("#galleryPara").innerHTML =
      "Take a look at our past projects! Our gallery showcases the custom PC builds and repairs we’ve completed. See what we’ve worked on and get inspired.";
    document.querySelector("#galleryBtn").innerHTML =
      "Gallery<i class='fa-solid fa-arrow-right'></i>";
    document.querySelector("#aboutusText").innerHTML = "About Us";
    document.querySelector("#aboutusPara").innerHTML =
      "At EPC-Tech, we’ve been building and repairing PCs since 2019. Our experience grows with every project we take on, ensuring high-quality results for our customers. Your tech is in good hands.";
    document.querySelector("#aboutusBtn").innerHTML =
      "About Us<i class='fa-solid fa-arrow-right'></i>";
    document.querySelector("#contacHeading").innerText = "Contact Us";
    document.querySelector("#getintouch").innerText = "Get In Touch";
    document.querySelector("#contactPara").innerText = "Contact us via:";
    document.querySelector("#messagePlaceholder").innerText = "Message";
    document.querySelector("#textareaContact").placeholder = "Your Message";
    document.querySelector("#contactBtn").innerText = "Submit";
    document.querySelector("[data-call]").innerText = "Call";
  }
  items.addEventListener("change", () => {
    if (items.value == "Deutsch") {
      document.querySelector("[data-daten]").innerText = "Datenschutz";
      if (localStorage.getItem("theme") === "white") {
        document.querySelector("#heading").innerHTML =
          "<span class='text-Primary font-[600]' id='spans'>Personalisierte PCs</span> <br> für Sie </br>";
      } else {
        document.querySelector("#heading").innerHTML =
          "<span class='text-Accent font-[600]' id='spans'>Personalisierte PCs </span> <br> für Sie </br>";
      }
      document.querySelector("#copyright").innerText =
        "Alle Rechte Vorbehalten -  EPC-Tech - 2025";

      document.querySelectorAll("[data-home]").forEach((items, i) => {
        items.innerText = "Startseite";
      });
      document.querySelectorAll("[data-gallery]").forEach((items) => {
        items.innerText = "Galerie";
      });
      document.querySelectorAll("[data-service]").forEach((items, i) => {
        items.innerText = "Unsere Leistungen";
      });
      document.querySelectorAll("[data-accounce]").forEach((items, i) => {
        items.innerText = "Aktuelles";
      });
      document.querySelectorAll("[data-aboutus]").forEach((items, i) => {
        items.innerText = "Über uns";
      });
      document.querySelectorAll("[data-legal]").forEach((items, i) => {
        items.innerText = "Impressum";
      });
      document.querySelector("[data-daten]").innerText = "Datenschutz";
      document.querySelector("#titleP").innerText =
        "Nie wieder zu viel für Ihren PC bezahlen. Individuell zusammengestellt für jeden Kunden.";
      document.querySelector("#quoteBtn").innerText =
        "Holen Sie sich ein Angebot";
      document.querySelector("#serviceweprovideHeading").innerText =
        "Einblick in unsere Arbeit";
      document.querySelector("#ourservices").innerText = "Unsere Leistungen";
      document.querySelector("#servicesPara").innerText =
        "Wir bieten eine Vielzahl an Reparatur- und Anpassungsservices. Egal, ob Sie eine schnelle Reparatur oder einen individuellen PC-Bau benötigen – wir helfen Ihnen weiter. Schauen Sie hier an, was wir anbieten, und finden Sie die passende Lösung.";
      document.querySelector("#servicesBtn").innerHTML =
        "Dienstleistungen<i class='fa-solid fa-arrow-right'></i>";
      document.querySelector("#ourgallery").innerHTML = "Unsere Galerie";
      document.querySelector("#galleryPara").innerHTML =
        "Werfe einen Blick auf unsere bisherigen Projekte! Unsere Galerie zeigt die PC's Builds und Reparaturen, die wir bereits durchgeführt haben. Lassen Sie sich inspirieren!";
      document.querySelector("#galleryBtn").innerHTML =
        "Galerie<i class='fa-solid fa-arrow-right'></i>";
      document.querySelector("#aboutusText").innerHTML = "Über uns";
      document.querySelector("#aboutusPara").innerHTML =
        "Bei EPC-Tech bauen und reparieren wir PCs seit 2019. Mit jedem Projekt wächst unsere Erfahrung, sodass wir stets hochwertige Ergebnisse liefern können. Deine Technik ist bei uns in guten Händen.";
      document.querySelector("#aboutusBtn").innerHTML =
        "Über uns<i class='fa-solid fa-arrow-right'></i>";
      document.querySelector("#contacHeading").innerText =
        "Kontaktieren Sie uns";
      document.querySelector("#getintouch").innerText =
        "Nehmen Sie Kontakt auf";
      document.querySelector("#contactPara").innerText =
        "Kontaktieren Sie uns über:";
      document.querySelector("[data-call]").innerText = "Anruf";
      document.querySelector("#textareaContact").placeholder = "Ihre Nachricht";
      document.querySelector("#messagePlaceholder").innerText = "Nachricht";
      document.querySelector("#contactBtn").innerText = "Absenden";
    } else {
      if (localStorage.getItem("theme") === "white") {
        document.querySelector("#heading").innerHTML =
          "<span class='text-Primary font-[600]' id='spans'>Custom PCs</span> are on the horizon";
      } else {
        document.querySelector("#heading").innerHTML =
          "<span class='text-Accent font-[600]' id='spans'>Custom PCs</span> are on the horizon";
      }
      document.querySelector("#copyright").innerText =
        "Copyright 2025 EPC-Tech";
      document.querySelector("[data-daten]").innerText = "Privacy Policy";
      document.querySelectorAll("[data-home]").forEach((items, i) => {
        items.innerText = "Home";
      });
      document.querySelectorAll("[data-gallery]").forEach((items) => {
        items.innerText = "Gallery";
      });
      document.querySelectorAll("[data-service]").forEach((items, i) => {
        items.innerText = "Services";
      });
      document.querySelectorAll("[data-aboutus]").forEach((items, i) => {
        items.innerText = "About Us";
      });

      document.querySelectorAll("[data-accounce]").forEach((items, i) => {
        items.innerText = "Announcements";
      });

      document.querySelectorAll("[data-legal]").forEach((items, i) => {
        items.innerText = "Legal Notice";
      });
      document.querySelector("#titleP").innerText =
        "No need for overpriced custom builds. Built per customer, no hidden costs.";
      document.querySelector("#quoteBtn").innerText = "Get a quote";
      document.querySelector("#serviceweprovideHeading").innerText =
        "Dienstleistungen, die wir anbieten";
      document.querySelector("#ourservices").innerText = "Our Services";
      document.querySelector("#serviceweprovideHeading").innerText =
        "Services We Provide";
      document.querySelector("#servicesPara").innerText =
        "We offer a range of repair and customization services. Whether you need a simple fix or a complete PC build, we’ve got you covered. Check out what we offer here and find the right service for your needs.";
      document.querySelector("#servicesBtn").innerHTML =
        "Services<i class='fa-solid fa-arrow-right'></i>";
      document.querySelector("#ourgallery").innerHTML = "Our Gallery";
      document.querySelector("#galleryPara").innerHTML =
        "Take a look at our past projects! Our gallery showcases the custom PC builds and repairs we’ve completed. See what we’ve worked on and get inspired.";
      document.querySelector("#galleryBtn").innerHTML =
        "Gallery<i class='fa-solid fa-arrow-right'></i>";
      document.querySelector("#aboutusText").innerHTML = "About Us";
      document.querySelector("#aboutusPara").innerHTML =
        "At EPC-Tech, we’ve been building and repairing PCs since 2019. Our experience grows with every project we take on, ensuring high-quality results for our customers. Your tech is in good hands.";
      document.querySelector("#aboutusBtn").innerHTML =
        "About Us<i class='fa-solid fa-arrow-right'></i>";
      document.querySelector("#contacHeading").innerText = "Contact Us";
      document.querySelector("#getintouch").innerText = "Get In Touch";
      document.querySelector("#contactPara").innerText = "Contact us via:";
      document.querySelector("#messagePlaceholder").innerText = "Message";
      document.querySelector("#textareaContact").placeholder = "Your Message";
      document.querySelector("#contactBtn").innerText = "Submit";
      document.querySelector("[data-call]").innerText = "Call";
    }
  });
});
