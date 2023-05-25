import emailjs from '@emailjs/browser';
import axios from 'axios';

export const sendEmails = (filterdPaitents = []) => {
    // eslint-disable-next-line

    const emails = filterdPaitents.map((paitent) => paitent.email);
    console.log(`these are emails : ${emails}`);
    const requests = emails.map((email) => emailjs.send("service_7bxy35p", "template_eiqgksc", {
        to_name: "youssif",
        message: "due to medical conditons doctor youssif canceld your reservations",
        to_email: email,
    }, "ufOiqRY1JtT6IvuNJ"));
    axios.all(requests).then((response) => console.log(response)).catch((error) => console.log(error));
}
