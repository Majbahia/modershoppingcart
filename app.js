function updateProduct(product, price, caseIncres){
    const ProductInput = document.getElementById(product +'-number');
    let ProductNumber = ProductInput.value;
    if(caseIncres == true){
        ProductNumber = parseInt(ProductNumber) + 1;
    }
    else if(ProductNumber > 0){
        ProductNumber = parseInt(ProductNumber) - 1;
    }
    ProductInput.value = ProductNumber;
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = ProductNumber * price;
    totalCalculate();

}

function getInputValue(product){
    const productInputValue = document.getElementById(product +'-number');
    productAmount = parseInt(productInputValue.value);
    return productAmount;

}

function totalCalculate(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const taxAmount = subTotal/10;
    const totalAmount = subTotal + taxAmount;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = taxAmount;
    document.getElementById('total-price').innerText = totalAmount; 
}

//phone increase and decreas
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProduct('phone', 1219,  true);
})
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProduct('phone', 1219, false);
})

// case increase and decrease
document.getElementById('case-plus').addEventListener('click', function(){
   updateProduct('case', 59,  true);
})
document.getElementById('case-minus').addEventListener('click', function(){
   updateProduct('case', 59, false);
})