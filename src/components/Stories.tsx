import Image from "next/image"

const Stories = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-scroll text-sm scrollbar-hide">
      <div className="flex gap-8 w-max">
        {/* STORY  */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src="https://images.pexels.com/photos/32221924/pexels-photo-32221924.jpeg" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
          <span className="font-medium">Prakalp</span>
        </div>
        {/* STORY  */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src="https://images.pexels.com/photos/32221924/pexels-photo-32221924.jpeg" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
          <span className="font-medium">Prakalp</span>
        </div>
        {/* STORY  */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src="https://images.pexels.com/photos/32221924/pexels-photo-32221924.jpeg" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
          <span className="font-medium">Prakalp</span>
        </div>
        {/* STORY  */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src="https://images.pexels.com/photos/32221924/pexels-photo-32221924.jpeg" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
          <span className="font-medium">Prakalp</span>
        </div>
        {/* STORY  */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src="https://images.pexels.com/photos/32221924/pexels-photo-32221924.jpeg" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
          <span className="font-medium">Prakalp</span>
        </div>
        {/* STORY  */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src="https://images.pexels.com/photos/32221924/pexels-photo-32221924.jpeg" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
          <span className="font-medium">Prakalp</span>
        </div>
        {/* STORY  */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src="https://images.pexels.com/photos/32221924/pexels-photo-32221924.jpeg" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
          <span className="font-medium">Prakalp</span>
        </div>
      </div>
    </div>
  )
}

export default Stories