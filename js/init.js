/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var uiConfig = {
    //githubdominio
        signInSuccessUrl:'https://lrmaldo.github.io/cv/public/',
        //localhost dominio
        //signInSuccessUrl: 'http://localhost:8383/cv/index.html',
        'callbacks': {
      // Called when the user has been successfully signed in.
      'signInSuccess': function(user, credential, redirectUrl) {
        handleSignedInUser(user);
        
// Do not redirect.
        return false;
      }
        },
        signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
         // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
          //firebase.auth.GithubAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
         // firebase.auth.PhoneAuthProvider.PROVIDER_ID,
          {
            provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
            // Invisible reCAPTCHA with image challenge and bottom left badge.
           
            defaultCountry: 'MX', // Set default country to the United Kingdom (+44).
              // For prefilling the national number, set defaultNationNumber.
              // This will only be observed if only phone Auth provider is used since
              // for multiple providers, the NASCAR screen will always render first
              // with a 'sign in with phone number' button.
              defaultNationalNumber: '1234567890',

              loginHint: '+11234567890'
          }
     
          
        ],
        
        // Terms of service url.
        tosUrl: '<your-tos-url>',
                 
      
      
          
       
      };
     



var handleSignedInUser = function(user) {
   
   
  document.getElementById('id_Salir').style.display = 'block';
  document.getElementById('descarga').style.display = 'block';
  document.getElementById('descarga1').style.display ='block';
  
  var storage = firebase.storage();
  
 // var storageRef = storage.ref();
  var httpsReference = storage.refFromURL('https://firebasestorage.googleapis.com/v0/b/cv-leo.appspot.com/o/cv_ing_Leonardo.pdf?alt=media&token=d289b2dc-1a1f-44bc-b370-3ea721bc7fbe');
  
  //var gsReference = storage.refFromURL('gs://cv-leo.appspot.com/cv_ing_Leonardo.pdf');
  // Español PDF
  var img = document.getElementById('descarga');
  img.href = 'https://firebasestorage.googleapis.com/v0/b/cv-leo.appspot.com/o/cv%2FCV%20Leonardo%20Maldonado_ES.pdf?alt=media&token=161cf0c0-00a4-452c-aa8c-92ea19d00f7f';
  img.download ="cv.pdf";
  
  // Ingles
  var img1 = document.getElementById('descarga1');
  img1.href ='https://firebasestorage.googleapis.com/v0/b/cv-leo.appspot.com/o/cv%2FCV%20Leonardo%20Maldonado_IN.pdf?alt=media&token=20264d4c-9652-47ff-a2ea-a4dca452a37e';
//  storageRef.child('cv_ing_Leonardo.pdf').getDownloadURL().then(function(url) {
//  // `url` is the download URL for 'images/stars.jpg'
//
//  // This can be downloaded directly:
//  var xhr = new XMLHttpRequest();
//  xhr.responseType = 'blob';
//  xhr.onload = function(event) {
//    var blob = xhr.response;
//  };
//  xhr.open('GET', url);
//  xhr.send();
//
//  // Or inserted into an <img> element:
//  var img = document.getElementById('descarga');
//  img.download = url;
//}).catch(function(error) {
//  // Handle any errors
//});
  
  $('descarga').each(function() {
  var $a = $(this),
      fileUrl = $a.attr('href');

  $a.attr('href', 'data:application/octet-stream,' + encodeURIComponent(fileUrl));
});
 $('descarga1').each(function() {
  var $a = $(this),
      fileUrl = $a.attr('href');

  $a.attr('href', 'data:application/octet-stream,' + encodeURIComponent(fileUrl));
});
  
console.log("error",user.email);
};




    var handleSignedOutUser = function() {
  document.getElementById('descarga').style.display = 'none';
  document.getElementById('id_Salir').style.display = 'none';
  ui.start('#firebaseui-auth-container', uiConfig);
  console.log("salio usuario");
  };  

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBEEid_WMKWcR8co2z7hDC47RE0hLVoCR4",
    authDomain: "cv-leo.firebaseapp.com",
    databaseURL: "https://cv-leo.firebaseio.com",
    projectId: "cv-leo",
    storageBucket: "cv-leo.appspot.com",
    messagingSenderId: "181262371618"
  };
  firebase.initializeApp(config);
  
var ui = new firebaseui.auth.AuthUI(firebase.auth());


firebase.auth().onAuthStateChanged(function(user) {
  //document.getElementById('loading').style.display = 'none';
  //document.getElementById('loaded').style.display = 'block';
 
  user ? handleSignedInUser(user) : handleSignedOutUser();
  
},function (error){
    var errorCode = error.code;
  var errorMessage = error.message;
  if (errorCode === 'auth/account-exists-with-different-credential') {
     document.getElementById('firebaseui-auth-container').style.display='block';
    
  } else {
    alert(errorMessage);
  }
  console.log(error);
});



//////////////////////////////////////////////////////////////////////////////////

 $( document ).ready(function() {
        "use strict";
        
         $("#si_modal").click(function(){
  
  //$('#id_Salir').toggle();
 // $('#firebaseui-auth-container').toggle();   
 document.getElementById('firebaseui-auth-container').style.display='block';
  
});

document.getElementById('id_Salir').addEventListener('click', function() {
    firebase.auth().signOut();
  });


        // NAV
        $('.button-collapse').sideNav({
            closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
            }
        );
        
        $('.modal').modal();
    /**************************************************************************
            Style demo
    **************************************************************************/
   
    $('.cv-style-switch').click(function(){
        if($(this).hasClass('open')){
            $(this).removeClass('open');
            $('#switch-style').animate({'right':'0'});
        }else{
            $(this).addClass('open');
            $('#switch-style').animate({'right':'-150'});
        }
    });
  
        
         //Portfolio fancybox
        $(".single_imadge").fancybox({
			padding: 4
		});
		
		 //Portfolio 
        $('#portfolio-item').mixItUp();
        
        // Sticky nav
        $("#sticky-nav").sticky({topSpacing:0});
        
        //Skills
        $(".determinate").each(function(){
            var width = $(this).text();
            $(this).css("width", width)
                .empty()
                .append('<i class="fa fa-circle"></i>');                
        });
        
    // Nav
        
   $('#example-one').onePageNav({
      changeHash: true,
      scrollSpeed: 750,
      scrollThreshold: 0.5,
     filter: ':not(.external)'
   });
        
    $('a[href^="#"].inpage-scroll, .inpage-scroll a[href^="#"]').on('click', function(e) {
       e.preventDefault();

        var target = this.hash,
           $target = $(target);
       $('.main-navigation a[href="' + target + '"]').addClass('active');
       $('.main-navigation a:not([href="' + target + '"])').removeClass('active');
        $('html, body').stop().animate({
            'scrollTop': ($target.offset()) ? $target.offset().top : 0
       }, 900, 'swing', function() {
           window.location.hash = target;
        });
    });
    
            
    //Conatct
     
        // Blog
        jQuery(window).on('load', function(){ var $ = jQuery;
            $('.blog').masonry({
                itemSelector: '.blog-post',
                columnWidth: '.blog-post',
                percentPosition: true
            });
        });
        
        // Contact form
        
        $("#contactForm").validator().on("submit", function (event) {
            if (event.isDefaultPrevented()) {
              // handle the invalid form...
              formError();
              submitMSG(false, "Did you fill in the form properly?");
            } else {
              // everything looks good!
              event.preventDefault();
              submitForm();
            }
         });


        function submitForm(){
            var database = firebase.database();
          // Initiate Variables With Form Content
         
          var name = $("#name").val();
          var email = $("#email").val();
          var message = $("#message").val();
          var aleatorio = Math.round(Math.random()*10000);
          firebase.database().ref('contacto/'+aleatorio+'-c/').set({
            name: name,
            email: email,
            message : message
          });
          $("#contactForm")[0].reset();
           var $toastContent = $('<span>Mensaje Enviado!!</span>');
             Materialize.toast($toastContent, 5000,'rounded');
    
//          $.ajax({
//              type: "POST",
//              url: "process.php",
//              data: "name=" + name + "&email=" + email + "&message=" + message,
//              success : function(text){
//                  if (text == "success"){
//                      formSuccess();
//                    } else {
//                      formError();
//                      submitMSG(false,text);
//                    }
//                }
//            });
        }
        function formSuccess(){
            $("#contactForm")[0].reset();
            submitMSG(true, "Message Sent!")
        }
        function formError(){
            $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
            function(){
              $(this).removeClass();
            });
        }
        function submitMSG(valid, msg){
            if(valid){
              var msgClasses = "h3 text-center fadeInUp animated text-success";
            } else {
              var msgClasses = "h3 text-center text-danger";
            }
            $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
        }
        
        //Tooltip
        $('.tooltipped').tooltip({delay: 50});
        
        //wow
        new WOW().init();
        
    });
    
    jQuery(document).ready(function($) {
        
        $('.sa-view-project-detail').on('click', function(event) {
            event.preventDefault();
            var href          = $(this).attr('href') + ' ' + $(this).attr('data-action'),
                dataShow      = $('#project-gallery-view'),
                dataShowMeta  = $('#project-gallery-view meta'),
                dataHide      = $('#portfolio-item'),
                preLoader     = $('#loader'),
                backBtn       = $('#back-button'),
                filterBtn     = $('#filter-button');

            dataHide.animate( { 'marginLeft':'-120%' }, { duration: 400, queue: false } );
            filterBtn.animate( { 'marginLeft':'-120%' }, { duration: 400, queue: false } );
            dataHide.fadeOut(400);
            filterBtn.fadeOut(400);
            setTimeout( function() { preLoader.show(); }, 400);
            setTimeout( function() {
                dataShow.load( href, function() {
                    dataShowMeta.remove();
                    preLoader.hide();
                    dataShow.fadeIn(600);
                    backBtn.fadeIn(600);
                });
            },800);
        });

        $('#back-button').on('click', function(event) {
            event.preventDefault();
            var dataShow    = $('#portfolio-item'),
                dataHide    = $('#project-gallery-view'),
                filterBtn   = $('#filter-button');

            $("[data-animate]").each( function() {
                $(this).addClass($(this).attr('data-animate'));
            });

            dataHide.fadeOut(400);
            $(this).fadeOut(400);
            setTimeout(function(){
                dataShow.animate( { 'marginLeft': '0' }, { duration: 200, queue: false } );
                filterBtn.animate( { 'marginLeft': '0' }, { duration: 200, queue: false } );
                dataShow.fadeIn(400);
                filterBtn.fadeIn(400);
            },400);
            setTimeout(function(){
                dataShow.find('.fadeInRight, .fadeInLeft, .fadeInUp, .fadeInDown').removeClass('fadeInRight').removeClass('fadeInLeft').removeClass('fadeInUp').removeClass('fadeInDown');
            },1500);
        });
    });
    
    function printDiv(nombreDiv) {
     var contenido= document.getElementById(nombreDiv).innerHTML;
     var contenidoOriginal= document.body.innerHTML;

     document.body.innerHTML = contenido;

     window.print();

     document.body.innerHTML = contenidoOriginal;
}
//***************************TRADUCTOR ********************************
 var arraytra = {
              'esp':{
                  'carrera':'Ing. en Sistemas Computacionales',
                  'acerca': 'Hola a todos, mi nombre es Leonardo Maldonado López \n\
                             soy Ingeniero en Sistemas Computacionales, Desarrolllador en aplicaciones Android.\n\
                             Comence con esta pasión de la programación desde que empece la carrara universitaria,\n\
                             me considero una persona responsable, dinámica y creativa, con facilidad de adaptación y capacidad de trabajar\n\
                             en equipo, en condiciones de alta presión, con iniciativa para resolver problemas eficientemente, lograr metas y objetivos',
                  'descargar':'Descargar CV',
                  'contactarme':'Contactarme',
                  'descaqui':'Descargar en español aquí',
                  'descaquiIn':'Descargar en Ingles aquí ',
                  'salir':'Salir',
                  'Cvdesc':'CV descarga',
                  'por':'Por razones de seguridad,solo pido que inicies sesión para poder descargar mi CV! gracias',
                  'sideseo':'Sí, deseo descargar',
                  'habilidades':'Habilidades',
                  'habpro':'Habilidades Profesionales',
                  'html':'Html Y Css',
                  'otras':'Otras más',
                  'instas':'Instalación de Software',
                  'instah':'Instalación de Hardware',
                  'insta':'Instalación CCTV',
                  'instar': 'Instalación de Redes',
                  'habper': 'Habilidades Personales',
                  'comunicacion':'Comunicación',
                  'trabajoem':'Trabajo en equipo',
                  'creatividad':'Creatividad',
                  'dedicacion':'Dedicación',
                  'ingles':'Inglés',
                  'expe':'Experiencia laboral',
                  'proback':'PROGRAMADOR BACKEND PHP',
                  'fechaa':'Abril 2017- Agosto 2017',
                  'descripcionpro':'Desarrolle una página web, sobre ventas o rentas de casas,terrenos y departamentos para la ciudad de Valladolid.'
                  ,'tecnico':'TÉCNICO EN SOPORTE',
                  'eventualmente':'Eventualmente',
                  'joyeria':'Joyería Patrón',
                  'descripcionjoye':'Me enfoque en el mantenimiento y actualización del equipo de cómputo. Manejo y mantenimiento de la base de datos Access Microsoft, instalación de cámaras de seguridad, estos trabajos fueron eventuales',
                  'embajador':'EMBAJADOR EN EL ECOSISTEMA EMPRENDEDOR INADEM',
                  'fechaembajador':'Agosto de 2015 - Febrero de 2016 ',
                  'institulo':'Instituto Tecnológico Superior de Valladolid',
                  'descripcionembajador':'Desarrolle conocimientos de emprendimiento, registro de marca ante el IMPI(Instituto Mexicano de Propiedad Intelectual), modelo de negocio, plan financiero, daba capacitación a un grupo de 10 emprendedores en donde consistía orientarlos a utilizar una plataforma e-learning del INADEM, Auxiliar en la incubadora.',
                  'fechaplatzi':'Diciembre 2016 –Abril 2017',
                  'educacion':'Educación',
                  'contacto':'Contacto',
                  'nombre':'Nombre*',
                  'asunto':'Asunto*',
                  'mensaje':'Mensaje*',
                  'enviar':'Enviar',
                  'telefono':'Teléfono',
                  'docente':'Docente de Informática',
                  'ESFM':'Escuela Secundaria Francisco de Montejo',
                  'fechadocente':'January 2018 - News',
                  'descripcionDocente':'Soy Docente en esta Escuela Secundaria, imparto clases de informática'+ 
                  'a los tres niveles de secundaria de un total de 53 alumnos, enseño temas destacados como son la ofimática,'+
                  'introducción a la programación para este nivel educativo y principio de electrónica,además implemento la plataforma Google Classroom'+
                  'para reforzar sus conocimientos en el area de la informática, entre el equipo de trabajo con los demás docentes'+
                  'estoy en desarrollo de un sistema para medir el aprendizaje de lectura, producción de lectura y razomanamiento matemáticos'
              },
              'ing':{
                  'carrera':'Engineer in Computer Systems', 
                  'acerca':"Hello everyone, my name is Leonardo Maldonado López I'm an Engineer in Computer Systems, Developer in Android applications. I started with this passion for programming since I began my university career, I consider myself a responsible, dynamic and creative person, with easy adaptation and ability to work as a team, in high pressure conditions, with initiative to solve problems efficiently, achieve goals and objectives.",
                   'descargar':'Download CV',
                  'contactarme':'Contact me',
                  'descaqui':'Download spanish here',
                  'descaquiIn':'Download English here ',
                  'salir':'Exit',
                  'Cvdesc':'CV Download',
                  'por':'For security reasons, I only ask you to log in to download my CV! Thank you',
                  'sideseo':'Yes, I want to download',
                  'habilidades':'Skills',
                  'habpro':'Professional skills',
                  'html':'Html And Css',
                  'otras':'Others more',
                  'instas':'Software  Installation',
                  'instah':'Hardware Installation',
                  'insta':'CCTV Installation',
                  'instar': 'Installation Networks',
                  'habper': 'Personal skills',
                  'comunicacion':'Communication',
                  'trabajoem':'Teamwork',
                  'creatividad':'Creativity',
                  'dedicacion':'Dedication',
                  'ingles':'English',
                  'expe':'Work experience',
                  'proback':'PHP BACKEND PROGRAMMER',
                  'fechaa':'April 2017- August 2017',
                  'descripcionpro':'Develop a web page, about sales or rentals of houses, land and apartments for the city of Valladolid.'
                  ,'tecnico':'TECHNICAL SUPPORT',
                  'eventualmente':'Eventually',
                  'joyeria':'Patrón jewelry',
                  'descripcionjoye':'I focus on the maintenance and updating of computer equipment. Management and maintenance of the Microsoft Access database, installation of security cameras',
                  'embajador':'AMBASSADOR IN THE ECOSYSTEM ENTREPRENEUR OF THE INADEM',
                  'fechaembajador':'August 2015 - February 2016 ',
                  'institulo':'Instituto Tecnológico Superior de Valladolid',
                  'descripcionembajador':'Develop knowledge of entrepreneurship, trademark registration before the IMPI (Mexican Institute of Intellectual Property), business model, financial plan, gave training to a group of 10 entrepreneurs where it consisted in guiding them to use an e-learning platform of INADEM, Auxiliary in the incubator.',
                  'fechaplatzi':'December 2016 –April 2017',
                  'educacion':'Education',
                  'contacto':'Contact',
                  'nombre':'Name*',
                  'asunto':'Subject*',
                  'mensaje':'Message*',
                  'enviar':'Submit',
                  'telefono':'Phone',
                  'docente':'Computer Teacher',
                  'ESFM':'Francisco de Montejo High School',
                  'fechadocente':'January 2018 - News',
                  'descripcionDocente': 'I am a teacher in this Secondary School, I teach computer classes to the three secondary'+
                  'levels of a total of 53 students, I teach outstanding topics such as office automation,'+
                  'introduction to programming for this educational level and electronic principle, I also'+ 
                 'implement the Google platform Classroom to reinforce their'+
                 'knowledge in the area of ​​computer science, among the team working with other teachers'+
                'I am developing a system to measure reading learning, reading production and mathematical reasoning'
              }
              
            };
            
            
            $(function(){
                $('.traductor').click(function(){
                    var lan = $(this).attr('id');
                
                 
                    $('.tras').each(function(index,element){
                       $(this).text(arraytra[lan][$(this).attr('key')]); 
                    });
                 });
            });
           

            