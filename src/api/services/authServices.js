import { observable, action } from 'mobx';
import axios from 'axios';

class AuthStore {
  @observable email = '';
  @observable password = '';
  @observable retypePassword = '';
  @observable registrationError = '';

  @action setEmail(email) {
    this.email = email;
  }

  @action setPassword(password) {
    this.password = password;
  }

  @action setRetypePassword(retypePassword) {
    this.retypePassword = retypePassword;
  }

  @action clearError() {
    this.registrationError = '';
  }

  @action async registerUser() {
    try {
      const response = await axios.post('https://localhost:44388/api/register', {
        email: this.email,
        password: this.password,
        // You can add more data if needed
      });

      // Handle the response here, e.g., check for success or error messages.
    } catch (error) {
      this.registrationError = error.message;
    }
  }
}

const authStore = new AuthStore();
export default authStore;
