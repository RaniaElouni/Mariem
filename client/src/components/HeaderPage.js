import React from 'react'
export default function HeaderPage({ img, heading, subheading,className }) {
    return (
        <div className={className} style={{margin:0}}>


            <div
                class="relative h-[450px] overflow-hidden bg-cover bg-[50%] bg-no-repeat"  style={{ color: 'white', backgroundImage: `url(${img})` ,}}>
                <div
                    class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black/60 bg-fixed">
                    <div class="flex h-full items-center justify-center">
                        <div class="px-6 text-center text-white md:px-12">
                            <h1 class="mb-6 text-5xl  text-white font-bold">{heading}</h1>
                            <h3 class="mb-8 text-3xl  text-white font-bold">{subheading}</h3>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
