import { Col, Row } from 'react-bootstrap'

const PortadaComponent = () => {
    return (
        <Row className="m-4 f-Nanum">
            <Col xs="12" className="border-left border-dark mb-3">
                <h3 className="font-weight-8">03<br/>月<br/>20<br/>日</h3>
            </Col>
            <Col xs="12" className="p-0 mb-3 text-center">
                <img src="/images/OMP_1291.jpg" className="img-fluid" alt="Elias y Elena"/>
            </Col>
            <Col xs="12" className="p-0 mb-3 text-right">
                <h5 className="font-weight-7">이엘리아스<span className="text-secondary">&nbsp;&nbsp;/&nbsp;&nbsp;</span>이엘레나</h5>
                <p>토요일 오후 7시 <br/>아르헨티나 신성교회</p>
            </Col>
        </Row>
    )
}

export default PortadaComponent