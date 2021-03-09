import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"
import './style.css'

const handleDragStart = (e) => e.preventDefault();

const photos = ['DSCF0152.jpg', 'DSCF0189.jpg', 'DSCF0289.jpg', 'DSCF0297.jpg', 'DSCF0310.jpg', 'DSCF0324.jpg', 'DSCF0334.jpg', 'DSCF0396.jpg', 'DSCF0423.jpg', 'DSCF0430.jpg', 'DSCF0446.jpg', 'DSCF0496.jpg', 'DSCF0506.jpg', 'DSCF0528.jpg', 'DSCF0546.jpg', 'DSCF0674.jpg', 'DSCF0743.jpg', 'DSCF0747.jpg', 'DSCF0754.jpg', 'DSCF0760.jpg', 'DSCF0767.jpg', 'DSCF0787.jpg', 'DSCF0936.jpg', 'OMP_1217.jpg', 'OMP_1291.jpg', 'OMP_1558.jpg', 'OMP_1572.jpg', 'OMP_1672.jpg', 'OMP_1823.jpg', 'OMP_1855.jpg',]

const items = photos.map((photo,index) => {
    return <img src={`/images/${photo}`} onDragStart={handleDragStart} alt={`${photo}`} className="sliderimg" key={index}/>
})

const ImageSliderComponent = () => {

    return (
        <div className="f-Nanum">
            <div className="text-center">
                <h5 className="font-weight-7 border-top border-dark mx-3 p-3">겔러리</h5>
            </div>
            <AliceCarousel
                mouseTracking
                autoPlay
                autoPlayInterval={3000}
                animationDuration={1000}
                autoPlayStrategy={'action'}
                infinite
                swipeDelta={20}
                controlsStrategy={'responsive'}
                responsive={{0:{items:1,},1024:{items:5}}}
                disableButtonsControls
                disableDotsControls
                items={items}
                />
        </div>
    )
}

export default ImageSliderComponent