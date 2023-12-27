   //---------------------for name---------------------
   let color = document.getElementById("h");
   let btnchange = document.getElementById("btnchange")
   function addColor() {
       color.style.color = ("red");
       // document.getElementById("h").classList.add("red")
       // document.getElementById("h").classList.toggle("red")
   }
   function removeColor() {
       color.style.color = ("");
   }
   function addremoveColor() {
       if (color.style.color == "") {
           color.style.color = ("red")
           btnchange.innerText = "REMOVE COLOR"
       } else {
           color.style.color = ("")
           btnchange.innerText = "ADD COLOR"
       }
   }

   //---------------for pragraph----------------------
   let pra = document.getElementById("p")
   let changebtn = document.getElementById("btntext")
   function hideText() {
       pra.style.visibility = "hidden"
   }
   function showText() {
       pra.style.visibility = "visible"
   }
   function hideshowTEXT() {
       if (pra.style.visibility == "hidden"
       ) {
           pra.style.visibility = "visible"
           changebtn.innerText = "HIDE TEXT"
       } else {
           pra.style.visibility = "hidden"
           changebtn.innerText = "SHOW TEXT"
       }
   }

   //---------------for image---------------------
   let myImg = document.getElementById("img");
   let changeimg = document.getElementById("mybtn")
   function showImg() {
       myImg.src = "m4.jpg"
   }
   function hideImg() {
       myImg.src = ""
   }
   function hideshowImg() {
       if (myImg.src=="") {
           myImg.src = "m4.jpg"
       } else {
           myImg.src = "bottom2.jpg"
       }
   }