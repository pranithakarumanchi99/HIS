class CommonService{
isAutheticated(){
    if(sessionStorage.getItem('user_session')|| localStorage.getItem('user-session')){
        return true
    }
    return false
}

}
//Enable singeton behaviour on this class 
CommonService.__instance=null;
CommonService.get=()=>{
    if(!CommonService.__instance){
        CommonService.__instance=new CommonService();
    }
    return CommonService.__instance;
}
export default  CommonService