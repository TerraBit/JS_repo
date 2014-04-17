// if D = 1; C = PI
// C = 2PIr



var getCirc = function(x){
  var unit_m = '';
  var unit = document.getElementById('circ_measurement');
  var given = document.getElementById('circ_given_type');

  function print_rad(){
  document.getElementById('para').innerHTML = 'result: ' + rad_circ.toFixed(4) + unit_m;
};

  function print_dia(){
 document.getElementById('para').innerHTML = 'result: ' + dia_circ.toFixed(4) + unit_m; 
};
  
  if (given.value === 'radius'){
    var rad_circ = 2 * Math.PI * x;
    
    if (unit.value === 'km'){
      unit_m = " km";
      print_rad();
    }
    else if (unit.value === 'ft'){
      unit_m = " ft";
      print_rad();
    }
  }
  else if (given.value === 'diameter'){
  var dia_circ = Math.PI * x;
    if(unit.value === 'km'){
      unit_m = " km";
      print_dia();
     }
    else if (unit.value === 'ft'){
      unit_m = " ft";
      print_dia();
    }
  }
};






//getCirc(5);

var getArea = function(radius){
  var area = Math.PI * Math.pow(radius,2);
  document.getElementById('enter_area').innerHTML = area.toFixed(4) + ' sq';
};

//getArea(5);


var getCelc = function(fahrenheit){
  var pad = 5/9;
  var celcius = (fahrenheit-32)*pad;
  console.log('Celcius: '+ celcius);
};

//getCelc(68);

var getFahr = function(celcius){
  var pad = 9/5;
  var fahrenheit = (pad * celcius) +  32;
  console.log( 'Fahrenheit: '  + fahrenheit);
};
//getFahr(20);