import { Link } from "react-router-dom";

function ProfileHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-center items-start justify-between">
      <h3 className="text-black text-[1.5rem] font-medium dark:text-white">
        Profile
      </h3>
      <div>
        <Link className="text-gray-400 font-medium" to={"/"}>Dashboard / </Link>
        <span className="text-blue-600 font-medium text-[0.9rem]">Profile</span>
      </div>
    </div>
  );
}

export default ProfileHeader;
