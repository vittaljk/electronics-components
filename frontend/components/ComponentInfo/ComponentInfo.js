import React from 'react'
import Image from 'next/image'

function ComponentInfo(props) {

    return (
        <div>
            ComponentInfo
            <Image
                width="500"
                height="500"
                src="http://localhost:1337/uploads/flatpack1_9ed8874cb4.jpeg"
                alt="Picture of the author"
            />
        </div>
    )
}

export default ComponentInfo