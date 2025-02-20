import Avatar from "./Avatar.jsx";
import {useContext} from "react";
import {TwitterContext} from "../utils/context.js";
import {useSelector} from "react-redux";

const Stats = () => {
    const {user, stats, increaseFollowing, decreaseFollowing} = useContext(TwitterContext);

    const followers = useSelector(state => state.followers);

    return (
        <div className={'user-stats'}>
            <div>
                <Avatar/>
                {user.name}
            </div>
            <div className={'stats'}>
                <div>
                    Followers: {followers}
                </div>
                <div
                onClick={() => {
                    increaseFollowing();
                }}
                onContextMenu={(e) => {
                    e.preventDefault();
                    decreaseFollowing();
                }}>
                    Following: {stats.following}
                </div>
            </div>
        </div>
    );
};

export default Stats;