import { Row, Col } from 'react-bootstrap'
import './style.css'

const ContactoComponent = () => {
    return (
       <div className="f-Gothic">
            <Row className="mb-4">
                <Col xs="6" className="d-flex justify-content-end align-items-center p-0">
                    <p className="m-0 font-weight-7">신랑에게 연락하기</p>
                </Col>
                <Col xs="3" className="d-flex justify-content-center align-items-center p-0">
                    <a href="tel:+5491140746199">
                        <span className="btn-tel-blue p-2 rounded-circle material-icons">call</span>
                    </a>
                </Col>
                <Col xs="3" className="d-flex justify-content-start align-items-center p-0">
                    <a href="https://wa.me/5491140746199">
                        <span className="btn-tel-grey p-2 rounded-circle material-icons">textsms</span>
                    </a>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col xs="6" className="d-flex justify-content-end align-items-center p-0">
                    <p className="m-0 font-weight-7">신부에게 연락하기</p>
                </Col>
                <Col xs="3" className="d-flex justify-content-center align-items-center p-0">
                    <a href="tel:+5491134834433">
                        <span className="btn-tel-pink p-2 rounded-circle material-icons">call</span>
                    </a>
                </Col>
                <Col xs="3" className="d-flex justify-content-start align-items-center p-0">
                    <a href="https://wa.me/5491134834433">
                        <span className="btn-tel-grey p-2 rounded-circle material-icons">textsms</span>
                    </a>
                </Col>
            </Row>

            <div className="py-3" style={{backgroundColor: "#f4f4f4"}}>
                <h6 className="m-0 font-size-s text-center font-weight-7">혼주에게 연락하기</h6>
            </div>

            <Row className="m-4">
                <Col xs="6">
                    <div className="text-center font-size-s text-secondary">
                        <div className="text-success font-weight-7">
                            <p>신랑 측 혼주</p>
                        </div>
                        <div>
                            <p>아버지 <span className="font-size-m font-weight-7 text-dark">이영돈</span></p>
                        </div>
                        <div className="d-flex justify-content-center mb-4">
                            <a href="tel:+5218116228988">
                                <span className="btn-tel-blue mx-2 p-2 rounded-circle material-icons">call</span>
                            </a>
                            <a href="https://wa.me/5218116228988">
                                <span className="btn-tel-grey mx-2 p-2 rounded-circle material-icons">textsms</span>
                            </a>
                        </div>
                        <div>
                            <p>어머니 <span className="font-size-m font-weight-7 text-dark">강명혜</span></p>
                        </div>
                        <div className="d-flex justify-content-center mb-4">
                            <a href="tel:+5218114815509">
                                <span className="btn-tel-blue mx-2 p-2 rounded-circle material-icons">call</span>
                            </a>
                            <a href="https://wa.me/5218114815509">
                                <span className="btn-tel-grey mx-2 p-2 rounded-circle material-icons">textsms</span>
                            </a>
                        </div>
                    </div>
                </Col>

                <Col xs="6">
                    <div className="text-center font-size-s text-secondary">
                        <div className="text-pink font-weight-7">
                            <p>신부 측 혼주</p>
                        </div>
                        <div>
                            <p>아버지 <span className="font-size-m font-weight-7 text-dark">이정만</span></p>
                        </div>
                        <div className="d-flex justify-content-center mb-4">
                            <a href="tel:+5491162759000">
                                <span className="btn-tel-pink mx-2 p-2 rounded-circle material-icons">call</span>
                            </a>
                            <a href="https://wa.me/5491162759000">
                                <span className="btn-tel-grey mx-2 p-2 rounded-circle material-icons">textsms</span>
                            </a>
                        </div>
                        <div>
                            <p>어머니 <span className="font-size-m font-weight-7 text-dark">선우미영</span></p>
                        </div>
                        <div className="d-flex justify-content-center mb-4">
                            <a href="tel:+5491168900846">
                                <span className="btn-tel-pink mx-2 p-2 rounded-circle material-icons">call</span>
                            </a>
                            <a href="https://wa.me/5491168900846">
                                <span className="btn-tel-grey mx-2 p-2 rounded-circle material-icons">textsms</span>
                            </a>
                        </div>
                    </div>
                </Col>
            </Row>
       </div>
    )
}

export default ContactoComponent