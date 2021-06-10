import classes from "./SignUpForm.module.css";
const SignUpForm = () => {
  return (
    <form className={classes["sign-up"]}>
      <h3>Sign Up</h3>
      <div>
          
      </div>
      <div>
        <div className={classes["form-group"]}>
          <label>Name</label>
          <input type="text" id="lname" name="lname" />
        </div>

        <div className={classes["form-group"]}>
          <label>Address</label>
          <input type="text" id="lname" name="lname" />
        </div>

        <div className={classes["form-group"]}>
          <label>Phone</label>
          <input type="text" id="lname" name="lname" />
        </div>

        <div className={classes["form-group"]}>
          <label>Mail</label>
          <input type="text" id="lname" name="lname" />
        </div>

        <div className={classes["form-group"]}>
          <label>Type</label>
          <input type="text" id="lname" name="lname" />
        </div>

        <div className={classes["form-group"]}>
          <label>Descripttion</label>
          <textarea type="text" id="lname" name="lname" row="9"/>
        </div>

        <div className={classes["form-group"]}>
          <button>Sign up</button>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
