// eslint-disable-next-line no-unused-vars
const Crypto = (function () {

    function encryptDecrypt(originalString, nFromCharCode) {
        let i, n, newString;
        if (nFromCharCode == null) {
          nFromCharCode = -1;
        }
        i = 0;
        n = 0;
        newString = '';
        while (i < originalString.length) {
          n = originalString.charCodeAt(i);
          if (n >= 8364) {
            n = 128;
          }
          newString += String.fromCharCode(n + nFromCharCode);
          i++;
        }
        return newString;
    }

	function linkToUnCryptMailto(encryptedMail)	{
		location.href = encryptDecrypt(encryptedMail);
	}

    function encryptEMail(emailToEncrypt) {
		return encryptDecrypt('mailto:' + emailToEncrypt, 1);
	}

	// public api
	return {
		linkToUnCryptMailto,
        encryptEMail
	};
})();
