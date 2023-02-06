export interface EmailValidatorProtocol {
  isEmail(value: string): boolean;
}

export interface EmailValidatorFnProtocol {
  (value: string): boolean;
}
