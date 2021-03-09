import './style.css'
import { Modal, Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'

const ModalCoVIDComponent = () => {

    const [show, setShow] = useState(false)

    useEffect( () => {
        setTimeout(() => {
            setShow(true)
        }, 5000);
    },[])

    return (
        <>
        <div className="f-Nanum text-center p-5">
            <h6 className="font-weight-7" onClick={ () => {setShow(true)}}>Protocolo COVID</h6>
        </div>
        <Modal show={show} animation={false} className="f-Nanum text-center">
            <Modal.Header className="justify-content-center">
                <Modal.Title className="font-weight-7">사회적 거리 및 코로나19<br/> 방역수칙 </Modal.Title>
            </Modal.Header>
            <Modal.Body className="font-weight-5 font-size-xl">
                <p>사회적 거리두기 시행으로 결혼식에 참여한 모든 분들은 다음과 같은 반역수칙을 치켜주시길 바랍니다</p>
                <ul className="checkBullet text-justify mx-3 px-3">
                    <li>교회로 들어오실떼 발열체크, 손 소독과 방문일지 작성이 필요합니다.</li>
                    <li>마스크 착용은 필수입니다 그리고 모든 순소중에도 꼭 착용하시길 바랍니다.</li>
                    <li>본당으로 입장시, 안내분들께서 좌석으로 안내를 하겠습니다. 정해진 자리를 지켜주시기 바랍니다.</li>
                </ul>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-center">
                <Button variant="success" onClick={ ()=> {setShow(false)}} className="font-weight-7">
                    알겠습니다
                </Button>
            </Modal.Footer>

        </Modal>
        </>
    )
}

export default ModalCoVIDComponent