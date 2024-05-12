
import React from 'react'



export default function Card (props:any){
   const {title, singer, image } = props;
    return (
        <div className="relative max-w-xs overflow-hidden
        rounded-2xl shadow-lg group 
        ">
          <img src= {image} alt="image of the song to be played..."
          className="transition-transform group-hover:scale-110
          duration-200  w-full h-auto
          "
          />
          <div className="absolute inset-0 flex items-end
          bg-gradient-to-t from-black/60 to-transparent
          ">
            <div className="p-4 text-white">
               <h1>{title}</h1>
               <h3>by {singer}</h3>
               <div className="space-x-4 mt-4">
                <button className="text-white" >
                    {/* <Image src='/play.png' width={10} height={10} alt="" /> */}
                    play
                </button>
            </div>
            </div>
         
          </div>
        </div>
    )
}