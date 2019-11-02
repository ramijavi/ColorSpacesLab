function setup()
{
    RGBtoHSB(28, 16, 82);
    HSBtoRGB(251, 80, 32);
}

function draw()
{   
    createCanvas(500,500);
    
    //Changing color mode to HSB
    colorMode(HSB, 360, 100, 100);
    
    //Create square of color HSB(251, 80, 32)
    fill(251, 80, 32);
    square(0, 0 , 500);
    
    print(get(250,250));
}

//RGB to HSB conversion function
function RGBtoHSB(red, green, blue)
{
    //Normalize input
    let r = red/255;
    let g = green/255;
    let b = blue/255;
    
    //Obtain maximum and minimum input values
    let maximum = max(r,g,b);
    let minimum = min(r,g,b);
        
    //Declare h, s, and b variables
    var hue;
    var saturation;
    var brightness;   
    
    //Find hue value in radians
    if (maximum == minimum){
        hue = 0;
        
    } else if (maximum == r){
        hue = (Math.PI/3)*((g-b)/(maximum-minimum)%(2*Math.PI));
        
    } else if (maximum == g){
        hue = ((2*Math.PI)/3)+((Math.PI/3)*((b-r)/(maximum-minimum)));
        
    } else if (maximum == b){
        hue = ((4*Math.PI)/3)+((Math.PI/3)*((r-g)/(maximum-minimum)));
        
    }
    
    //Find saturation
    if (maximum == 0){
        saturation = 0;
    } else {
        saturation = 1 - (minimum/maximum);
    }
    
    //Find brightness
    brightness = maximum;
    
    //Convert hue to degrees
    if (hue > 0){
        hue = hue*(180/Math.PI);
    } else {
        hue = 360 + (hue*(180/Math.PI));
    }
    
    //Print result to console
    print("RGB(" + red + ", " + green + ", " + blue + ") = HSB(" + Math.round(hue) + ", " + Math.round(saturation*100) + ", " + Math.round(brightness*100) + ")");
}

//HSB to RGB conversion function
//Note: this function will not work if the hue value given is the maximum, i.e. 360 degrees. This is because the "i" value will then be 6, and there is no option specified for i=6 in the notes.
function HSBtoRGB(hue, saturation, brightness){
    
    //Normalize input
    let h = hue*(Math.PI/180);
    let s = saturation/100;
    let b = brightness/100;
    
    //Define variables i and f
    let i = Math.floor((3*h)/Math.PI);
    let f = ((3*h)/Math.PI) - i;
    
    //Calculating RGB values
    let p = b * (1 - s);
    let q = b * (1 - (f*s));
    let t = b * (1 - ((1 - f)*s));
   
    switch(i){
        case 0:
            printRGB(b,t,p);
            break;
        case 1:
            printRGB(q,b,p);
            break;
        case 2:
            printRGB(p,b,t);
            break;
        case 3:
            printRGB(p,q,b);
            break;
        case 4:
            printRGB(t,p,b);
            break;
        case 5:
            printRGB(b,p,q);
            break;
    }
    
    //Function that prints result to console
    //Saves on writting repeated code
    function printRGB(r, g , b){
        print("HSB(" + hue + ", " + saturation + ", " + brightness + ") = RGB(" + Math.round(r*255) + ", " + Math.round(g*255) + ", " + Math.round(b*255) + ")");
    }
}


