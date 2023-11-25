export default async function sendEmail({ name, email, message }) {
    const payload = {
        user_id: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        template_params: {
            name: name.trim().toLowerCase(),
            email: email.trim().toLowerCase(),
            message: message.trim()
        }
    }

    const { status, statusText } = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })

    return { status, statusText }
}
