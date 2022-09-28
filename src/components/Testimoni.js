import React from 'react'
import Slider from 'react-slick'
import { Card } from 'react-bootstrap'

function Testimoni({ testimonis }) {
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <>
            <div className='text-center my-5'>
                <h3 className='font-epilogue-regular'>Testimonial</h3>
            </div>
            <div className='slider'>
                <Slider {...settings}>
                    {
                        testimonis.data?.map((data, i) =>
                            <div className='col position-card'>
                                <Card className='card-testimoni' key={i}>
                                    <Card.Body>
                                        <Card.Text className='font-epilogue-regular'>
                                            {data.attributes.review}
                                        </Card.Text>
                                        <Card.Subtitle className="mb-2 font-epilogue-smbold">{data.attributes.name}</Card.Subtitle>
                                        <Card.Subtitle className="mb-2 super-subtitle font-epilogue-medium">{data.attributes.job}</Card.Subtitle>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    }

                    {/* <div className='col position-card'>
                        <Card className='card-testimoni'>
                            <Card.Body>
                                <Card.Text className='font-epilogue-regular'>
                                    Ivan has been interested in graphics design since we were in informatics engineering school. He has a good taste in design and also has unique and creative thinking in designing something.
                                </Card.Text>
                                <Card.Subtitle className="mb-2 font-epilogue-smbold">Vincentius Westley</Card.Subtitle>
                                <Card.Subtitle className="mb-2 super-subtitle font-epilogue-medium">Mobile Engineer at TentangAnak</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col position-card'>
                        <Card className='card-testimoni'>
                            <Card.Body>
                                <Card.Text className='font-epilogue-regular'>
                                    He is a very creative person and always has a good idea to solve our problems. He has a very good skill and taste in design. Smart worker and good friend.
                                </Card.Text>
                                <Card.Subtitle className="mb-2 font-epilogue-smbold">Alwan Alfian</Card.Subtitle>
                                <Card.Subtitle className="mb-2 super-subtitle font-epilogue-medium">Front-end at eFishery</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col position-card'>
                        <Card className='card-testimoni'>
                            <Card.Body>
                                <Card.Text className='font-epilogue-regular'>
                                    At his young age, Ivan has exceptional skill on UI/UX design. Even our client said, “thank you for the UI that you delivered to us. We didn’t expect the work would be this good!”
                                </Card.Text>
                                <Card.Subtitle className="mb-2 font-epilogue-smbold">Primawan Satrio</Card.Subtitle>
                                <Card.Subtitle className="mb-2 super-subtitle font-epilogue-medium">Tech Talent Acquision Lead at Stockbit</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </div> */}
                </Slider>
            </div>
        </>
    )
}

export default Testimoni
