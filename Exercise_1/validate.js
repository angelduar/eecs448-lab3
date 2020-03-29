function validator()
{
  var password1 = document.getElementById("input1");
  var password2 = document.getElementById("input2");
  if(password1.value.length < 8)
  {
    alert("password needs to have 8 or more characters");
  }
  if(password1.value == password2.value)
  {
    alert("passwords match !");
  }
  else
  {
    alert("password do not match :(");
  }
}
