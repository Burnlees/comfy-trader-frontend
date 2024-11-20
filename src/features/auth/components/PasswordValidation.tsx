import React from "react";
import { PasswordValidationValues } from "../authTypes";

type PasswordValidationProps = {
  passwordValidation: PasswordValidationValues;
};

const PasswordValidation = ({
  passwordValidation,
}: PasswordValidationProps) => {
  return (
    <div className="p-4">
      <p className="text-sm text-foreground">Password Must Include Atleast:</p>
      <ul className="font-light text-sm text-secondary-foreground p-1 list-disc list-inside">
        <li className={passwordValidation.minLength ? "text-green-700" : ""}>
          8 Characters
        </li>
        <li className={passwordValidation.number ? "text-green-700" : ""}>
          1 Number
        </li>
        <li className={passwordValidation.specChar ? "text-green-700" : ""}>
          1 Special Character
        </li>
        <li className={passwordValidation.upperChar ? "text-green-700" : ""}>
          1 Uppercase Character
        </li>
        <li className={passwordValidation.number ? "text-green-700" : ""}>
          1 Lowercase Character
        </li>
      </ul>
    </div>
  );
};

export default PasswordValidation;
