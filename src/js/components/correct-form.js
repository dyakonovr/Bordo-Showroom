const recForm = document.querySelector('.form-recovery');
const regForm = document.querySelector('.form-reg');
const authForm = document.querySelector('.form-auth');

let validateForm = function (selector, rules, successModal) {
  new window.JustValidate(selector, {
    rules,
    submitHandler: function (form) {
      console.log('submit');
      // let formData = new FormData(form);
      // let xhr = new XMLHttpRequest();
      // xhr.onreadystatechange = function () {
      //   if (xhr.readyStage === 4) {
      //     if (xhr.status === 200) {
      //       console.log('Отправлено');
      //       popupAction(successModal);
      //     }
      //   }
      // };
      // xhr.open('POST', 'mail.php', true);
      // xhr.send(formData);
      // form.reset();
    }
  })

}

if (recForm) {
  validateForm('.form-recovery', {
    email: {
      required: true,
      email: true
    }
  }, '.recovery-popup');
}

else if (regForm) {
  validateForm('.form-reg', {
    login: {
      required: true,
      minLength: 3,
      maxLength: 15
    },
    pass: {
      required: true,
      password: true,
      minLength: 4,
      maxLength: 15
    },
    repeat_pass: {
      required: true,
      password: true,
      minLength: 4,
      maxLength: 15
    }
  }, '.reg-popup');
}

else if (authForm) {
  validateForm('.form-auth', {
    login: {
      required: true,
      minLength: 3,
      maxLength: 15
    },
    pass: {
      required: true,
      password: true,
      minLength: 4,
      maxLength: 15
    }
  });
}