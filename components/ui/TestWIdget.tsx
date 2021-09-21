import { Fragment, useState } from 'react';
import { Button, Modal } from 'react-bootstrap'

interface Props {
  className: string
}

const TestWidget: React.FC<Props> = (props) => {
  const [show, setShow] = useState(false);

  const handleOpen = () => setShow(true);
  const handleClose = () => setShow(false);

  return <div className={props.className}>
    <Button className='btn btn-primary' onClick={handleOpen}>Show Popup</Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Hello Modal World</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>This is the popup content within modal!</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  </div>
}

export default TestWidget