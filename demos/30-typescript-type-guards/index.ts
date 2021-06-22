class Customer {
  isCreditAllowed(): boolean {
    return true;
  }
}

class Supplier {
  isInShortList(): boolean {
    return true;
  }
}

type BusinessPartner = Customer | Supplier;

function signContract(partner: BusinessPartner): string {
  let message: string;

  // 'isCreditAllowed' in partner

  if (partner instanceof Customer) {
    message = partner.isCreditAllowed()
      ? 'Sign a new contract with the customer'
      : 'Credit issue';
  } else {
    message = partner.isInShortList()
      ? 'Sign a new contract the supplier'
      : 'Need to evaluate further';
  }

  return message;
}

// User-defined type guards allow you to define a type guard or help TypeScript infer a type when you use a function.
// A user-defined type guard function is a function that simply returns arg is aType

function isCustomer(partner: any): partner is Customer {
  // the isCustomer() is a user-defined type guard function
  return partner instanceof Customer;
}

function signContract2(partner: BusinessPartner): string {
  let message: string;

  if (isCustomer(partner)) {
    message = partner.isCreditAllowed()
      ? 'Sign a new contract with the customer'
      : 'Credit issue';
  } else {
    message = partner.isInShortList()
      ? 'Sign a new contract the supplier'
      : 'Need to evaluate further';
  }

  return message;
}
