$(function () {
    const drinks = [
      { label: "Americano", tab: "montiSpecialtyCoffee" },
      { label: "Classic Café Latte", tab: "montiSpecialtyCoffee" },
      { label: "Caramel Macchiato", tab: "montiSpecialtyCoffee" },
      { label: "Brown Sugar Latte", tab: "montiSignatureFancy" },
      { label: "Gula Melaka Latte", tab: "montiSignatureFancy" },
      { label: "Dolce Latte", tab: "montiSignatureFancy" },
      { label: "Steoberee Latte", tab: "coffeeFree" },
      { label: "Matcha Latte", tab: "coffeeFree" },
      { label: "Lemonade Sparkling", tab: "coffeeFree" },
      { label: "ChocoChip", tab: "montifrappe" },
      { label: "Caramel Espresso", tab: "montifrappe" },
      { label: "Mocha", tab: "montifrappe" },
    ];

    $("#autocomplete").autocomplete({
      source: drinks,
      select: function (event, ui) {
        showTab(ui.item.tab);
        // Scroll to the section smoothly
        document
          .getElementById(ui.item.tab)
          .scrollIntoView({ behavior: "smooth" });
      },
    });
  });