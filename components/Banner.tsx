import Image from 'next/image'

const Banner = () => {
    return (
        <div className="bannerContainer">
            {/* <Image src='/banner.png'
            layout="fill"
            objectFit="cover"
            /> */}
            <h1 className="bannerText">Infinite Future Tennis</h1>
        </div>
    )
}

export default Banner