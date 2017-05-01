
function val()
{
	
 var p1=document.form.fname.value;
 if(p1=="" || p1=="NULL")
 {
  alert("Name can not be blank!");
  return false;
 }
 if(!isNaN(p1))
 {
	alert("Name should contain characters only!");
  return false; 
 }
 if(p1.length>12 )
 {
   alert("Name should not be more than 12 letters !!");
  return false;
 }
 
 
 var p3=document.form.email.value;
  if(p3=="" || p3=="NULL")
 {
  alert("Email can not be blank!");
  return false;
 }
var at_pos=p3.indexOf("@");  
var dot_pos=p3.lastIndexOf(".");
var i;

for(i=at_pos;i<p3.length;i++)
{
  if(!(isNaN(p3.charAt(i))))
 {
  alert("Enter valid Email id!");
  return false;  
 }
}
 if (at_pos<1 || dot_pos<at_pos+2 || dot_pos+2>=p3.length)
  {
  alert("Enter valid email-id with '@' & '.'");
  return false;
  } 

  
  var p4=document.form.pwd.value;
  if(p4=="" || p4=="NULL")
 {
   alert("password can not be blank!");
   return false;
 }
 if(p4.length<8)
 {
   alert("password should be of min 8 letters!");
   return false;
 }
 
 
  var p5=document.form.rpwd.value;
 if(p5=="" || p5=="NULL")
 {
  alert("password can not be blank!");
  return false;
 } 
 if(p4!=p5)
 { 
  alert("Re-Enter same password.");
  return false;
 }
 
 
 
 var p6=document.form.contact.value;
 if(isNaN(p6))
 {
   alert("Enter numeric value for contact no.")	 ;
   return false;
 }
 if(p6=="" || p6=="NULL")
 {
   confirm("Adding your contact no. will be helpful for further communication")	 
  return false;
 }
 if(p6.length !=10)
  {
	 alert("contact should be 10 digit ");
	 return false;
  }
 
 var k4=document.form.t&c[0].checked;
if(!k4)
{
	alert("Accept terms & conditions !");
	return false;
}
 
var k1=document.form.gender[0].checked; 
var k2=document.form.gender[1].checked; 
var k3=document.form.gender[2].checked; 
if(k1)
{
	var p7 = "Mr. ";
}
if(k2)
{
	var p7 = "Ms. ";
}
if(k3)
{
	var p7 = "Ms./Mr. ";
}

confirm("WELCOME  to VEDH  "+p7+p1);

 }
 /*
 function valFile(Filename)
 {
	 var allowed_ext = new Array{"jpg","png","gif"};
	 var ext = Filename.split(".").pop();
	 var f=false;
	 for(var i=0;i<allowed_ext.length;i++)
	 {
		 if(allowed_ext[i]==ext)
		 {
			var f= true;
		 }
	 }
	 if(!f)
	 {
		 alert("Choose file of format jpg,gif,png");
		 return false;
	 }
 }
 */
 
 function sval()
 {
	var p3=document.sform.email.value;
  if(p3=="" || p3=="NULL")
 {
  alert("Email can not be blank!");
  return false;
 }
var at_pos=p3.indexOf("@");  
var dot_pos=p3.lastIndexOf(".");
var i;

for(i=at_pos;i<p3.length;i++)
{
  if(!(isNaN(p3.charAt(i))))
 {
  alert("Enter valid Email id!");
  return false;  
 }
}
 if (at_pos<1 || dot_pos<at_pos+2 || dot_pos+2>=p3.length)
  {
  alert("Enter valid email-id with '@' & '.'");
  return false;
  } 

  
  var p4=document.sform.pwd.value;
  if(p4=="" || p4=="NULL")
 {
   alert("password can not be blank!");
   return false;
 }
 if(p4.length<8)
 {
   alert("password should be of min 8 letters!");
   return false;
 }
 
 }