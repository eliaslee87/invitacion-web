import './style.css'

const BannerSuperiorComponent = () => {
    return (
        <div className="overflow-hidden d-flex justify-content-center mb-4" style={{height: "200px", position: "relative"}}>
            <img src="/images/OMP_1823.jpg" alt="banner central" className="img-blur"/>
            <p className="center-text-image text-light f-Nanum font-weight-8 font-size-m">소중한 당신을 초대합니다</p>
        </div>
    )
}

export default BannerSuperiorComponent