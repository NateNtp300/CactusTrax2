
var kick = document.getElementById("kick");
var snare = document.getElementById("snare");
var hat = document.getElementById("hat");
var clap = document.getElementById("clap");
var laser = document.getElementById("laser");
var Btn = document.getElementsByClassName("Btn");


//drop down menu changes
$('select#kicks').change(function(e){
    if(e.target.value == 'kick1'){
        $('#kick').attr('src','samples/Cymatics - House Kick 2.wav');
    }

    if(e.target.value == 'kick2'){
        $('#kick').attr('src','samples/kick3.wav');
    }

    if(e.target.value == 'kick3'){
        //jquery version
        $('#kick').attr('src','samples/VEC4 Electro Kicks 17.wav');

        //javascript version
        //document.getElementById('kick').src = 'samples/VEC4 Snares 002.wav';
    }
    
});

$('select#snares').change(function(e){
    if(e.target.value == 'snare1'){
        $('#snare').attr('src','samples/VEC4 Snares 002.wav');
    }

    if(e.target.value == 'snare2'){
        $('#snare').attr('src','samples/VEC4 Snares 018.wav');
    }

    if(e.target.value == 'snare3'){
        
        $('#snare').attr('src','samples/VEC4 Snares 038.wav');
    
    }
    
});


$('select#hat').change(function(e){
    if(e.target.value == 'hat1'){
        $('#hat').attr('src','samples/VEC1 Cymbals OH 001.wav');
    }

    if(e.target.value == 'hat2'){
        $('#hat').attr('src','samples/VEC4 Open HH 003.wav');
    }

    if(e.target.value == 'hat3'){
        
        $('#hat').attr('src','samples/VEC4 Open HH 008.wav');
    
    }
    
});

$('select#clap').change(function(e){
    if(e.target.value == 'clap1'){
        $('#clap').attr('src','samples/VEC4 Claps 005.wav');
    }

    if(e.target.value == 'clap2'){
        $('#clap').attr('src','samples/VEC4 Claps 009.wav');
    }

    if(e.target.value == 'clap3'){
        
        $('#clap').attr('src','samples/VEC4 Claps 011.wav');
    
    }
    
});


function audioKick(){

    kick.currentTime = 0;
    kick.play();

}

function audioSnare(){

    snare.currentTime = 0;
    snare.play();

}

function audioHat(){
    hat.currentTime = 0;
    hat.play();
}

function audioLaser(){
    laser.currentTime = 0;
    laser.play();
}

function audioClap(){
    clap.currentTime = 0;
    clap.play();
}

// Execute a function when the user releases a key on the keyboard
window.addEventListener("keydown", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    
    
    if (event.keyCode === 65) {
      
      kick.currentTime = 0;
      kick.play();
      
    }

    if (event.keyCode === 83){
        snare.currentTime = 0;
        snare.play();
    }

    if (event.keyCode === 68){
        hat.currentTime =0;
        hat.play();
    }

    if (event.keyCode === 70){
        laser.currentTime =0;
        laser.play();
    }

    if (event.keyCode === 71){
        clap.currentTime =0;
        clap.play();
    }
  }); 