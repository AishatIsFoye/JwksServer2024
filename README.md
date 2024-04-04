<h1>Hello, this is a repo for a class project.</h1>

<p>install node.js ( Check to make sure you have everything required to run javascript code.)</p> 

<p> To run this please install the following dependencies </p>

<li>npm install express</li>
<li>npm install jsonwebtoken</li>
<li>npm install node-jose</li>
<li>npm install argon2</li>
<li>npm install sqlite3</li>
<li>npm install uuid</li>
<li>npm install express-rate-limit</li>

<h3>Note!</h3> 
<p>The gradebot syas that my keys are not encrypted but they actually are. This is the part of my code where the keys are being encrypted. I have a .env file in my repo with a key that works. I am not sure why it does not work.
</p>
<pre>
  function encryptPrivateKey(privateKey)
  {
  const iv = crypto.randomBytes(16); // Initialization vector
  const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(process.env.NOT_MY_KEY, 'hex'), iv);
  let encrypted = cipher.update(privateKey, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return iv.toString('hex') + encrypted;
  }
 </pre>
<h3>Below are screenshots of the testsuite and the gradebot running.</h3>

![gradebot picture1](https://github.com/AishatIsFoye/JwksServer2024/assets/127973488/001f6d4a-2591-4b54-8175-889221207b46)

![image](https://github.com/AishatIsFoye/JwksServer2024/assets/127973488/cbcfd4ce-3427-4573-9262-396c49734bc8)

![test 2](https://github.com/AishatIsFoye/JwksServer2024/assets/127973488/f1c396d0-b260-4aea-803d-e9baf47a86f3)

![image](https://github.com/AishatIsFoye/JwksServer2024/assets/127973488/d8fec192-dcdd-42d9-a1f2-3d417058e952)



