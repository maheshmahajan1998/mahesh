class sauseDemoLogin{

    public get inputUserName(){

        return $("//input[@type='text']")
    }
    public get inputPassword(){
        return $("//input[@type='password']")
    }

    public get btnSubmit(){
        return $("//input[@type='submit']")
    }

    public async login(userName:string, password:string){

        await this.inputUserName.setValue(userName)
       await this.inputPassword.setValue(password)
       await this.btnSubmit.click()
    }
}
export default new sauseDemoLogin()