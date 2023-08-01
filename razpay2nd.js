// Link for the documentation:
// https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/build-integration

// Add button code documentation:
// https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/build-integration#code-to-add-pay-button

document.getElementById("rzp-button1").onclick = function (e) {
    var options = {
      key: "rzp_test_xV39ZNbgU1Du4V", // Enter the Key ID generated from the Dashboard
      amount: 10000 ,//check this out if this is paisa or INR // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "accio portal",
      description: "This is your order", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      theme: {
        color: "#122620",
      },
      image: "https://cdn-icons-png.flaticon.com/128/891/891419.png",
      handler: function () { // run a function when your payment is successfull
        location.href = "./shop.html";
      },
      options: {
        checkout: {
          method: {
            netbanking: 0,
            card: 0,
            upi: 1,
            wallet: 0,
          },
        },
      },
    };
  
    var rzpy1 = new Razorpay(options);
    rzpy1.open();
    // clear mycart - localStorage
    e.preventDefault();
  };
  
  
  // creating Razorpay instance using options object
  // opening that instance