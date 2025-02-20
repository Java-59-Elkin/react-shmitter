import Avatar from "./Avatar.jsx";
import {useContext} from "react";
import {TwitterContext} from "../utils/context.js";
import {useDispatch, useSelector} from "react-redux";
import {increaseFollowers, decreaseFollowers, increaseFollowing, decreaseFollowing} from "../actions/userActions.js";

const Stats = () => {
    const {user} = useContext(TwitterContext);

    const followers = useSelector(state => state.followers);
    const following = useSelector(state => state.following);
    const dispatch = useDispatch();
    const sum = 1;

    return (
        <div className={'user-stats'}>
            <div>
                <Avatar/>
                {user.name}
            </div>
            <div className={'stats'}>
                <div
                    onClick={() => dispatch(increaseFollowers(sum))}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        dispatch(decreaseFollowers(sum));
                    }}
                >
                    Followers: {followers.followers}
                </div>
                <div
                    onClick={() => dispatch(increaseFollowing(sum))}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        dispatch(decreaseFollowing(sum));
                    }}
                >
                    Following: {following.following}
                </div>
            </div>
        </div>
    );
};

export default Stats;