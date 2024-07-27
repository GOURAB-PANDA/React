import PropTypes from 'prop-types';

function UserGreeting(props) {
  const welcomemessage = (
            <h2 className="welcome-message">Welcome {props.username}</h2>
  );

  const loginPrompt = <h2              className="login-prompt">please log in</h2>;

  return props.isLoggedIn ? welcomemessage : loginPrompt;
}

UserGreeting.proptypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
}
UserGreeting.defaultProps = {
  isLoggedIn: false,
  username: "Guest",
}
export default UserGreeting;
