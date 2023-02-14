class datePicker{

    async  dynamicXPath(date:Number ) {
        const dPath= await  $("//tr//a[contains(text(),'31')]")
        return await dPath.getText()
          
      }
}
export default new datePicker()