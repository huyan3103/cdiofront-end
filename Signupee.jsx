import "./Signupee.css"
import img from "./test.jpg"

const Signupee = () => {
  return (
    <div className="signupee">
      <div className="image-signupee">
        <img src={img} alt="avatar"></img>
      </div>
      <div className="infor-signupee">
        <div className="username-signupee">
          <h3>Username</h3>
          <input type="text" autoComplete="off"></input>
        </div>
        <div className="pass-signupee">
          <h3>Password</h3>
          <input type="password"></input>
        </div>
        <div className="name-signupee">
          <h4>First Name</h4>
          <input type="text" autoComplete="off"></input>
          <h4>Last Name</h4>
          <input type="text" autoComplete="off"></input>
        </div>
        <div className="address-signupee">
          <h3>Address</h3>
          <div className="address1">
            <h3>Duong</h3>
            <input type="text" autoComplete="off"></input>
            <h3>Phuong</h3>
            <input type="text" autoComplete="off"></input>
            <h3>Quan</h3>
            <input type="text" autoComplete="off"></input>
            <h3>Thanh Pho</h3>
            <input type="text" autoComplete="off"></input>
          </div>
        </div>
        <div className="phone-signupee">
          <h3>SDT</h3>
          <input type="text" autoComplete="off"></input>
        </div>
        <div className="mail-signupee">
          <h3>Email</h3>
          <input type="text" autoComplete="off"></input>
        </div>
        <button type="button">Signup</button>
      </div>
    </div>
  )
}

export default Signupee
