import { Row, Col } from 'react-bootstrap'

const PrologoComponent = () => {
    return (
        <Row className="mx-4 mb-4 f-Nanum">
            <Col xs="12" className="p-0 pt-5 mb-3 text-center border-top border-dark">
                <h5 className="font-weight-7">이제 서로, 평생 함께</h5>
            </Col>
            <Col xs="12" className="p-0 mb-3 text-center">
                <p className="m-4 mb-5 px-4">
                    하나님의 사랑과 은혜로 두 사람이 만났습니다.
                    서러를 아끼고 위하며 하나님을 중심에 둔 믿음의 가정을 이루려고 합니다.
                    저희의 첫 거름을 떼는 자리에 오셔서 함께 축복해주시고 기도해주세요.
                </p>
                <div className="text-center">
                    <p className="font-weight-7">이영돈 • 강명혜<span className="font-size-s font-weight-3">의 장남</span>&nbsp;&nbsp;<span className="font-size-l">엘리아스</span></p>
                    <p className="font-weight-7">이정만 • 선우미영<span className="font-size-s font-weight-3">의 막내딸</span>&nbsp;&nbsp;<span className="font-size-l">엘레나</span></p>
                </div>
            </Col>
        </Row>
    )
}

export default PrologoComponent