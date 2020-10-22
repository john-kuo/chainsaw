### ⏳ BitBucket setup guide

1. Clone **autodeploy.js** to your server
2. update **REPO** folder field in **autodeploy.js** to point to your project
3. update relevant commands in autodeploy.js to handle git pull, server restart command
4. launch the script, it listens at port **888** by default

5. Head to your BitBucket project repository page and click on **Repository settings**
<p align="right">
  <a href="https://warriorcode.xyz/images/opensource/chainsaw/bitbucket_setup_one.png">
    <img src="https://warriorcode.xyz/images/opensource/chainsaw/bitbucket_setup_one.png" width="1000px" height="450px" alt="Bitbucket setup one" />
  </a>
</p>

6. Go to **Webhooks** and click on **Add webhook**
<p align="right">
  <a href="https://warriorcode.xyz/images/opensource/chainsaw/bitbucket_setup_two.png">
    <img src="https://warriorcode.xyz/images/opensource/chainsaw/bitbucket_setup_two.png" width="1000px" height="450px" alt="Bitbucket setup two" />
  </a>
</p>
7. Enter the URL for the webhooks, it should be your_url + port 888
<p align="right">
  <a href="https://warriorcode.xyz/images/opensource/chainsaw/bitbucket_setup_three.png">
    <img src="https://warriorcode.xyz/images/opensource/chainsaw/bitbucket_setup_three.png" width="1000px" height="450px" alt="Bitbucket setup three" />
  </a>
</p>
8.Done