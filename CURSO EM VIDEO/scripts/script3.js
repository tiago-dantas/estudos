document.getElementById('fname').focus();

let gname = function(){
    
}

let gage = function (){


}

let gnbt = function (){
    alert('Do you know read? Dont click on this buttom');

}

let grbt = function (){

    let gresult = document.getElementById('result').value; 

    if (gresult){
        document.getElementById('result').innerHTML = gresult;
    }
    else{
        document.getElementById('result').innerHTML = "You need to input all informations";
    }
}