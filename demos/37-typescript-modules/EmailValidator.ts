import { StringValidator } from "./Validator";

class EmailValidator implements StringValidator {
  isValid(s: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(s);
  }
}
export { EmailValidator };
