const { I } = inject();

module.exports = {

  title: "Search",
  navigation: "//span[@class='navigation_page']",

  firstItem: {    
    name: "//*[@id='center_column']/ul/li/div/div[2]/h5/a"    
  }  
}
