AFRAME.registerComponent("markerhandler", {
  init: async function() {
    // 1. Create the button
    var button1 = document.createElement("button");
    button1.innerHTML = "RATE DISH";
    button1.setAttribute("id", "rating-button");
    button1.setAttribute("class", "btn btn-warning");

    // 2. Create the button
    var button2 = document.createElement("button");
    button2.innerHTML = "ORDER NOW";
    button2.setAttribute("id", "order-button");
    button2.setAttribute("class", "btn btn-warning");

    // 2. Append somewhere
    var buttonDiv = document.getElementById("button-div");
    buttonDiv.appendChild(button1);
    buttonDiv.appendChild(button2);

    this.el.addEventListener("markerFound", () => {
      this.handleMarkerFound();
    });

    this.el.addEventListener("markerLost", () => {
      this.handleMarkerLost();
    });
  },
  handleMarkerFound: function() {
    // Changing button div visibility
    var buttonDiv = document.getElementById("button-div");
    buttonDiv.style.display = "flex";

    var ratingButton = document.getElementById("rating-button");
    var orderButtton = document.getElementById("order-button");

    // Handling Click Events
    ratingButton.addEventListener("click", function() {
      swal({
        icon: "warning",
        title: "Rate Dish",
        text: "Work In Progress"
      });
    });

    orderButtton.addEventListener("click", () => {
      swal({
        icon: "https://i.imgur.com/4NZ6uLY.jpg",
        title: "Thanks For Order !",
        text: "Your order will serve soon on your table!"
      });
    });
  },

  handleMarkerLost: function() {
    // Changing button div visibility
    var buttonDiv = document.getElementById("button-div");
    buttonDiv.style.display = "none";
  }
});
