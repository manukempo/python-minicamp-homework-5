console.log('Welcome to the Console!');

function validateForm(){
  var name = document.getElementById('nameInput').value;
  var species = document.getElementById('speciesInput').value;
  var age = document.getElementById('ageInput').value;

  if(!name.length || !species.length || !age.length){
    alert('Fields must not be blank');
    return false;
  }

  if(isNaN(parseInt(age)) || typeof parseInt(age) !== 'number'){
    alert('Age must take a number');
    return false;
  }
  return true;
}

// EXTRA CREDIT
// 1.
document.getElementById('changeColor').addEventListener('click', function(){
  var color = document.getElementById('textColor').value;
  var body = document.getElementById('body');
  body.style.color = color;
});

// 2.
document.getElementById('hideAll').addEventListener('click', function(){
  var body = document.getElementById('body');
  body.style.display = "none";
});
