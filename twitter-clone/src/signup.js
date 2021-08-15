import React, {useState} from 'react'
import './signup.css'
import axios from 'axios'
import useStateWithCallback from "use-state-with-callback";
import { useHistory } from "react-router-dom";


function Signup() {
  const [useEmail, setUseEmail] = useState(true)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [monthOfBirth, setMonthOfBirth] = useState("")
  const [yearOfBirth, setYearOfBirth] = useState("")
  const [dayOfBirth, setDayOfBirth] = useState("")

  let history = useHistory();

  const toggleEmail = () => {
    if(useEmail) {
      setUseEmail(false)
    } else {
      setUseEmail(true)
    }
  }

  const onChangeUsername = (e) => {
    setUsername(e.target.value)
  }

  const successAlert = () => {
    history.push('/login')
  }

const onChangeEmail = (e) => {
  if(useEmail) {
    setEmail(e.target.value)
  } else {
    setPhone(e.target.value)
  }
}

const onPasswordChange = (e) => {
  setPassword(e.target.value)
}

const onSubmit = (e) => {
  e.preventDefault()

  const users = {
    username: username,
    email: email,
    phone: phone,
    password: password,
    monthOfBirth: monthOfBirth,
    yearOfBirth: yearOfBirth,
    dayOfBirth: dayOfBirth
  }
  axios.post('http://localhost:4000/users/add', users)
  .then(res => console.log(res.data))

  history.push('/login')
}

const getValues = (e) => {
    let index = e.nativeEvent.target.selectedIndex;
    let label = e.nativeEvent.target[index].text;
    let value = e.target.value;
    setYearOfBirth(label)
  };

  const getValuesMonths = (e) => {
      let index = e.nativeEvent.target.selectedIndex;
      let label = e.nativeEvent.target[index].text;
      let value = e.target.value;
      setMonthOfBirth(label)
    };

    const getValuesDays = (e) => {
        let index = e.nativeEvent.target.selectedIndex;
        let label = e.nativeEvent.target[index].text;
        let value = e.target.value;
        setDayOfBirth(label)
      };

  const getYears=(start,end)=>{
    let _years=[]
    for(let i=start;i<=end;i++){
      _years.push(i)
    }
    return _years
  }

  let years = getYears(1901,2021)


    return (
        <div className="modalsignup">
          <div className="modal____popupform">
          <img  src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png" className="twitterLogo____signup" />
          <form onSubmit={onSubmit}>
          <h1 className="signup_____headertext">Create your account</h1>
          <input placeholder="Name" onChange={onChangeUsername} className="placeholder____divcreateaccount"/>
          {useEmail ? <input placeholder="Email" onChange={onChangeEmail} className="placeholder____divcreateaccount" />: <input placeholder="Phone" onChange={onChangeEmail} className="placeholder____divcreateaccount"/>}
          <div>
            <button className="switcher_____button" onClick={toggleEmail}>Use {useEmail ? "phone" : "email"} instead</button>
          </div>
            <input placeholder="Password" onChange={onPasswordChange} className="placeholder____divcreateaccount" type="password"/>
          <div>
            <h4 className="birthdate____signup">Date of birth</h4>
            <p className="birthdate______paragraph">This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
          </div>
          <div className="selector_____options">
            <div>
              <select onChange={getValuesMonths} className="selector_____months">
                    <option value="0">Month</option>
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                  </select>
                </div>
                <div>
                  <select onChange={getValuesDays} className="selector_______days">
                        <option value="0">Day</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                      </select>
                    </div>
                    <div>
                      <select onChange={getValues} className="selector______year">
                      <option>Year</option>
                      {years.map(get => {
                              return  <option value={get} key={get}>{get}</option>
                       })}
                      </select>
                    </div>
          </div>

          <div>
            <button className="signup_____button">Next</button>
          </div>
            </form>
          </div>
        </div>
    )
}

export default Signup
