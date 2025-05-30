
const { I } = inject();

export = {
  fields: {
   firstName: '#fname',
   lastName: '#lname',
   companyName: '#cname',
   email: '#email',
   zipcode: '#zip',
   address: '#faddress',
   messages: '#messages',
  },
  // provavelmente vai dar erro dar um jeito
  buttons: {
   save: 'Save',
   placeOrder: 'Place Order'
  },
  radioButtons: {
   DirectBank: '#html',
  },

  checkbox: {
  saveCheck: '#materialUnchecked'
  },

  selectOption: {
  country: '#country',
  city: '#city'
  },

async fillCheckoutRegisterForm(I: CodeceptJS.I, formData: {
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  zipcode: string;
  address: string;
  messages: string;
  country: string;
  city: string;
  saveCheck?: boolean; 
  paymentMethod?: string; 
}) {
  I.fillField(this.fields.firstName, formData.firstName);
  I.fillField(this.fields.lastName, formData.lastName);
  I.fillField(this.fields.companyName, formData.companyName);
  I.fillField(this.fields.email, formData.email);
  I.fillField(this.fields.zipcode, formData.zipcode);
  I.fillField(this.fields.address, formData.address);
  I.fillField(this.fields.messages, formData.messages);

  I.selectOption(this.selectOption.country, formData.country);
  I.selectOption(this.selectOption.city, formData.city);

  if (formData.saveCheck) {
    I.checkOption(this.checkbox.saveCheck);
  }

  if (formData.paymentMethod === 'DirectBank') {
    I.checkOption(this.radioButtons.DirectBank);
  }

  I.click(this.buttons.placeOrder);
}

}
