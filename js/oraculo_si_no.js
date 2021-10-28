    //var divquestion = document.getElementById('to-lock');
    // Get the div locker 
    //var divanswer = document.getElementById('div-locker');
//     function setupgateway()
//     {
// 	divquestion.style.display = 'none';
// 	divanswer.style.display = 'block';
//     }
// 
//     function removegateway()
//     {
// 	divquestion.style.display = 'block';
// 	divanswer.style.display = 'none';
//     }
    
    function oraculo(){
      //var question = document.getElementById('question');
      question = $("#question").val();
      
      if (!question){
	return false;
	
      }
	
      random = Math.floor(Math.random()*2 + 1);
      
      $("#questiondiv").hide();
      $("#answerdiv").addClass("in");   
      if (random == 1){
	$("#answer").html("<p>El Oraculo a hablado.</p><h1> Tu preguntal al Oraculo</h1><p>"+question+"</p><h1> La respuesta del Oraculo es </h1><p>SI</p>");
	
      }else{
	$("#answer").html("<p>El Oraculo a hablado.</p><h1> Tu preguntal al Oraculo</h1><p>"+question+"</p><h1> La respuesta del Oraculo es </h1><p>NO</p>");
      }
      return false;
    }
    
    function retry(){
      $("#question").val("");
      $("#answerdiv").removeClass("in");
      $("#questiondiv").fadeIn();  
    }
    
    //Ejecuto el Oraculo con el enter presionado o haciendo click en el boton
    function enter_pressed(e){if(e.keyCode==13){oraculo();}}
    
    const question = document.getElementById('question');
    question.addEventListener('keydown', enter_pressed);
    // $("#question").keydown(function(e){enter_pressed(e);});
    document.getElementById('consultar').onclick = oraculo;

    document.getElementById('retry').onclick = retry;
