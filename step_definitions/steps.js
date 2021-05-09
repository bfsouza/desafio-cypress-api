const { I } = inject();
var expect = require('expect.js');
let state = {};

Given(/I send GET HTTP request to user api endpoint for "(\d+)"/, async (id) => {
    const res = await I.sendGetRequest('/users/' + id);
    state.res = res;
});

Given("I send GET HTTP request to user api endpoint for a valid id", async () => {
    const user = await I.insertUser();
    const id = user.data.data.id;    
    state.res = await I.sendGetRequest('/users/' + id);;
});

Given("I send DELETE HTTP request to user api endpoint for a valid id", async () => {    
    state.res = await I.handleUser();
});

Given(/I send DELETE HTTP request to user api endpoint for an invalid id "(\d+)"/, async (id) => {    
    state.res = await I.deleteUser(id);
});

Given(/^I send POST HTTP request to user api endpoint for "([^"]*)", "([^"]*)", "([^"]*)" and "([^"]*)"$/, async (name, email, gender, status) => {    
    
    state.body = {
        "name" : name=="<Empty>"?"":name,
        "email" : email=="<Empty>"?"":email,
        "gender" : gender=="<Empty>"?"":gender,
        "status" : status=="<Empty>"?"":status
    };

    const json_body = JSON.parse(JSON.stringify(state.body));
    state.res = await I.insertUser(json_body);
    const id = state.res.data.data.id;    
    if(id != null){        
        await I.addUserToDelete(id);        
    }    
});

When(/I receive HTTP response code "(\d+)"/, async (code) => {
    expect(state.res.status).to.eql(code);
});

Then(/I see the code "(\d+)" into the body/, async (bodyCode) => {    
    expect(state.res.data.code).to.eql(bodyCode); 
});

Then(/I see the message "([^"]*)" into the body/, async (message) => {   
    if(message !== "<Empty>"){
        if(state.res.data.data.length != undefined){
            expect(state.res.data.data[0].message).to.eql(message);            
        } else {
            expect(state.res.data.data.message).to.eql(message);            
        }          
    }       
});