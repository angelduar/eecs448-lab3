function background()
{
    
    let back = document.getElementById("background-color").value;
    let tag = document.getElementById("sometag");
    if(back == "original")
    {
        tag.style.backgroundColor = "white";
    }
    else if(back == "red")
    {
        tag.style.backgroundColor = "red";

    }
    else if(back == "blue")
    {
        tag.style.backgroundColor = "blue";
    }
    else if(back == "green")
    {
        tag.style.backgroundColor = "green";
    }
}
function border()
{
    let bo = document.getElementById("border-color").value;
    let tag = document.getElementById("sometag");
    if(bo == "red")
    {
        tag.style.borderColor = "red";
    }
    else if(bo == "blue")
    {
        tag.style.borderColor = "blue";
    }
    else if(bo == "green")
    {
        tag.style.borderColor = "green";
    }
    else if (bo == "original")
    {
        tag.style.borderColor = "black";
    }
}