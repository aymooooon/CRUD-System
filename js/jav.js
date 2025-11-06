

    
    var productname=document.getElementById("product-name");
    var alert =document.getElementById("alert")
    var alertall =document.getElementById("alertall")

    var productprice =document.getElementById("product-price");
    var productcat =document.getElementById("product-catogary");
    var productdescription =document.getElementById("product-description");
    var tbody =document.getElementById("trr")
    var searchh=document.getElementById("searchinput")
    var updatebutton=document.getElementById("button1")


if(localStorage.getItem("data")==null){


     var list_product=[]





}else{
    var list_product=JSON.parse( localStorage.getItem("data"))
    
console.log(list_product)
}



displayproduct()


function create(){

if(validatename()&&productprice.value!=""){


    
 if(button1.innerHTML.includes("add")){
    var product={
        pname:productname.value,
        pprice:productprice.value,
        pcatogary:productcat.value,
        pdescription: productdescription.value
      
      
      
      }
      
    list_product.push(product)
// console.log(product)
// console.log(list_product)
var x=JSON.stringify(list_product)
localStorage.setItem("data",x)


// clear1
displayproduct()

 }  
 else{
    updatadeproduct()
    displayproduct()
 } 
}
else{
    alertall.classList.remove("d-none")
}



}

function clear1(){

      productname.value=" ";
    productprice.value=" ";
productcat.value=" ";
    productdescription.value=" ";
    // console.log("asdasdasd")
}
function displayproduct(){
    trs=""
    for(var i=0;i<list_product.length;i++){
        trs+=`
        <td>${i}</td>

        <td>${list_product[i].pname}</td>
        <td>${list_product[i].pprice}</td>
        <td>${list_product[i].pcatogary}</td>
        <td>${list_product[i].pdescription}</td>
        
        <td> <button  onclick="retrivedata(${i})"  class="btn btn-danger"> <i class=" fa-solid fa-pen"></i></button></td>
        <td><button onclick="delete1(${i})" class="btn btn-danger"> <i class="fa-solid fa-trash"></i></button></td>



       </tr>
        
        
        
        
        
        `
    }
    tbody.innerHTML=trs;

    console.log(trs)
}

function delete1(index){

    list_product.splice(index,1)
    localStorage.setItem("data",JSON.stringify ( list_product))
    displayproduct()


    
}





function search_product(){
 
    trs=""
    for(var i=0;i<list_product.length;i++){

if(list_product[i].pname.toLowerCase().includes(searchh.value.toLowerCase()) ){


            trs+=`
        <td>${i}</td>

        <td>${list_product[i].pname}</td>
        <td>${list_product[i].pprice}</td>
        <td>${list_product[i].pcatogary}</td>
        <td>${list_product[i].pdescription}</td>
        
        <td> <button class="btn btn-danger"> <i class=" fa-solid fa-pen"></i></button></td>
        <td><button onclick="delete1(${i})" class="btn btn-danger"> <i class="fa-solid fa-trash"></i></button></td>



       </tr>
        
        
        
        
        
        `
        tbody.innerHTML=trs;
    }
    

}




    // console.log(trs)
}
rows=0

function retrivedata(index){
rowss=index
    productname.value=list_product[index].pname
    productcat.value=list_product[index].pprice
    productprice.value=list_product[index].pcatogary
    productdescription.value=list_product[index].pdescription
    

button1.innerHTML="update"

}

function updatadeproduct(){
console.log(rowss)
list_product[rowss].pname=productname.value
list_product[rowss].pprice=productprice.value
list_product[rowss].pcatogary=productcat.value
list_product[rowss].pdescription=productdescription.value


clear1()
button1.innerHTML="add"

}


productname.addEventListener("blur",validatename)


function validatename(){

var vname= /(^[A-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/
var nameinput= productname.value


if(/^[A-Z]/.test(nameinput) ){

productname.classList.add("is-valid");
productname.classList.remove("is-invalid");
alert.classList.add("d-none");
alertall.classList.add("d-none");
    //  return true

    if(/[a-z]{3,10}$/.test(nameinput)){
        productname.classList.add("is-valid")
    productname.classList.remove("is-invalid")
    alert.classList.add("d-none")
    alertall.classList.add("d-none")
        return true;
    
    
    

    
 }
 else{
  productname.classList.add("is-invalid")
productname.classList.remove("is-valid")
alert.classList.remove("d-none")
alertall.classList.remove("d-none")
alert.innerHTML="second with small letter"

return false;


}


} 
else{
    productname.classList.add("is-invalid")
productname.classList.remove("is-valid")
alert.classList.remove("d-none")
alertall.classList.remove("d-none")
alert.innerHTML="start with cap"

return false;
}






}