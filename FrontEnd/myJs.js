

function d() {
    var x = document.getElementById("fromUser").value;
    document.getElementById("fromUser").value = "";
    var newdiv1 = document.createElement("div");
    newdiv1.classList.add("row");
    var newdiv2 = document.createElement("div");
    newdiv2.classList.add("col");
    newdiv1.appendChild(newdiv2);
    var myspan=document.createElement("button");
    newdiv2.appendChild(myspan);
    myspan.style.backgroundColor="#D8D8D8";
    myspan.style.borderRadius="30px";
    myspan.style.border="none";
    myspan.innerHTML += x;
    newdiv2.style.textAlign="right";
    newdiv2.style.margin="4px";
    
    document.getElementById("chatcol").appendChild(newdiv1);
    forposting(x);
  

}
function scrollToEnd(){
	var chatList = document.getElementById("chatcol");
	chatList.scrollTop = chatList.scrollHeight;
}

function forposting(x) {

    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            var newdiv3 = document.createElement("div");
            newdiv3.classList.add("row");

            var newdiv4 = document.createElement("div");
            newdiv4.classList.add("col");

            var img = document.createElement("img");
            img.src = "https://www.autonise.com/assets/goodUI/internships/chatbot/chat.svg";
            img.style.borderRadius = "50%";
            newdiv3.appendChild(newdiv4);
            img.width="45";
            img.height="45";
            var myspan2=document.createElement("button");
            
           newdiv3.style.textAlign="left";
           newdiv4.appendChild(img);
           img.style.margin="2px";
            myspan2.innerHTML += this.responseText;
            myspan2.style.backgroundColor="#00BCA8";
            myspan2.style.color="white";
            myspan2.style.borderRadius="30px";
            myspan2.style.border="none";
            myspan2.style.textAlign="left";
            newdiv4.style.overflow="hidden";
            newdiv4.classList.add("d-flex");
            
            myspan2.style.justifyContent="space-between";
            newdiv4.appendChild(myspan2);
            document.getElementById("chatcol").appendChild(newdiv3);
            newdiv4.scrollTo(0, document.getElementById('newdiv3').offsetHeight);
            scrollToEnd();

            
            
           
           
           
           
           


           

        }
    };



    url="http://3.108.191.162/api/";
    xhttp.open("POST",url,true);
     xhttp.send(x);


}
