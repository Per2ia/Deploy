(async () => {
  async function getroot() {
    const url = 'https://dxl3ecaxd2l2azhj4cpbrrxqvi0pwxtj.lambda-url.ap-northeast-1.on.aws/list-Items'

    const response = await fetch(url);
    const repositories = await response.json();

    return repositories
  }

  do {
    const repos = await getroot();
    console.log(repos)
    document.write(repos.Time, repos.books)
  } while (true);
  

})();