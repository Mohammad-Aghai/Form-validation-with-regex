
let $ = document;
let mainForm = $.querySelector(".main-form");
let inputUserName = $.querySelector("#input-UserName");
let inputPhoneNumber = $.querySelector("#input-phoneNumber");
let inputEmail = $.querySelector("#input-email");
let inputPassword = $.querySelector("#input-password");
let submitBtn = $.querySelector(".submit-btn");
let tbodyElm = $.querySelector("tbody");
let usersArray = [];
mainForm.addEventListener("submit", function (e) {
  e.preventDefault()
  let UserNameRegex = /^(\w+|\d+)(\w|\d{1,2}){5}$/;
  let userNameFlag = UserNameRegex.test(inputUserName.value);
  console.log(userNameFlag);
  if (userNameFlag) {
    let UserPhoneRegex = /^0\d{10,10}$/;
    let phoneNumberFlag = UserPhoneRegex.test(inputPhoneNumber.value);
    console.log(phoneNumberFlag);
    if (phoneNumberFlag) {
      let emailRegex = /(^\w)(\S+)(@)(email|gmail)\.(\w{3,5})/;
      let emailFlag = emailRegex.test(inputEmail.value);
      console.log(emailFlag);
      if (emailFlag) {
        let passwordRegex =
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
        let passwordFlag = passwordRegex.test(inputPassword.value);
        console.log(passwordFlag);
        if (passwordFlag) {
          let user = {
            id: Math.floor(Math.random() * 1000),
            name: inputUserName.value,
            phoneNumber: inputPhoneNumber.value,
            email: inputEmail.value,
            password: inputPassword.value,
          };
          usersArray.push(user);
          usersArray.forEach((userItem) => {
            tbodyElm.insertAdjacentHTML(
              "beforeend",
              ` <tr>
                                                  <td>${userItem.id}</td>
                                                  <td>${userItem.name}</td>
                                                  <td>${userItem.phoneNumber}</td>
                                                  <td>${userItem.email}</td>
                                                  <td>${userItem.password}</td>
                                                  </tr>`
            );
          });
        } else {
          alert(
            "The password should be more secure, use special characters and numbers and upper and lower case letters"
          );
        }
      } else {
        alert("User email is Wrong : Follow this pattern : example@email.com ");
      }
    } else {
      alert("phone Number is wrong : Follow this pattern : 0*********");
    }
  } else {
    alert(
      "User Name is Wrong : User Name Must be at least 5 characters without spaces"
    );
  }
});
