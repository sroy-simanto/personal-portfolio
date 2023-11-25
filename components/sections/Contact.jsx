import Button from '@/components/common/Button'
import Input from '@/components/common/Input'
import Subtitle from '@/components/common/Subtitle'
import Title from '@/components/common/Title'
import sendEmail from '@/utils/sendEmail'
import clsx from 'clsx'
import { useState } from 'react'
import { FaCheckCircle, FaExclamationCircle, FaPaperPlane, FaSpinner } from 'react-icons/fa'

export default function Contact() {
    const [contact, setContact] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState('Send Message')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    const iconComponent = () => {
        if (loading) return FaSpinner
        if (error) return FaExclamationCircle
        if (success) return FaCheckCircle
        return FaPaperPlane
    }

    const changeHandler = (e) => {
        setContact((contact) => ({
            ...contact,
            [e.target.name]: e.target.value
        }))
    }

    const submitHandler = (e) => {
        e.preventDefault()

        setTimeout(async () => {
            setLoading(true)

            try {
                const response = await sendEmail(contact)

                if (response.status === 200) {
                    setSuccess(true)
                    setLoading(false)
                    setStatus('Message Sent')
                    e.target.reset()
                } else {
                    throw new Error(response.statusText)
                }
            } catch (error) {
                console.log(error)
                setError(true)
                setLoading(false)
                setStatus('Something went wrong')
            }
        }, 1000)
    }

    return (
        <section id="contact" className="py-12 md:py-24">
            <div className="container max-w-5xl">
                <Title as="h6" className="!mb-6">
                    Get In Touch
                </Title>
                <Subtitle>Let&apos;s Start a Conversation</Subtitle>
                <form
                    className="grid md:grid-cols-2 gap-8"
                    autoComplete="off"
                    onSubmit={submitHandler}
                >
                    <Input
                        name="name"
                        label="Your Name"
                        placeholder="ex: john doe"
                        values={contact.name}
                        onChange={changeHandler}
                        pattern="[a-zA-Z1-9-_ ]{4,12}"
                        title="Name must be between 4 and 12 characters and can only contain letters, numbers, spaces, dashes and underscores"
                        required
                    />
                    <Input
                        type="email"
                        name="email"
                        label="Your Email"
                        values={contact.email}
                        onChange={changeHandler}
                        placeholder="ex: johndoe@gmail.com"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                        title="Please enter a valid email address"
                        required
                    />
                    <Input
                        as="textarea"
                        name="message"
                        label="Your Message"
                        values={contact.message}
                        onChange={changeHandler}
                        placeholder="leave a comment"
                        className="form-textarea min-h-[250px]"
                        elClassName="md:col-span-2"
                        pattern=".{10,200}"
                        title="Message must be between 10 and 200 characters"
                        required
                    />
                    <Button
                        as="button"
                        type="submit"
                        icon={iconComponent()}
                        className={clsx(
                            'mx-auto mt-5 px-14 md:col-span-2 disabled:cursor-not-allowed disabled:opacity-70 disabled:shadow-none',
                            success && '!bg-emerald-500',
                            error && '!bg-rose-500'
                        )}
                        iconClassName={loading && 'animate-twSpin'}
                        disabled={loading || success || error}
                    >
                        {status}
                    </Button>
                </form>
            </div>
        </section>
    )
}
