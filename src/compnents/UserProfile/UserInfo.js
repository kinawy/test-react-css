import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > span': {
      margin: theme.spacing(2),
    },
  },
}));

const UserInfo = (props) => {
  const classes = useStyles();

  return (
    <div className="user-info">
      <h4>username</h4>
      <img src="https://www.gamersdecide.com/sites/default/files/styles/news_images/public/ezgif.com-gif-maker.jpg" alt="avatar" className="profile-avi"/>
      <p>a sample bio could be "i got kicked off of tiktok and i hate cheetos"</p>
      <h6>instagram-url-here</h6>
      <h6>personal-url-here</h6>
      {/* could be edit or follow/unfollow button depending on user*/}
      <Icon color="secondary">add_circle</Icon>
    </div>
  );
}

export default UserInfo