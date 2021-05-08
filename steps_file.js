const { I } = inject();
const token = process.env.accessToken;
const util = require('util');

module.exports = function() {
  return actor({

    async handleUser(name, email){
      deleted = false;
      const body = {
        "name" : name,
        "email" : email,
        "gender" : "Female",
        "status" : "Active"
      };

      const json_body = JSON.parse(JSON.stringify(body));
      let res = await I.sendPostRequest('/users', json_body, { "Authorization": "Bearer " + token});

      if(res.status == "200" && res.data.code == "201"){        
        res = await I.sendDeleteRequest('/users/' + res.data.data.id,  { "Authorization": "Bearer " + token});
        if(res.status == "200" && res.data.code == "204"){                                 
          return res;
        }
      }      
      return null;
    }
  });
}