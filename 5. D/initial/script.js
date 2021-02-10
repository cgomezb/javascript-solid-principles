class Store {
  constructor(user) {
    this.stripe = new Stripe(user);
  }

  purchaseBike(quantity) {
    const unitCost = 200;
    this.stripe.makePayment(unitCost * quantity * 100);
  }

  purchaseHelmet(quantity) {
    const unitCost = 15;
    this.stripe.makePayment(unitCost * quantity * 100);
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

const store = new Store('John');
store.purchaseBike(2);
store.purchaseHelmet(2);
