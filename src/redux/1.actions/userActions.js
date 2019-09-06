import Axios from 'axios'
import {urlApi} from '../../3.helpers/database'
import swal from 'sweetalert'
import Cookie from 'universal-cookie'

const cookieObj = new Cookie()

export const onLogin = (userObject) => {
    /**
     * sama sepeerti loginObj
     * userObject = { 
     *      username : state/inputan,
     *      password : state/inputan
     * }
     * 
     * userObject = {asalNama : this.state.loginUsername, asalKunci : this.state.loginPassword}
     */

    return (dispatch) => {
        dispatch({
            type : 'IS_LOADING'
        })

        Axios.get(urlApi + 'sourcelog', {
            params : {
                // properti di kiri adalah column dari Database
                sourcelogger : userObject.asalNama,
                sourcekey : userObject.asalKunci
            }
        })
        .then((res) => {
            console.log(res)
            if(res.data.length > 0){
                dispatch({
                    type : 'LOGIN_SUCCESS',
                    payload : {
                        a : res.data[0].sourcelogger,
                        b : res.data[0].sourcerole,
                        c : res.data[0].sourceid
                    }
                })
            }
        })
        .catch((err) => {
            console.log(err)
            swal('System Error', 'A problem has occured, please contact an administrator', 'error')
        })
    }
}

export const onRegister = (userObject) => {
    return (dispatch) => {
        dispatch({
            type : 'IS_LOADING'
        })

        Axios.get(urlApi + 'sourcelog', {
            params : {
                sourcelogger : userObject.sourcelogger
            }
        })
        .then((res) => {
            if(res.data.length > 0){
                dispatch({
                    type : 'USERNAME_UDAH_ADA',
                    hasil : 'Username taken'
                })
            }else{
                userObject.sourcerole = 'user'
                Axios.post(urlApi + 'sourcelogger', userObject)
                .then((res) => {
                    dispatch({
                        type : 'LOGIN_SUCCESS',
                        payload : {
                            a : res.data.sourcelogger,
                            b : res.data.sourcerole,
                            c : res.data.sourceid
                        }
                    })
                    swal('Success', 'Registration Succesful!', 'success')
                })
                .catch((err) => {
                    console.log(err)
                })
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export const keepLogin = (cookieData) => {
    return (dispatch) => {
        Axios.get(urlApi + 'users', {
            params : {
                sourcelogger : cookieData
            }
        })
        .then((res) => {
            dispatch({
                type : 'KEEP_LOGIN',
                payload : {
                    sourcelogger : res.data[0].sourcelogger,
                    sourcerole : res.data[0].sourcerole,
                    sourceid : res.data[0].sourceid
                }
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export const resetUser = () => {

    return (dispatch) => {
        dispatch({
            type : 'RESET_USER'
        })
    }
}

export const toggleUserId = () => {
    return(dispatch) => {
        dispatch({
            type : 'TOGGLE_ID'
        })
    }
}