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
    createCanvas(1200,800);
    
    photo1.filter(GRAY);
    photo2.filter(INVERT);
    
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
