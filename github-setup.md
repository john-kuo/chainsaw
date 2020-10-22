### ⏳ Github setup guide

1. Clone **autodeploy.js** to your server
2. update **REPO** folder field in **autodeploy.js** to point to your project
3. update relevant commands in autodeploy.js to handle git pull, server restart command
4. launch the script, it listens at port **888** by default

5. Head to your project's Github settings page and click on **add webhook**
<p align="right">
  <a href="https://warriorcode.xyz/images/opensource/chainsaw/github_setup_one.png">
    <img src="https://warriorcode.xyz/images/opensource/chainsaw/github_setup_one.png" width="1000px" height="450px" alt="github step one" />
  </a>
</p>

6. Enter the URL for the webhooks, it should be your_url + port 888
<p align="right">
  <a href="https://warriorcode.xyz/images/opensource/chainsaw/github_setup_two.png">
    <img src="https://warriorcode.xyz/images/opensource/chainsaw/github_setup_two.png" width="1000px" height="450px" alt="github step two" />
  </a>
</p>

7. Done.