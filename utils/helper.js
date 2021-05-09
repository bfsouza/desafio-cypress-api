const Helper = require('@codeceptjs/helper');

class MyHelper extends Helper {
    
    async _finishTest() {
        const { I } = inject();         
        const rest = this.helpers['REST'];   
        const usersToDelete = await I.getUsersToDelete();        
        if(usersToDelete != null){
            const token = process.env.accessToken;  
            console.log("DELETING USERS...");          
            await rest.sendDeleteRequest('https://gorest.co.in/public-api/users/' + usersToDelete,  { "Authorization": "Bearer " + token});            
        }        
    }
}

module.exports = MyHelper;