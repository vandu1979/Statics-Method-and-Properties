class Governor {
 
   
 static doSomething1(){
    console.log('hi')
 }

 static doAnother(){
    console.log('hello')
    

    }
    static Veto(){
        console.log('hey')
    }

}
Governor.veto()
Governor.doSomething1()
Governor.doAnother()