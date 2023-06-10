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
export const replyEmail = async (paitent, doctor, title, body, q_title) => {
    const { email: paitent_email, first_name: p_name } = paitent;
    const { first_name: d_name } = doctor;
    const res = await emailjs.send("service_7bxy35p", "template_ssttj8e", {
        to_name: p_name,
        title: q_title,
        message: body,
        from_name: d_name,
        reply_title: title,
        to_email: paitent_email,
    }, "ufOiqRY1JtT6IvuNJ");
    console.log(res);
}