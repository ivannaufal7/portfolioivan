import React from 'react'
import { Card } from 'react-bootstrap'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'


function Specialist({ specialists }) {

    const { ref, inView } = useInView();
    const animation = useAnimation();

    useEffect(() => {
        console.log("inView = ", inView)
        if (inView) {
            animation.start({
                opacity: 1,
                transition: {
                    type: 'spring', duration: 4, bounce: 0.5
                }
            })
        }

        if (!inView) {
            animation.start({ opacity: 0 })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView])

    return (
        <div ref={ref} className='container'>

            <motion.div
                animate={animation}
            >
                <div className='row row-cols-1 row-cols-sm-1 row-cols-md-3 g-4 mb-5'>
                    {
                        specialists.data?.map((data, i) =>
                            <div className='col'>
                                <Card className='text-center align-items-center border-0 card-specialist' key={i}>
                                    <Card.Img variant="top" src={data.attributes.icon.data.attributes.url} style={{ width: '40%' }} />
                                    <Card.Title className='heading-title font-epilogue-bold'>{data.attributes.title}</Card.Title>
                                    <Card.Text className='card-content font-epilogue-regular'>{data.attributes.desc}</Card.Text>
                                </Card>
                            </div>
                        )
                    }

                    {/* <div className='col'>
                        <Card className='text-center align-items-center border-0 card-specialist'>
                            <Card.Img variant="top" src="../assets/images/frontend.png" style={{ width: '40%' }} />
                            <Card.Title className='heading-title font-epilogue-bold'>Front-end Developer</Card.Title>
                            <Card.Text className='card-content font-epilogue-regular'>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</Card.Text>
                        </Card>
                    </div>
                    <div className='col'>
                        <Card className='text-center align-items-center border-0 card-specialist'>
                            <Card.Img variant="top" src="../assets/images/visual.png" style={{ width: '40%' }} />
                            <Card.Title className='heading-title font-epilogue-bold'>Visual Designer</Card.Title>
                            <Card.Text className='card-content font-epilogue-regular'>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</Card.Text>
                        </Card>
                    </div> */}

                </div>
            </motion.div>

        </div >
    )
}

export default Specialist
