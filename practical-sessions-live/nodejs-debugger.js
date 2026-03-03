function calculateUnitPrice(totalPrice, totalCount) {
    debugger;
  let unitPrice =  Math.round(totalPrice/totalCount);
  return unitPrice;
}

function showPriceDetails() {
  let unitPrice = calculateUnitPrice(250, 15);
  console.log("Unit Price is " + unitPrice);
}

showPriceDetails();
