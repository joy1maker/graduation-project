// eslint-disable-next-line
import emailjs from '@emailjs/browser';

export const sendEmails = (reservations) => {
    // eslint-disable-next-line
    const result = emailjs.send("service_7bxy35p", "template_eiqgksc", {
        to_name: "aas",
        message: "asdad",
    });
}
