import React from 'react'
import { Card } from 'react-bootstrap'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

function Works({ portos }) {
    const { ref, inView } = useInView({
        threshold: 0.2
    });
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
        <>
            <div ref={ref} className='container' id="work">
                <div className='text-center my-5'>
                    <h3 className='font-epilogue-regular'>Latest work</h3>
                </div>
                <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-1 mb-5'>

                    {
                        portos.data?.map((data, i) =>
                            <motion.div
                                animate={animation} key={i} onClick={() => window.open(data.attributes.url, "_self")}>
                                <div className='col'>
                                    <Card className='text-start align-items-start border-0 card-work'>
                                        <Card.Img variant="top" src={data.attributes.thumbnail.data.attributes.url} style={{ width: '90%' }} />
                                        <Card.Title className='heading-title-work font-epilogue-smbold'>{data.attributes.title}</Card.Title>
                                        <Card.Text className='font-epilogue-regular'>{data.attributes.categories}</Card.Text>
                                    </Card>
                                </div>
                            </motion.div>
                        )
                    }

                </div>

            </div>
        </>
    )
}

export default Works
