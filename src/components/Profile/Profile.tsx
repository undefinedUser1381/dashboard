import ComponentLayout from "@/layout/ComponentLayout";
import ProfileContent from "./ProfileContent/ProfileContent";
import ProfileHeader from "./ProfileHeader/ProfileHeader";

function Profile() {
  return (
    <ComponentLayout>
      <div className="px-[1rem] lg:px-[6rem] xl:px-[8rem] py-[2rem] xl:py-[3rem] w-full ml-auto mt-20 lg:w-[77%] xl:w-[83%]">
        <ProfileHeader />
        <ProfileContent />
      </div>
    </ComponentLayout>
  );
}

export default Profile;
