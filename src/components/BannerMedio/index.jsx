import './style.css'

const BannerMedioComponent = () => {
    return (
        <div className="f-Nanum">
            <div className="d-flex justify-content-center m-3 p-4">
                <h6 className="text-vertical m-0 p-0">예쁘게 잘 살겠습니다</h6>
            </div>
            <div className="text-center">
                <h6 className="wedding-label">WEDDING DAY</h6>
            </div>
            <div className="d-flex justify-content-center p-5" style={{backgroundColor: "#f4f4f4"}}>
                <a className="btn btn-danger rounded-pill p-3 font-weight-7" href="https://www.youtube.com/user/sinsungiglesia">LIVE 방송으로 가기</a>
            </div>
        </div>
    )
}

export default BannerMedioComponent