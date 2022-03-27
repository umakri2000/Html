const inputEmail = document.getElementById("input-email");
const submitBtn = document.getElementById("submit-btn");
const form = document.getElementById("form");
let h3 = document.getElementById("msg");
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputEmail.value.match(regEx)) {
    form.classList.remove("error");
    form.classList.add("success");
    h3.innerHTML = "your data is saved";
    h3.style.color = "green";
  } else {
    form.classList.add("error");
    h3.innerHTML = "Please provide a valid email address";
    h3.style.color = "red";
    form.classList.remove("success");
  }
});