(async () => {
  async function getroot() {
    const url = 'https://dxl3ecaxd2l2azhj4cpbrrxqvi0pwxtj.lambda-url.ap-northeast-1.on.aws/list-Items'

    const response = await fetch(url);
    const repositories = await response.json();

    return repositories
  }

  async function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
  
    

  do {
    const repos = await getroot();
    delay(1000).then(() => 
      console.log(repos)
      // document.write(repos.Time, repos.books)
    );
    
  } while (true);
  

})();