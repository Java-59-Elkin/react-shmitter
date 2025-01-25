import Avatar from "./Avatar.jsx";
import {useContext} from "react";
import {TwitterContext} from "../utils/context.js";

const Stats = () => {
    const {user, stats, increaseFollowers, decreaseFollowers, increaseFollowing, decreaseFollowing} = useContext(TwitterContext);

    return (
        <div className={'user-stats'}>
            <div>
                <Avatar/>
                {user.name}
            </div>
            <div className={'stats'}>
                <div
                    onClick={() => {
                        increaseFollowers();
                    }}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        decreaseFollowers();
                    }}
                >
                    Followers: {stats.followers}
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