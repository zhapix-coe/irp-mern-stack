function calculateUnitPrice(totalPrice, totalCount) {
    debugger;
  let unitPrice = totalCount / totalPrice;
  return unitPrice;
}

function showPriceDetails() {
  let unitPrice = calculateUnitPrice(250, 15);
  console.log("Unit Price is " + unitPrice);
}

showPriceDetails();
