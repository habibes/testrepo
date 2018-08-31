//var osc, env,val=1;
var patch;
$.get('pd/3-6-1-2-frequencymodulation.pd', function(patchStr){
    patch = Pd.loadPatch(patchStr)
    Pd.start()
});

function setup(){

    console.log("Hola");
    createCanvas(640,480);
    background(157);
fill(0); 
    
    rect(50,50,100,100);
/*
    env = new p5.Env();
    osc = new p5.Oscillator();
    osc.freq(500);
    
    
    
    env.setADSR(0.1, 0.1, 0.1, 1);
    
    osc.amp(env);
  */  
    
    
}


function draw(){

    console.log(Pd);
    console.log(mouseX);
    Pd.send("modAmp", [mouseX]);
    Pd.send("carr", [mouseY]);

    background(157);
    fill(255);
   rect(mouseX,mouseY,70,70);
  
   
   
   if (val==0){
      
       ellipse(250,250,100,100);
   }else{

   }
}

function keyPressed(){

    Pd.send("on", [mouseX]);


    console.log("You Pressed a Key " + key);
    val = 0 ;
    var note = 0;
    switch(key){

        case "º":
        note = 48;
        break;

        case "1":
        note = 49;
        break;

        case "2":
        note = 50;
        break;

        case "3":
        note = 51;
        break;

        case "4":
        note = 52;
        break;

        case "5":
        note = 53;
        break;

        case "6":
        note = 54;
        break;

        case "7":
        note = 55;
        break;

        case "8":
        note = 56;
        break;

        case "9":
        note = 57;
        break;

        case "0":
        note = 58;
        break;

        case "'":
        note = 59;
        break;

        case "¡":
        note = 60;
        break;

        case "q":
        note = 61;
        break;

        case "w":
        note = 62;
        break;

        case "e":
        note = 63;
        break;

        case "r":
        note = 64;
        break;

        case "t":
        note = 65;
        break;

        case "y":
        note = 66;
        break;

        case "u":
        note = 67;
        break;

        case "i":
        note = 68;
        break;

        case "o":
        note = 69;
        break;

        case "p":
        note = 70;
        break;

        case "+":
        note = 71;
        break;

        case "a":
        note = 72;
        break;

        case "s":
        note = 73;
        break;

        case "d":
        note = 74;
        break;

        case "f":
        note = 75;
        break;

        case "g":
        note = 76;
        break;

        case "h":
        note = 77;
        break;

        case "j":
        note = 78;
        break;

        case "k":
        note = 79;
        break;

        case "l":
        note = 80;
        break;

        case "ñ":
        note = 81;
        break;

        case "<":
        note = 82;
        break;

        case "z":
        note = 83;
        break;

        case "x":
        note = 84;
        break;

        case "c":
        note = 85;
        break;

        case "v":
        note = 86;
        break;

        case "b":
        note = 87;
        break;

        case "n":
        note = 88;
        break;

        case "m":
        note = 89;
        break;

        case ",":
        note = 90;
        break;
    
        case ".":
        note = 91;
        break;
    
        case "-":
        note = 92;
        break;
    
        
    

    }
    /*
    osc.freq(midiToFreq(note));
    env.play();
    osc.start();
*/
}
function keyReleased(){


    Pd.send("off", [mouseX]);

    val = 1;
    
}
function volControl(value){
    console.log("tu valor es " + value);
    /*env.setRange(value,0);
    */
}