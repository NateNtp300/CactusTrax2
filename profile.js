//drop down menu changes
$('select#profileSelect').change(function(e){
    if(e.target.value == 'image1'){
        $('#profileImage').attr('src','img/profile1.png');
    }

    if(e.target.value == 'image2'){
        $('#profileImage').attr('src','img/profile2.png');
    }

    if(e.target.value == 'image3'){
        $('#profileImage').attr('src','img/profile3.png');

    }

    if(e.target.value == 'image4'){
        //jquery version
        $('#profileImage').attr('src','img/profile4.png');

        //javascript version
        //document.getElementById('kick').src = 'samples/VEC4 Snares 002.wav';
    }

    if(e.target.value == 'image5'){
        
        $('#profileImage').attr('src','img/profile5.png');

    }

    if(e.target.value == 'image6'){
        
        $('#profileImage').attr('src','img/profile6.png');

    }

    if(e.target.value == 'image7'){
        
        $('#profileImage').attr('src','img/profile7.png');

    }
    
});