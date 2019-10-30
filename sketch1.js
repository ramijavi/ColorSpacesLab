var checkerWidth;
var checkerHeight;
var turn;
var index;
var squareDimensions;

function setup()
{
    pixelDensity(1);
    checkerWidth = 200;
    checkerHeight = 200;
    squareDimensions = 100;
    turn = 0;
    
    createCanvas(checkerWidth, checkerHeight);
}

function draw()
{   
    background(200);
    
    loadPixels();
    
    for (i=0; i < checkerWidth; i++){
        for (a=0; a < checkerHeight; a++){
            
            index = ((i+(a*checkerWidth))*4);
            
            if (turn == 0){
                pixels[index] = 48;
                pixels[index+1] = 200;
                pixels[index+2] = 190;
                pixels[index+3] = 255;
                if(a != checkerHeight-1){
                    turn++;
                }
            }else{
                pixels[index] = 205;
                pixels[index+1] = 10;
                pixels[index+2] = 195;
                pixels[index+3] = 255;
                if(a != checkerHeight-1){
                    turn--;
                }
            }        
        }
    }
    
    updatePixels();
    
    fill(126,105,192);
    square(checkerWidth/2,0,squareDimensions);
}
