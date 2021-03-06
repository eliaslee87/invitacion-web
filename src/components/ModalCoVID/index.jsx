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
            <h5 className="font-weight-8" onClick={ () => {setShow(true)}}>사회적 거리 및 <br/>코로나19 방역수칙</h5>
        </div>
        <Modal show={show} animation={false} className="f-Nanum text-center">
            <Modal.Header className="justify-content-center">
                <Modal.Title className="font-weight-7">사회적 거리 및 코로나19<br/> 방역수칙 </Modal.Title>
            </Modal.Header>
            <Modal.Body className="font-weight-5 font-size-xl">
                <p>사회적 거리두기 시행으로 결혼식에는 가족분들만 대면으로 참여할수있게 되었습니다. 대면으로 함께못할 모든분들께는 라이브 방송으로 함께 축하해주시길 바랍니다.
                오시는 가족 분들은 다음과 같은 방역수칙을 지켜주시길 바랍니다.
                </p>
                <ul className="checkBullet text-justify mx-3 px-3">
                    <li>교회로 들어오실때 발열체크, 손 소독과 방문일지 작성이 필요합니다.</li>
                    <li>마스크 착용은 필수입니다 그리고 모든 순서중에도 꼭 착용하시길 바랍니다.</li>
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