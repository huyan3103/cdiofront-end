import ProfileInfo from "./ProfileInfo.js";
import Comments from "../Comment/Comments.js";
import './Profile.css'
const Profile = () => {
  const user = {
    infos: {
      id: "1",
      name: "Huy An",
      type: "Company/Person",
      address: "VietNam",
      contact: "1234567",
      email: "123@gmail.com",
      description: "description text"
    },
    comments: [
      {
        name: "Huy An",
        content: "Ok",
      },
      {
        name: "Huy An",
        content: "Ok",
      },
    ],
  };
  return (
    <div className="profile">
      <ProfileInfo infos={user.infos} key={user.infos.id}/>
      <Comments comments={user.comments} />
    </div>
  );
};

export default Profile;
