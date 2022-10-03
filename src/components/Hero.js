import React from 'react'
import { Image } from 'react-bootstrap'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

function Hero() {
    const { ref, inView } = useInView();
    const animation = useAnimation();

    useEffect(() => {
        console.log("inView = ", inView)
        if (inView) {
            animation.start({
                x: 1,
                transition: {
                    type: 'spring', duration: 1, bounce: 0.2
                }
            })
        }

        if (!inView) {
            animation.start({ x: '-100vw' })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView])

    return (
        <div ref={ref} className='container mx-auto my-5 hero' id='home'>
            <motion.div
                animate={animation}
            >
                <div className='row align-items-center g-5 hero mt-1 d-flex justify-content-center'>
                    <div className='col-lg-6 text-start'>
                        <span className='display-7 font-epilogue-medium'>Ivan Naufal Islami Al Faridzqi</span><br />
                        <span className='display-3 font-epilogue-bold'>UI/UX Designer & Front-end Dev</span><br />
                        <div className='d-flex'>
                            <a href='https://drive.google.com/file/d/1iL8YiVVKJ2Wq22vuD5e66XMfT-JSFd8s/view?usp=sharing' target="_self" rel="noopener noreferrer" className='btn btn-lg btn-green'>Download Resume</a>
                            <a href='https://drive.google.com/file/d/1i7t1FHHg0XKbtkcLKLPbW6UW0bT-kkHL/view' target="_self" rel="noopener noreferrer" className='btn btn-lg btn-red mx-2'>Download Portfolio</a>
                        </div>
                    </div>
                    <div className='col-10 col-sm-8 col-lg-6 img-profiles'>
                        <Image src="../assets/images/profile.png" class="d-block mx-auto img-fluid my-2" alt="Bootstrap Themes" loading="lazy" width="80%" height="80%" />
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Hero
