var i = 0;
var imageArray  = []
imageArray[0] = document.getElementById("image1");
imageArray[1] = document.getElementById("image2");
imageArray[2] = document.getElementById("image3");
imageArray[3] = document.getElementById("image4");
imageArray[4] = document.getElementById("image5");
function show()
{
    
}
function slide(parameter)
{   
    if(parameter == 'next')
    {
        if( i == imageArray.length-1)
        {
            imageArray[i].style.display = 'none';
            imageArray[0].style.display = 'block';
            i = 0;
        }
        else if(i < imageArray.length)
        {
            imageArray[i].style.display = 'none';
            imageArray[i+1].style.display = 'block';
            i++;
        }
    }
    else if(parameter == 'previous')
    {
        if(i==0)
        {
        imageArray[i].style.display = 'none';
        imageArray[imageArray.length-1].style.display = 'block';
        i=imageArray.length-1;
        }
        else
        {
            imageArray[i].style.display = 'none';
            imageArray[i-1].style.display = 'block';
            i--;
        }
    }
}
/*var pic1 = document.getElementById("image1");
    pic1.style = "display:none";
    var pic2 = document.getElementById("image2");
    pic2.style = "display:block";
    */