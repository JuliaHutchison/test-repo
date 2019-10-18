function itemsadd(){

    if(document.getElementsByTagName('li').length >6){//creating a array
        document.getElementsByTagName('p')[0].innerHTML="cannot hold anymore"; 
        //iner html is basicly allows you to wirte bettween the two things
        //in this case p 
    }
    else{
        var newitem= document.createElement("li");  //creates list item called newitem 
        var actualitem= document.createTextNode(document.getElementById("usersinput").value);
        newitem.appendChild(actualitem);
        var place= document.getElementsByTagName('ol')[0];
        place.appendChild(newitem);
        document.getElementById('usersinput').value="";
}
}


function takeawayitem(){
    var item = document.getElementById('takeaway').value;
    var getchild = document.getElementsByTagName('li')[item-1];
    var getparent =getchild.parentNode;
    getparent.removeChild(getchild);
    document.getElementsByTagName('p')[0].innerHTML=""; 
}
function erase(){
    document.getElementsByTagName('ol')[0].innerHTML="";
    document.getElementsByTagName('p')[0].innerHTML="";
}
//to check use console.log(typeof *AND THEN THE LINE OF CODE THATS RETURNING A VALUE)