import Avatar from "./Avatar.jsx";
import {useContext} from "react";
import {TwitterContext} from "../utils/context.js";
import {useDispatch, useSelector} from "react-redux";
import {add, remove} from "../actions/userActions.js";

const Stats = () => {
    const {user, stats, increaseFollowing, decreaseFollowing} = useContext(TwitterContext);
    const followers = useSelector(state => state.followers);
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
                    onClick={() => dispatch(add(sum))}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        dispatch(remove(sum));
                    }}
                >
                    Followers: {followers}
                </div>
                {/*<div*/}
                {/*onClick={() => {*/}
                {/*    increaseFollowing();*/}
                {/*}}*/}
                {/*onContextMenu={(e) => {*/}
                {/*    e.preventDefault();*/}
                {/*    decreaseFollowing();*/}
                {/*}}>*/}
                {/*    Following: {stats.following}*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default Stats;