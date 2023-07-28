// https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/#integration-steps
//https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/build-integration/
//https://razorpay.com/docs/api/payments/payment-links/customise-payment-methods/


// CDN (you need to add this in main html file)
<script src="https://checkout.razorpay.com/v1/checkout.js"></script>

// Because of this CDN. I am able to Razorpay
var razorPayinstance = new Razorpay(options);

var options = {
    key: "rzp_test_xV39ZNbgU1Du4V", // Enter the Key ID generated from the Dashboard
    amount: 100 ,//check this out if this is paisa or INR // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: "INR",
    name: "MeShop. Checkout",
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

razorPayinstance.open();