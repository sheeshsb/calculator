function display(val){
    document.getElementById('disArea').value+=val
}
 function solution() 
         { 
             let x = document.getElementById("disArea").value 
             let y = eval(x) 
             document.getElementById("disArea").value = y 
         } 
          function clearArea() 
         { 
             document.getElementById("disArea").value = "" 
         } 
          function squareRoot(){
        var x = document.getElementById("disArea").value;
        var sqrroot =Math.sqrt(x);
        document.getElementById('disArea').value=sqrroot;
}
 function squaree(){
        var y = document.getElementById("disArea").value;
        var sqr =Math.pow(y,2);
        document.getElementById('disArea').value=sqr;
}
function cube(){
        var z = document.getElementById("disArea").value;
        var sqr =Math.pow(z,3);
        document.getElementById('disArea').value=sqr;
}

        
         function backSp() {
    var value = document.getElementById("disArea").value;
    document.getElementById("disArea").value = value.substr(0, value.length - 1);
}
         
         var input= document.getElementById('disArea');
         input.addEventListener("keyup",function(event){
             if (event.keyCode===13){
                 event.preventDefault();
                 document.getElementById('Eqbutton').click();
             }
         });
         
         var input= document.getElementById('disArea');
         input.addEventListener("keyup",function(event){
             if (event.keyCode===67){
                 event.preventDefault();
                 document.getElementById('AcButton').click();
             }
         });
         
         
        