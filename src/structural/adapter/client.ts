/* import isEmail from 'validator/lib/isEmail';

const email = 'joas@gmail.com';

if (isEmail(email)) {
  console.log('É válido');
} else {
  console.log('É inválido');
} */

import {
  EmailValidatorFnProtocol,
  EmailValidatorProtocol,
} from './validation/email-validator-protocol';
import { EmailValidatorAdapter } from './validation/email-validator-class-adapter';
import { emailValidatorFnAdapter } from './validation/email-validator-fn-adapter';

function validaEmailClass(
  emailValidator: EmailValidatorProtocol,
  email: string,
): void {
  if (emailValidator.isEmail(email)) {
    console.log('email válido (CLASS)');
  } else {
    console.log('email inválido (CLASS)');
  }
}

function validaEmailFn(
  emailValidator: EmailValidatorFnProtocol,
  email: string,
): void {
  if (emailValidator(email)) {
    console.log('email válido (FN)');
  } else {
    console.log('email inválido (FN)');
  }
}

validaEmailClass(new EmailValidatorAdapter(), 'joas@gmail.com');
validaEmailFn(emailValidatorFnAdapter, 'joas@gmail.com');
