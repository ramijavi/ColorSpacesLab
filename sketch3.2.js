let photo1;
let photo2;
let greyScale;

function preload()
{    
    photo1 = loadImage('IMG_20170608_124241_590.jpg');
    photo2 = loadImage('IMG_20170608_124241_590.jpg');

}

function setup()
{
    colorMode(HSB,360,100,100);
    
    createCanvas(1200,800);
    
    photo1.filter(GRAY);
    
    photo2.loadPixels();
    
    for(let i=0; i<photo2.width; i++){
        for(let a=0; a<photo2.height; a++){
            
            index = ((i+(a*photo2.width))*4);
            
            photo2.pixels[index] = calculateInvertHue(photo2.pixels[index]);
            photo2.pixels[index+1] = photo2.pixels[index+1]*1.2;
            photo2.pixels[index+2] = photo2.pixels[index+2]*0.8;
        }
    }
    photo2.updatePixels();
    
    grayScale = true;
}

function draw()
{   
    if(grayScale){
        image(photo1,0,0);   
    }else{
        image(photo2,0,0);
    }
    
    fill(0,0,0);
    circle(600,400,20);
}

function calculateInvertHue(h){
    if (h<180){
        return(h+180);
    } else {
        return(h-180);
    }
}

function keyPressed()
{
    if (!grayScale){
        grayScale = true;
    } else {
        grayScale = false;
    }
}
