//mobile size translate-x-[27px]
const toggler = document.querySelectorAll("[data-languageSelection]");
toggler.forEach((items) => {
  items.addEventListener("change", () => {
    if (items.value == "Deutsch") {
      document.querySelector("#heading").innerHTML =
        "<span class='text-Accent font-[600]'>Benutzerdefinierte PCs</span> sind in Sicht";
      document.querySelector("#titleP").innerText =
        "Keine Notwendigkeit für überteuerte Sonderanfertigungen. Pro Kunde erstellt, keine versteckten Kosten.";
      document.querySelector("#quoteBtn").innerText =
        "Holen Sie sich ein Angebot";
      document.querySelector("#serviceweprovideHeading").innerText =
        "Dienstleistungen, die wir anbieten";
      document.querySelector("#ourservices").innerText = "unsere Leistungen";
      document.querySelector("#servicesPara").innerText =
        "Wir bieten viele Dienstleistungen an. Sie können den Service auswählen, den Sie benötigen, indem Sie uns kontaktieren. Wir sind seit 2 Jahren im Einsatz.";
      document.querySelector("#servicesBtn").innerHTML =
        "Dienstleistungen<i class='fa-solid fa-arrow-right'></i>";
      document.querySelector("#ourgallery").innerHTML = "Unsere Galerie";
      document.querySelector("#galleryPara").innerHTML =
        "Schauen Sie sich unsere Galerie an. Die Galerie zeigt die Projekte, die wir bisher realisiert haben. Unsere RIGs enthalten viele PCs.";
      document.querySelector("#galleryBtn").innerHTML =
        "Galerie<i class='fa-solid fa-arrow-right'></i>";
      document.querySelector("#aboutusText").innerHTML = "Über uns";
      document.querySelector("#aboutusPara").innerHTML =
        "Wir sind EPC-Tech. Wir bauen seit 2019 PCs. Bisher haben wir über 3000 Kunden betreut.";
      document.querySelector("#aboutusBtn").innerHTML =
        "Über uns<i class='fa-solid fa-arrow-right'></i>";
      document.querySelector("#contacHeading").innerText =
        "Kontaktieren Sie uns";
      document.querySelector("#getintouch").innerText =
        "Nehmen Sie Kontakt auf";
      document.querySelector("#contactPara").innerText =
        "Kontaktieren Sie uns über die unten angegebenen Methoden:";
      document.querySelector("#messagePlaceholder").innerText = "Nachricht";
      document.querySelector("#textareaContact").placeholder = "Nachricht";
      document.querySelector("#contactBtn").innerText = "einreichen";
    } else {
      document.querySelector("#heading").innerHTML =
        "<span class='text-Accent font-[600]'>Custom PC's </span> are on the Horizon";
      document.querySelector("#titleP").innerText =
        "No need for overpriced custom builds. Built per customer, no hidden costs.";
      document.querySelector("#quoteBtn").innerText = "Get a quote";
      document.querySelector("#serviceweprovideHeading").innerText =
        "Dienstleistungen, die wir anbieten";
      document.querySelector("#ourservices").innerText = "Our Services";
      document.querySelector("#servicesPara").innerText =
        "We provide a lot of services. You can choose the service you need by contacting us. we have been serving for 2 years.";
      document.querySelector("#servicesBtn").innerHTML =
        "Services<i class='fa-solid fa-arrow-right'></i>";
      document.querySelector("#ourgallery").innerHTML = "Our Gallery";
      document.querySelector("#galleryPara").innerHTML =
        "Check out our gallery. The gallery shows the projects we have done so far. Our RIG's contain a lot of PC's.";
      document.querySelector("#galleryBtn").innerHTML =
        "Gallery<i class='fa-solid fa-arrow-right'></i>";
      document.querySelector("#aboutusText").innerHTML = "About Us";
      document.querySelector("#aboutusPara").innerHTML =
        "We are EPC-Tech. We have been building PC's since 2019. With over 3000+ customers served till now.";
      document.querySelector("#aboutusBtn").innerHTML =
        "About Us<i class='fa-solid fa-arrow-right'></i>";
      document.querySelector("#contacHeading").innerText = "Contact Us";
      document.querySelector("#getintouch").innerText = "Get In Touch";
      document.querySelector("#contactPara").innerText =
        "Contact us via the methods provided below:";
      document.querySelector("#messagePlaceholder").innerText = "Message";
      document.querySelector("#textareaContact").placeholder = "Message";
      document.querySelector("#contactBtn").innerText = "Submit";
    }
  });
});
