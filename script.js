document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     LINK DO WHATSAPP
  ========================== */

  /*
    COLOQUE SEU NÚMERO AQUI.

    Exemplo:

    const telefone = "5585999999999";

    Não coloque espaços, +, parênteses ou traços.
  */

  const telefone = "SEU_NUMERO_AQUI";


  const mensagem =
    "Olá! Tenho uma dúvida sobre a Bíblia do Minecraft.";


  const whatsappLink =
    document.getElementById("whatsappLink");


  if (whatsappLink) {

    const url =
      "https://wa.me/" +
      telefone +
      "?text=" +
      encodeURIComponent(mensagem);


    whatsappLink.href = url;

  }


  /* =========================
     ROLAGEM SUAVE
  ========================== */

  document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

      link.addEventListener("click", event => {

        const target =
          document.querySelector(
            link.getAttribute("href")
          );


        if (target) {

          event.preventDefault();


          target.scrollIntoView({
            behavior: "smooth"
          });

        }

      });

    });


  /* =========================
     ANIMAÇÃO AO APARECER
  ========================== */

  const elements =
    document.querySelectorAll(
      ".benefit-card, .product-content, .product-image"
    );


  const observer =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              "visible"
            );

          }

        });

      },
      {
        threshold: 0.15
      }
    );


  elements.forEach(element => {

    observer.observe(element);

  });


  /* =========================
     BOTÕES DA HOTMART
  ========================== */

  const hotmartButtons =
    document.querySelectorAll(
      'a[href*="go.hotmart.com"]'
    );


  hotmartButtons.forEach(button => {

    button.addEventListener("click", () => {

      console.log(
        "Redirecionando para a Hotmart..."
      );

    });

  });

});
