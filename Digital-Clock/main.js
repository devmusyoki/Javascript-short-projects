window.addEventListener("DOMContentLoaded", showTime());

function showTime() {
  let date = new Date();

  //date.setTime(50000000000000);

  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }
  //   if (h < 10) {
  //     h = "0" + h;
  //   }
  //   if (m < 10) {
  //     m = "0" + m;
  //   }
  //   if (s < 10) {
  //     s = "0" + s;
  //   }
  h = h < 10 ? (h = "0" + h) : h;
  m = m < 10 ? (m = "0" + m) : m;
  s = s < 10 ? (s = "0" + s) : s;

  //   const time = h + ":" + m + ":" + s + "" + "|" + "" + session;
  //   console.log(time);
  const time = `${h}:${m}<small>.${s}|${session}</small>`;

  document.getElementById("DisplayClock").innerHTML = time;
  setTimeout(showTime, 1000);

  //   Change Body Background

  let bg;

  const userName = "Musyoki";
  const user = document.getElementById("User");
  //   console.log(user);
  if (h < 8 && session === "AM") {
    bg = `url(https://images.unsplash.com/photo-1508717334315-37b159f24d04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80)`;
    user.innerHTML = `Good morning ${userName}`;
  } else if (h < 11 && session === "AM") {
    bg = `url(https://images.unsplash.com/photo-1558556563-7315877d09f0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80)`;
    user.innerHTML = `Good day ${userName}`;
  } else if (h < 8 && session === "PM") {
    bg = `url(https://images.unsplash.com/photo-1533637532230-f1fe35b8ce33?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=344&q=80)`;
    user.innerHTML = `Good afternoon ${userName}`;
  } else {
    bg = `url(https://images.unsplash.com/photo-1617375996248-0e57941f3f3c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80)`;
    user.innerHTML = `Good night, ${userName}`;
  }
  // insert bg im
  const body = document.querySelector("body");

  body.style.background = `${bg} center/cover`;
}

document
  .querySelector(".focus-container input")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      const focus = document.querySelector(".focus-container input");
      document.querySelector(
        ".focus-container"
      ).innerHTML = `<h6>TODAY:</h6><h1>${focus.value}</h1>`;
    }
  });
