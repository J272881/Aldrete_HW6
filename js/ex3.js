function bold_highlight() {

   const n = document.getElementsByTagName("p");
   for (let i = 0; i < n.length; i++) {
     n[i].style.fontWeight = "bold";
     n[i].style.backgroundColor = "yellow";
   }

 }
 bold_highlight();
 