const INITIAL_STATE = {sourceid : 0, sourcelogger : '', sourcerole : '', cookie : false, loading : false, msg : '',showId : false}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'TESTING':
            return {...INITIAL_STATE, username : 'TEST', cookie : true}
        case 'LOGIN_SUCCESS':
            return {...INITIAL_STATE, username : action.payload.a, id : action.payload.c, role : action.payload.b, cookie:true}
        case 'IS_LOADING':
            return {...INITIAL_STATE, loading : true, cookie : true}
        case 'USERNAME_UDAH_ADA':
            return {...INITIAL_STATE, msg : action.hasil, cookie : true}
        case 'KEEP_LOGIN':
            return{...INITIAL_STATE, sourcelogger : action.payload.sourcelogger, sourceid : action.payload.sourceid, sourcerole : action.payload.sourcerole, cookie:true}
        case 'RESET_USER':
            return {...INITIAL_STATE, cookie : true}
        case 'TOGGLE_ID':
            return {...state, showId : !state.showId, cookie : true}
        default:
            return state
    }
}