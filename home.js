const locations = [
    { id: 57, value: "Rutherford & Bathurst – Maple" },
    { id: 121, value: "Avenue & Lawrence – Toronto" },
    { id: 124, value: "University & Adelaide – Toronto" },
    { id: 269, value: "Yonge & Sheppard – Toronto" },
    { id: 1037, value: "Yonge & Bloor – Toronto" },
    { id: 1417, value: "Yorkdale – Toronto" },
    { id: 3053, value: "Spadina" },
    { id: 3602, value: "Front" },
    { id: 3608, value: "Landwer Kitchen Hub – Vaughan" },
  ];
  let currentLocationId = locations[0].id;
  
  $(() => {
    const popup = $(".loc-options-popup").first();
  
    // Append each location option to the popup
    popup.append(
      $.map(locations, (location) => {
        return $("<p>")
          .addClass("loc-option")
          .addClass(location.id === currentLocationId ? "selected" : "")
          .text(location.value)
          .data("id", location.id)
          .on("click", function () {
            currentLocationId = $(this).data("id");
  
            $(".loc-option").removeClass("selected");
            $(this).addClass("selected");

            $(".loc-select-box > h4").text(location.value);
  
            // popup.removeClass("active");
          });
      })
    );
  
    // Toggle the popup on click
    $(".loc-select-box").on("click", () => {
      popup.toggleClass("active");
    });
  });
  