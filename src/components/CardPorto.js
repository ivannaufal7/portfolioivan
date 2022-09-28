import React from 'react'
import {Card} from 'react-bootstrap'

function CardPorto({data}) {
    return (
        <Card className='text-start align-items-start border-0 card-work'>
            <Card.Img variant="top" src={data.thumbnail.formats.thumbnail.url} style={{ width: '90%' }} />
            <Card.Title className='heading-title-work font-epilogue-smbold'>{data.attributes.title}</Card.Title>
            <Card.Text className='font-epilogue-regular'>UI Design</Card.Text>
        </Card>
    )
}

export default CardPorto
