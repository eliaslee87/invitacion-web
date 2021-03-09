import './style.css'

const MapaComponent = () => {
    return (
        <div className="f-Nanum">
            <div className="text-center mx-3 mb-3">
                <h5 className="font-weight-7 border-top border-dark p-3 pt-4">오시는길</h5>
                <div>
                    <p className="font-weight-7 font-size-s text-right m-0">아르헨티나 신성교회</p>
                    <p className="font-weight-7 font-size-s text-right text-secondary m-0">Ramon L. Falcon 3264, CABA</p>
                </div>
            </div>
            <div className="map-responsive">
                <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6565.744719838774!2d-58.477611046052665!3d-34.63266571332229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc98ff0492627%3A0x88ae6e5d73430c80!2sIglesia%20Evang%C3%A9lica%20Presbiteriana%20Sin%20Sung%20Coreana!5e0!3m2!1sen!2sar!4v1615243432703!5m2!1sen!2sar" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
            </div>
        </div>
    )
}

export default MapaComponent