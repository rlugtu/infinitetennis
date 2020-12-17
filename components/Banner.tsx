import Image from 'next/image'

const Banner = () => {
    return (
        <div className="bannerContainer">
            {/* <Image src='/banner.png'
            layout="fill"
            objectFit="cover"
            /> */}
            <div className-="bannerTextContainer">
                <h1 className="bannerText">Infinite Future Tennis</h1>
                    <h1 className="bannerText2">Home of Dedicated Tennis Players</h1>
            </div>
           
        </div>
    )
}

export default Banner