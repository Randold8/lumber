// Define prices for materials and sizes
const prices = {
  'content-section1': 15000,
  'content-section2': 450,
}
  
  // Calculate and update the price for section1
  function calculateAndUpdatePrice(sectionId) {
  
    const section = document.getElementById(sectionId);
  
     const quantityInput = section.querySelector('input[type=number][name="quantity"]');
  
     const quantityValue = parseInt(quantityInput.value,10);
  
     // Calculate total price using our pricing data structure above.
     let totalPrice;
  
     try {
        totalPrice = prices[section.id] * quantityValue;
  
        // Handle case where no pricing data available.
        if (!totalPrice && totalPrice !==0){
           throw new Error("No pricing available for selection.");
        }
  
      } catch(error) {
          console.log(error.message);
          totalPrice ="N/A";
  
          }
  
       // Update UI - Assuming there is only one p element to show price within each content section
  
       const priceDisplayElement=section.querySelector('p[id="price"]');
  
       if(priceDisplayElement){
         priceDisplayElement.textContent=`${totalPrice} руб. без НДС`;
       }else{
         console.warn(`No element found to display the calculated price in ${sectionId}`);
         }
  }
  
  
  // Attach onChange event listeners to recalculate whenever user makes changes.
  document.querySelectorAll('.content select,.content input[type=number]').forEach(input => {
  
   input.addEventListener('change', () => {
  
   let parentSection=input.closest('.content').id;
  
  calculateAndUpdatePrice(parentSection);
  
  });
  });
  document.addEventListener("DOMContentLoaded", function () {
    calculateAndUpdatePrice('content-section1');
    calculateAndUpdatePrice('content-section2');
  });
  