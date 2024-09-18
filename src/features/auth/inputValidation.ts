export const passwordInputValidation = (
    password: string,
    setPasswordValidation: any
  ) => {
    if (password.length < 8) {
      setPasswordValidation((currValidation: object) => {
        return { ...currValidation, minLength: false };
      });
    } else {
      setPasswordValidation((currValidation: object) => {
        return { ...currValidation, minLength: true };
      });
    }
    const numberRegEx = /\d/gm;
    if (!numberRegEx.test(password)) {
      setPasswordValidation((currValidation: object) => {
        return { ...currValidation, number: false };
      });
    } else {
      setPasswordValidation((currValidation: object) => {
        return { ...currValidation, number: true };
      });
    }
    const specCharRegEx = /\W/gm;
    if (!specCharRegEx.test(password)) {
      setPasswordValidation((currValidation: object) => {
        return { ...currValidation, specChar: false };
      });
    } else {
      setPasswordValidation((currValidation: object) => {
        return { ...currValidation, specChar: true };
      });
    }
  
    const upperCharRegEx = /[A-Z]/gm;
    if (!upperCharRegEx.test(password)) {
      setPasswordValidation((currValidation: object) => {
        return { ...currValidation, upperChar: false };
      });
    } else {
      setPasswordValidation((currValidation: object) => {
        return { ...currValidation, upperChar: true };
      });
    }
  
    const lowerCharRegEx = /[a-z]/gm;
    if (!lowerCharRegEx.test(password)) {
      setPasswordValidation((currValidation: object) => {
        return { ...currValidation, lowerChar: false };
      });
    } else {
      setPasswordValidation((currValidation: object) => {
        return { ...currValidation, lowerChar: true };
      });
    }
  };