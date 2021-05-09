const { I } = inject();
const faker = require('faker');
const token = process.env.accessToken;
var usersToDelete = null;

module.exports = function() {
  return actor({
    async addUserToDelete(id){      
      usersToDelete = id;
    },

    async getUsersToDelete(){
      return usersToDelete;
    },

    async handleUser(){
      const resInsert = await I.insertUser();
         
      if(resInsert != null){
        const resDelete = await I.deleteUser(resInsert.data.data.id);

        if(resDelete != null){
          if(resDelete.status == "200" && resDelete.data.code == "204"){                                 
            return resDelete;
          }
        }
      }      
      return null;
    },

    async insertUser(req_body = null){

      let json_body;
      
      if(req_body == null){
        const genders = ['Female','Male'];      
        const gender = faker.random.arrayElement(genders);
        const name = faker.name.firstName(gender);      
        const email = faker.internet.email();
  
        const body = {
          "name" : name,
          "email" : email,
          "gender" : gender,
          "status" : "Active"
        };
  
        json_body = JSON.parse(JSON.stringify(body));
      } else {
        json_body = req_body;
      }
      
      return await I.sendPostRequest('/users', json_body, { "Authorization": "Bearer " + token});
    },

    async deleteUser(id){            
      return await I.sendDeleteRequest('/users/' + id,  { "Authorization": "Bearer " + token});;
    }
  });
}