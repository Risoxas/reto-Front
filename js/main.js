/* Seccion David */


/*Fin*/
/*Seccion Mario */


/*Fin*/
/*Seccion Ivan */
$(document).ready(() => {

  $(".btn").click(function () {
    const value = $(this).attr("data-filter");
    switch (value) {
      case "feed":
        console.log("Feed");
        break;
      case "week":
        console.log("Week");
        break;
      case "month":
        console.log("Month");
        break;
      case "year":
        console.log("Year");
        break;
      case "infinity":
        console.log("Inifnity");
        break;
      default:
        console.log("Not used");
    }
  });

});

/*FIn*/
/*Seccion Jav */

/*Fin*/