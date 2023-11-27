var http = require('http');
http.createServer(function (req, res) {
    console.log(`Just got a request at ${req.url}!`)

    res.write('

<html><head><meta http-equiv="Content-Type" content="text/html; charset=windows-1252">
      <title>Checkout Card Encryption Utility</title>
      <script src="https://cst.jsclient.vficloud.net/verifone.js"></script>
   </head>
   <body style="width: 600px;margin: 20px auto;">
      <label for="cardNumber">Card Number:</label>
	  <input type="text" id="cardNumber" name="cardNumber"><br><br>
	  <label for="expiryMonth">Expiry Month</label>
	  <input type="text" id="expiryMonth" name="expiryMonth"><br><br>
	  <label for="expiryYear">Expiry Year</label>
	  <input type="text" id="expiryYear" name="expiryYear"><br><br>
	  <label for="cvv">CVV</label>
	  <input type="text" id="cvv" name="cvv"><br><br>
	  <label for="svcAccessCode">svcAccessCode</label>
	  <input type="text" id="svcAccessCode" name="svcAccessCode"><br><br>
	  <label for="encryptionKey">Encryption Key</label>
	  <input type="text" id="encryptionKey" name="encryptionKey"><br><br>   
	  <button onclick="encryptCardDetails()">Generate</button><br><br>   
	  <label id="encryptedCardValue"></label>   
	  <script>
               async function encryptCardDetails() {
                   let cardNumber = document.getElementById("cardNumber").value;
                   let expiryMonth = document.getElementById("expiryMonth").value;
                   let expiryYear = document.getElementById("expiryYear").value;
                   let cvv = document.getElementById("cvv").value;
				   let svcAccessCode = document.getElementById("svcAccessCode").value;
                   let encryptionKey = document.getElementById("encryptionKey").value;   
				   let encryptedDetails = await verifone.getEncryptedCardDetails(
                     {
						cardNumber,
						expiryMonth,
						expiryYear,
						cvv,
						svcAccessCode,
                     },
                     encryptionKey
                   );
				   console.log("encryptedDetails---->", encryptedDetails);
				   prompt ("Encrypted Payload", JSON.stringify(encryptedDetails.encryptedCard));
               }
      </script>
   
</body></html>');
    res.end();
}).listen(process.env.PORT || 3000);
