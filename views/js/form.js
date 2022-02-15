function encodeImageFileAsURL(element) {
  let file = element.files[0];
  let reader = new FileReader();
  reader.onloadend = function() {
    console.log('RESULT', reader.result)
  }
  reader.readAsDataURL(file);
}

function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,    
  function(m,key,value) {
    vars[key] = value;
  });
  return vars;
}

function activateForm(){
    const name = document.getElementById('name').value;
    const image = document.getElementById('user_group_logo-1').value;
    const image2 = document.getElementById('user_group_logo-2').value;
    const adress = document.getElementById('adress').value;
    const birthDate = document.getElementById('birthDate').value;
    const birthPlace = document.getElementById('birthPlace').value;
    const gender_select = document.querySelector('#gender-select option:checked').parentElement.label;
    const data = {
      username: atob(getUrlVars()["i"]),
      name: name,
      gender: gender_select,
      adress: adress,
      birthDate: birthDate,
      birthPlace: birthPlace,
      image1 = image,
      image2 = image2
    }
    const r = new XMLHttpRequest();
    r.open('POST', '/api/post/json');
    r.setRequestHeader('Content-Type', 'application/json');
    const processed_data = JSON.stringify(data);
    r.send(processed_data);
}