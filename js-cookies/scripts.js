function setCookie(cname, user, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 60 * 20));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + user + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    let user = getCookie("username");
    if (user != "" && user != null) {
        alert("Welcome again " + user);
        document.getElementById("checkCookieMessage").innerHTML = "Welcome again " + user;
        $(document).ready(function(){
            $("#checkCookieToast").toast("show");
        });
    } else {
        $(document).ready(function(){
            $("#myModal").modal('show');
        });
        
    }
}

function setUsernameCookie() {
    $(document).ready(function getUsername(){
        $("#inputModal").modal("show");
    });
    user = document.getElementById("nutzer-name").value;
    if (user != "" && user != null) {
        setCookie("username", user, 365);
    }
}
checkCookie()