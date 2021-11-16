var test1="AAAA1236789"
//$(".pincode").on(keyup)
alert(zipcode(test1));

$(".pincode").on('keyup',function(){
   var pincode=$(".pincode").val();
	 var pincode =zipcode(pincode);
   $(".pincode").val(pincode);
})

function zipcode(str) 
{
  var res= /^[1-9][0-9]{5}$/.test(str);
  var pincode='';
  if(!res){
  	str= str.replace(/[^\d]+/, "");
    str=str.replace(/^0/, "");
    str=str.substring(0, 6);
    pincode= str
  }else{
   pincode= str;
  }
 
  return pincode;
}
