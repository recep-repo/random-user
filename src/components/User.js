import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { useUserContext } from '../context/UserContextProvider'

const User = ({user}) => {
    const {login, avatar_url, node_id, html_url} = user

    const {getData} = useUserContext()
    return (
        <Card className='mx-auto mt-3' style={{ width: '30rem'}}>
        <Card.Img variant="top" src={avatar_url} />
        <Card.Body>
          <Card.Title>Username: {login}</Card.Title>
          <Card.Title>ID: {node_id}</Card.Title>
          <Card.Title className='mb-5'>
           Github: {html_url}
          </Card.Title>
          <Button className='w-100 mt-3' onClick={getData} variant="primary">Get Random User</Button>
        </Card.Body>
      </Card>
    )
}

export default User
