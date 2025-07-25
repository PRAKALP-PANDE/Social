import Image from "next/image"
import FriendRequests from "./FriendRequests"
import Birthdays from "./Birthdays"
import Ad from "./Ad"

const RightMenu = () => {
  return (
    <div className="flex flex-col gap-8">
      <FriendRequests />
      <Birthdays />
      <Ad size="md" />
    </div>
  )
}

export default RightMenu