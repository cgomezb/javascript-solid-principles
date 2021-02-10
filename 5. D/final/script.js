class Store {
  constructor(paymentProcessor) {
    this.paymentProcessor = paymentProcessor;
  }

  purchaseBike(quantity) {
    const unitCost = 200;
    this.paymentProcessor.pay(unitCost * quantity);
  }

  purchaseHelmet(quantity) {
    const unitCost = 15;
    this.paymentProcessor.pay(unitCost * quantity);
  }
}

class Stripe {
  constructor(user) {
    this.user = user;
  }

  makePayment(amountInCents) {
    console.log(`${this.user} made payment of $${amountInCents / 100} with Stripe`);
  }
}

class Paypal {
  makePayment(user, amountInDollars) {
    console.log(`${user} made payment of $${amountInDollars} with Paypal`);
  }
}

class StripePaymentProcessor {
  constructor(user) {
    this.stripe = new Stripe(user);
  }

  pay(amountInDollars) {
    this.stripe.makePayment(amountInDollars * 100);
  }
}

class PaypalPaymentProcessor {
  constructor(user) {
    this.user = user;
    this.paypal = new Paypal();
  }

  pay(amountInDollars) {
    this.paypal.makePayment(this.user, amountInDollars);
  }
}

const storeUsingStripe = new Store(new StripePaymentProcessor('John Smith'));
const storeUsingPaypal = new Store(new PaypalPaymentProcessor('John Doe'));

storeUsingStripe.purchaseBike(2);
storeUsingStripe.purchaseHelmet(2);

storeUsingPaypal.purchaseBike(2);
storeUsingPaypal.purchaseHelmet(2);
