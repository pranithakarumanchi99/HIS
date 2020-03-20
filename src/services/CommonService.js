class CommonService{
isAutheticated(){
    if(sessionStorage.getItem('user_session')|| localStorage.getItem('user-session')){
        return true
    }
    return false
}

}
export default  new CommonService()