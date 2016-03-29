

$(function(){

  // J'entre une valeur en input, je la récupère une fois la touche
  // entrée préssée.
   $('#task').keypress(function(e){
     var key = e.which;
     var value1 = $(this).val();
     if(key == 13){

       $('#current').text(value1);
       $('#current').addClass('animated swing');
       e.preventDefault();
     }

   })

   var $play = $('#play');
   var $stop = $('#stop');
  // Ici je déclare une variable running qui va dicter
  // le fonctionnenment de mon click sur play
  // elle fonctionnera ssi elle vaut true
  // ainsi quand je click sur stop, la valeur de running deviant
  // false et le compteur est bel et bien arrêté :)
   var running = true;
   $stop.click(function(e){
     running = false;
     e.preventDefault();
   });
   var minuteur = 25;
   var countdownBITCH =  1500;
   var secondes = 60;
   var onTEST = function(){
     if(secondes == 0){
       secondes = 60;
       minuteur--;
       console.log('matthieu le mec cool');
       $('.time').text(minuteur + ':' + secondes);

     }
     if (minuteur > 0 && secondes !== 0 && running == true){
       secondes--;
       $('.time').text(minuteur + ':' + secondes);

       setTimeout(onTEST, 1000);

     }

     console.log('je boucle');
   };
   $play.click(function(e){
     running = true;
     console.log(minuteur);


     onTEST();


     e.preventDefault();
   });



});
