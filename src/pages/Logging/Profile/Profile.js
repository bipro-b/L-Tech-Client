import React from "react";
import "./Profile.css";
const Profile = () => {
  return (
    <div>
      <div className="profile">
        <div className="leftbox"></div>
        <div className="rightbox">
          <div className="profile tabshow">
            <h1 className="titleh1">Personal Info</h1>
            <h2 className="titleh2">Full Name</h2>
            <input type="text" className="input" value="Pranta Sarkar" />
            <h2 className="titleh2">Birth Date</h2>
            <input type="text" className="input" value="January 07,2000" />
            <h2 className="titleh2">Gender</h2>
            <input type="text" className="input" value="Male" />
            <h2 className="titleh2">Email</h2>
            <input
              type="text"
              className="input"
              value="prantasarkar684@gmail.com"
            />
            <h2 className="titleh2">Password</h2>
            <input type="password" className="input" value="1234@s" />
            <button className="btn">Update</button>
          </div>
          <div className="payment tabshow">
            <h1 className="titleh1">Payment Info</h1>
            <h2 className="titleh2">Payment Method</h2>
            <input
              type="text"
              className="input"
              value="Mastercard - 0202 **** **** 7336"
            />
            <h2 className="titleh2">Billing Address</h2>
            <input
              type="text"
              className="input"
              value="Wall's Street, New York"
            />
            <h2 className="titleh2">Zipcode</h2>
            <input type="text" className="input" value="1234455566" />
            <h2 className="titleh2">Billing Date</h2>
            <input type="text" className="input" value="July 31,2022" />
            <h2 className="titleh2">Redeem Card</h2>
            <input type="password" className="input" value="Enter Gift Code" />
            <button className="btn">Update</button>
          </div>
          <div className="subscription tabshow">
            <h1>Subscription Info</h1>
            <h2>Payment Date</h2>
            <p>July 31,2022</p>
            <h2>Next Charge</h2>
            <p>
              $100 <span className="sp">Includes Tax</span>
            </p>
            <h2>Plan</h2>
            <p>Limited Plan</p>
            <h2>Monyhly</h2>
            <p>$100/month</p>
            <button className="btn">Update</button>
          </div>
          <div className="privacy tabshow">
            <h1>Privacy Settings</h1>
            <h2>Manage Email Notification</h2>
            <p></p>
            <h2>Manage Privacy Settings</h2>
            <p></p>
            <h2>View Terms & Conditions</h2>
            <p></p>
            <h2>Personalised Ad Experience</h2>
            <p></p>
            <h2>Protect Account</h2>
            <p></p>
            <button className="btn">Update</button>
          </div>
          <div className="Settings tabshow">
            <h1>Account Settings</h1>
            <h2>Sync Watchlist</h2>
            <p></p>
            <h2>Hold Subscription</h2>
            <p></p>
            <h2>Cancel Subscription</h2>
            <p></p>
            <h2>Your Devices</h2>
            <p></p>
            <h2>Referrals</h2>
            <p></p>
            <button className="btn">Update</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
