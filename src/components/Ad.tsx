import Image from "next/image"
import Link from "next/link"

const Ad = ({ size }: { size: "sm" | "md" | "lg" }) => {
    return (
        <div className="p-4 bg-white shadow-md rounded-lg text-sm flex flex-col gap-4">
            {/* TOP */}
            <div className="flex items-center justify-between text-gray-500 font-medium">
                <span>Sponsored Ads</span>
                <Image src="/more.png" alt="" width={16} height={16} />
            </div>
            {/* Bottom */}
            <div className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}>
                <div className={`relative w-full ${size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"}`}>
                    <Image src="https://images.pexels.com/photos/30885895/pexels-photo-30885895.jpeg" alt="" fill className="rounded-lg object-cover" />
                </div>
                <div className="flex items-center gap-4">
                    <Image src="https://images.pexels.com/photos/32935737/pexels-photo-32935737.jpeg" alt="" width={24} height={24} className="w-6 h-6 rounded-full object-cover" />
                    <span className="text-blue-500 text-xs">BigChief Sponsored</span>
                </div>
                <p className={size === "sm" ? "text-xs" : "text-sm"}>
                    {size === "sm"
                        ? "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, maxime."
                        : size === "md"
                            ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aperiam aliquid delectus et ullam facilis quae provident neque in libero."
                            : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, dolorem? Accusantium, sunt. Quasi, maxime dolorem placeat itaque sint eveniet iste labore qui voluptatum illo quo eum tempore ea iusto quidem."}
                </p>
                <button className="bg-gray-200 text-gray-500 p-2 text-xs rounded-lg">
                    Learn More
                </button>
            </div>
        </div>
    )
}

export default Ad