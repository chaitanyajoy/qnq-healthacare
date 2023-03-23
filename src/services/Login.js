import axios from 'axios'

const QNQ_BASE_API_URL = "https://qnqhealthcare.com"

class AuthService{

    loginUser(user){
        return axios.post(QNQ_BASE_API_URL + '/qnqerpws/ws/sendotp', user);
    }

    verifyOTP(){
        return axios.get(QNQ_BASE_API_URL + '/qnqerpws/ws/updatecustomerlogin', payload)
    }

}

export default new AuthService();