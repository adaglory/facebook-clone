import "./login.css";
import facebook from "./images/facebook.png";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./stateProvider";
const Login = () => {
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    // signin function
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.Set_User,
          user: result.user,
        });
        console.log(result.user);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className='login'>
      <div className='login__logo'>
        <img src={facebook} alt='' />
        <h2>Facebook</h2>
      </div>
      <Button type='submit' onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
};

export default Login;
