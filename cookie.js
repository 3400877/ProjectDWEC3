const cookiePopup = document.getElementById("cookie-popup");
const declineButton = document.getElementById("decline-button");
const acceptButton = document.getElementById("accept-button");

const setCookie = (cname, cvalue, hours, path = "/") => {
  const now = new Date();
  now.setTime(now.getTime() + (hours * 3600000)); // 10 hours 
  document.cookie = `${cname}=${cvalue};expires=${now.toUTCString()};path=${path};SameSite=Strict`;
};

const getCookie = (cname) => {
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const trimmedCookie = cookie.trim();
    const parts = trimmedCookie.split('=');
    if (cname == parts[0]) {
      return parts[1];
    }
  }
  return '';
};

const deleteCookie = (cname, path) => {
  if (getCookie(cname)) {
    document.cookie = `${cname}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=${path}`;
  }
};

const saveNameCookie = () => {
  const name = window.prompt("Tell me your name");
  if (name) {
    setCookie("username", name, 10);
  }
};

const displayPopup = () => {
  cookiePopup.classList.remove("hidden");
};

const hidePopup = () => {
  cookiePopup.classList.add("hidden");
};

declineButton.addEventListener("click", () => {
  const notice = document.createElement("p");
  notice.textContent = "Thank you. We will proceed with the deletion of cookies";
  cookiePopup.replaceChildren(notice);
  setTimeout(hidePopup, 5000);
  deleteCookie("username", "/");
});

acceptButton.addEventListener("click", () => {
  cookiePopup.classList.add("hidden");
});



const cookieText = getCookie('username');
console.log(cookieText);

if (cookieText.length != 0) {
  window.alert("Good day, " + cookieText + ".");
} else {
  saveNameCookie();
}
setTimeout(displayPopup, 150);