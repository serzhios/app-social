import style from "./Profile.module.css";
import Posts from "../profile/posts/Posts"
import ProfileInfo from './profileInfo/ProfileInfo'

function Profile(props) {
    return (
        <div className={style.profile}>
            {/* <div className={style.me}>
                <img src={foto} alt="profile mini photo" />
                <p>{props.name}</p>
            </div> */}
            <ProfileInfo />
<div className="">
<Posts postsData={props.postsData} />

</div>



        </div>

    )

}

export default Profile