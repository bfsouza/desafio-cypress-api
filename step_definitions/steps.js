var expect = require('expect.js');
var faker = require('faker');
const { I } = inject();
const util = require('util');
const token = process.env.accessToken;
let state = {};

Given(/I send GET HTTP request to user api endpoint for "(\d+)"/, async (id) => {
    const res = await I.sendGetRequest('/users/' + id);
    state.res = res;
});

Given("I send DELETE HTTP request to user api endpoint for a valid id", async () => {
    
    const name = faker.name.findName();
    const email = faker.internet.email();
    state.res = await I.handleUser(name, email);
});

Given(/I send DELETE HTTP request to user api endpoint for an invalid id "(\d+)"/, async (id) => {
    const res = await I.sendDeleteRequest('/users/' + id);    
    state.res = res;
});

Given(/^I send POST HTTP request to user api endpoint for "([^"]*)", "([^"]*)", "([^"]*)" and "([^"]*)"$/, async (name, email, gender, status) => {    
      
    state.body = {
        "name" : name=="<Empty>"?"":name,
        "email" : email=="<Empty>"?"":email,
        "gender" : gender=="<Empty>"?"":gender,
        "status" : status=="<Empty>"?"":status
    };

    const json_body = JSON.parse(JSON.stringify(state.body));
    const res = await I.sendPostRequest('/users', json_body, { "Authorization": "Bearer " + token});
    state.res = res;
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