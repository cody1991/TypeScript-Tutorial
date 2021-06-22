import { EmailValidator } from './EmailValidator';
import type { alphanumeric } from './Types';

import ZipCodeValidator from './ZipCodeValidator';

const email = 'john.doe@typescripttutorial.net';
const validator = new EmailValidator();
const result = validator.isValid(email);
console.log(result);

console.log(new ZipCodeValidator().isValid('95134'));
