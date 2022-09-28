import React from 'react'
import { Image, Form, Button } from 'react-bootstrap'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser';

function Contact() {
    const { ref, inView } = useInView({
        threshold: 0.2
    });
    const animation = useAnimation();
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ldjhl7g', 'template_2djzwb9', form.current, 'Cl2Bc_0x4a4wksJs6')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
    };

    useEffect(() => {
        console.log("inView = ", inView)
        if (inView) {
            animation.start({
                y: 0,
                transition: {
                    type: 'spring', duration: 1, bounce: 0.2
                }
            })
        }

        if (!inView) {
            animation.start({ y: '100vw' })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView])
    return (
        <div ref={ref} className='container contact' id="contact">
            <motion.div
                animate={animation}
            >
                <div className='row d-flex'>
                    <div className='col-12 col-sm-10 col-lg-6 contact-info'>
                        <h1 className='font-epilogue-smbold'>Lets work together</h1>
                        <span className='font-epilogue-regular'>If you are interested in discussing or collaborating with me. Feel free to contact me by filling out the form beside. <br/><br/>Thank you 😊🚀</span>
                        <div className='row icons'>
                            <a href='https://www.linkedin.com/in/ivan-naufal/' target='_blank' rel="noopener noreferrer"><Image src='../assets/images/linkedin.png' style={{ width: '10%' }} /></a>
                            <a href='https://www.instagram.com/ivannaufal' target='_blank' rel="noopener noreferrer"><Image src='../assets/images/ig.png' style={{ width: '10%' }} /></a>
                            <a href='https://dribbble.com/ivannaufal10' target='_blank' rel="noopener noreferrer"><Image src='../assets/images/dribbble.png' style={{ width: '10%' }} /></a>
                        </div>
                    </div>

                    <div className='col'>
                        <Form ref={form} onSubmit={sendEmail}>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="Name" className='form-contact font-epilogue-regular' name='user_name' required/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control type="email" placeholder="Email" className='form-contact font-epilogue-regular' name='user_email' required/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control as="textarea" placeholder="Type your message here" className='form-contact font-epilogue-regular' rows={3} name='message' required/>
                            </Form.Group>
                            <Form.Group>
                                <div className='d-grid gap-2'>
                                    <Button type="submit" variant="dark" className='btn btn-lg font-epilogue-regular'>Submit</Button>
                                </div>
                            </Form.Group>
                        </Form>


                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Contact
