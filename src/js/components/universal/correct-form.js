const recForm = document.querySelector('.form-recovery');
const regForm = document.querySelector('.form-reg');
const authForm = document.querySelector('.form-auth');
const mailingForm = document.querySelector('.mailing-form');

let validateForm = function (selector, rules, messages, successModal) {
  new window.JustValidate(selector, {
    rules,
    messages,
    submitHandler: function (form) {
      let formData = new FormData(form);
      let xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log('Отправлено');
            if (successModal) {
              popupAction(successModal);
            } 
          }
        }
      };
      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);
      form.reset();
    }
  })

}

if (recForm) {
  validateForm('.form-recovery', {
    email: {
      required: true,
      email: true
    },
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
  },
    {
      login: {
        required: 'Введите логин!',
        minLength: 'Минимальная длина логина: 3 символа',
        maxLength: 'Максимальная длина логина: 15 символов',
      },
      pass: {
        required: 'Введите пароль!',
        password: 'Пароль не валиден!',
        minLength: 'Минимальная длина пароля: 4 символа',
        maxLength: 'Максимальная длина пароля: 15 символов',
      },
      repeat_pass: {
        required: 'Подтвердите пароль!',
        password: 'Пароль не валиден!',
        minLength: 'Минимальная длина пароля: 4 символа',
        maxLength: 'Максимальная длина пароля: 15 символов',
      },
    },
    '.reg-popup');
}

else if (mailingForm) {
  validateForm('.mailing-form', {
    mail: {
      required: true,
      minLength: 3,
      email: true,
    },
  },
  '.mail-popup'
  );
  
}