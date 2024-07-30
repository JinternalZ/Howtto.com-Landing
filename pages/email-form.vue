<template>
  <div class="email-form">
    <h1>Send an Email</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="message">Please include your contact info:</label>
        <textarea id="message" v-model="form.message" required></textarea>
      </div>
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import emailjs from 'emailjs-com';

const form = ref({
  message: ''
});

const submitForm = () => {
  const serviceID = 'service_ikf47cf';
  const templateID = 'template_gnk2wrw';
  const userID = 'WarZWh7cLdrHRqJAk';

  const templateParams = {
    message: form.value.message
  };

  emailjs.send(serviceID, templateID, templateParams, userID)
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Email sent! Typical response time is 1-2 hours.');
    }, (error) => {
      console.log('FAILED...', error);
      alert('Failed to send email.');
    });
};
</script>

<style scoped>
:root {
  --background-color: #f9f9f9;
  --text-color: #333;
  --input-background-color: #fff;
  --button-background-color: #007bff;
  --button-text-color: #fff;
  --button-hover-background-color: #0056b3;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background-color: #333;
    --text-color: #f9f9f9;
    --input-background-color: #555;
    --button-background-color: #0056b3;
    --button-text-color: #fff;
    --button-hover-background-color: #007bff;
  }
}

.email-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: var(--background-color);
  color: var(--text-color);
}

.email-form h1 {
  text-align: center;
  color: var(--text-color);
}

.email-form div {
  margin-bottom: 1rem;
}

.email-form label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-color);
}

.email-form input,
.email-form textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: var(--input-background-color);
  color: var(--text-color);
}

.email-form button {
  display: block;
  width: 100%;
  padding: 0.75rem;
  background-color: var(--button-background-color);
  color: var(--button-text-color);
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

email-form button:hover {
  background-color: var(--button-hover-background-color);
}
</style>