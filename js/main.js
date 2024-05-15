
var productInputID = document.getElementById("productName")
 var productinputcategory = document.getElementById("productCategary")
 var productinputprice = document.getElementById("productPrice")
 var productinputdesc =document.getElementById("productDescribtion")
var productContainer =[]
if(localStorage.getItem('products')!=null){
  productContainer=JSON.parse(localStorage.getItem('products'))
  displayproduct()

}

 function addproduct(){
    var productobj = {
        name:productInputID.value,
        category:productinputcategory.value,
        price:productinputprice.value,
        desc:productinputdesc.value


    }
    productContainer.push(productobj)
    localStorage.setItem('products',JSON.stringify(productContainer))
    displayproduct()
    clearproduct()

 }
 function displayproduct(){
   var cartona=``
  for(var i=0;i<productContainer.length;i++){
    cartona+=`
  <tr class="m-auto">
    <td>${i}</td>
    <td>${productContainer[i].name}</td>
    <td>${productContainer[i].category}</td> 
    <td>${productContainer[i].price}</td> 
    <td>${productContainer[i].desc}</td>
    <td> <button onclick="deleteproduct(${i})" class="btn btn-outline-info">delete</button> </td>
    <td> <button onclick="updateproduct(${i})" class="btn btn-outline-info">update</button> </td>
  </tr>
    `

 }
 document.getElementById('tbodyy').innerHTML=cartona;
 


 }
 function clearproduct(){
  productInputID.value=""
  productinputcategory.value=""
  productinputdesc.value = ""
  productinputprice = ""
 }

 function deleteproduct(index){

  productContainer.splice(index,1)
  localStorage.setItem('products',JSON.stringify(productContainer))

  displayproduct()   

 }
 function searchproduct(){

  var searchin = document.getElementById('search').value
  var box2 = ``
    for(var i=0;i<productContainer.length;i++){
      if(productContainer[i].name.toLowerCase().includes(searchin.toLowerCase())){
        box2+=`
        <tr class="m-auto">
        <td>${i}</td>
        <td>${productContainer[i].name.replace(searchin,'<span>'+searchin+'</span>')}</td>
        <td>${productContainer[i].category}</td> 
        <td>${productContainer[i].price}</td> 
        <td>${productContainer[i].desc}</td>
        <td> <button onclick="deleteproduct(${i})" class="btn btn-outline-info">delete</button> </td>
        <td> <button class="btn btn-outline-info">update</button> </td>
      </tr>
        `

      }
    }
    document.getElementById("tbodyy").innerHTML = box2
  
 }
function clearall(){
  productContainer.splice(0,productContainer.length)
  localStorage.setItem('products',JSON.stringify(productContainer))
  displayproduct()  




}
function updateproduct(indexx){
    productContainer[indexx].name=productInputID.value
    productContainer[indexx].category=productinputcategory.value
    productContainer[indexx].price= productinputprice.value
    productContainer[indexx].desc=productinputdesc.value
    localStorage.setItem('products',JSON.stringify(productContainer))
    displayproduct()


}

