// 비밀번호 검증 스크립트
function checkPwd (){
    let pwdValue = document.getElementById("pwd").value;
    let pwdCheckValue = document.getElementById("pwdCheck").value;
    let checkPwdText = document.getElementById("checkPwdText");
    if(pwdValue != pwdCheckValue){
        checkPwdText.innerText = "비밀번호가 일치하지 않습니다. 비밀번호를 확인해주세요.";
        checkPwdText.style.color = "red";
    }else{
        checkPwdText.innerText = "비밀번호가 일치 합니다. 계속 진행해주세요.";
        checkPwdText.style.color = "green";
    }
}