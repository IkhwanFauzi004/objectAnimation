function setup() {
    //put setup code here
    createCanvas(800,500)


    x = 100;
    j = 0;

}

function draw() {
    // put drawing code here
    background(200);
    line(400,0,400,500);
    fill(122,234,100);
    rect(170,230,60,40);
    fill(200,234,100);
    rect(230,240,35,30);
    fill(140,0,100);
    strokeWeight(2);
    ellipse(180,270,15,15);
    ellipse(200,270,15,15);
    ellipse(240,270,15,15);


    var x = 570 + 50 * Math.sin( PI / 100*j);
    j+=1
    fill(122,234,100);
    rect(x, 230,60,40);
    var x = 630 + 50 * Math.sin( PI / 100*j);
    j+=1
    fill(200,234,100);
    rect( x,240,35,30);
    var x = 580 + 50 * Math.sin( PI / 100*j)
    j+=1
    fill(140,0,100);
    ellipse(x, 270,15,15);
    var x = 600 + 50 * Math.sin( PI / 100*j)
    j+=1
    ellipse(x, 270,15,15);
    var x = 640 + 50 * Math.sin( PI / 100*j)
    j+=1
    ellipse(x, 270,15,15);
    
}

