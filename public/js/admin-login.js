function login_seq() {
    const name = document.getElementById('input').value;
    console.log(name);
    const r = new XMLHttpRequest();
    r.open('POST', '/api/adminservices/login');
    r.setRequestHeader('Content-Type', 'application/json');
    const data = {
        code: name
    }
    const processed_data = JSON.stringify(data);
    r.send(processed_data);
    r.responseType = 'json';
    r.onload = function() {
        const response = r.response;
        if (response.tokenCorrect == "true"){
            document.cookie = "token=" + response.token;
            window.location.href = "/admin/dashboard";
        } else {
            alert("Wrong code");
            return
        }
    }
}