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

function keyPressed()
{
    if (!grayScale){
        grayScale = true;
        photo.filter(GRAY);
    } else {
        grayScale = false;
        photo.filter(INVERT);
    }
}
