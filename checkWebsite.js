// create an application to check if the website is safe or not using the API from https://www.virustotal.com/gui/home/url
//
// 1. create a function checkWebsite that takes a url as a parameter
// 2. use fetch to call the API
// 3. use the API key from the .env file
// 4. use the url as a parameter in the API call
// 5. log the response to the console
// 6. use the response to display a message to the user
// 7. if the website is safe, display a message to the user
// 8. if the website is not safe, display a message to the user
// 9. if the website is not safe, display the number of malicious websites that the website is linked to

// const API_KEY = "7aaa038e271ce99f15f498ba2a9bc34f0b926bd0244783cc7a0cb040aff53ae6"


// import axios from 'axios';

export function website(url) {
  // const encodedParams = new URLSearchParams();
  // encodedParams.set('apikey', '7aaa038e271ce99f15f498ba2a9bc34f0b926bd0244783cc7a0cb040aff53ae6');
  // encodedParams.set('url', url);
  url = urlencode(url);
  const key = "gK9daycB4hvyLu7b0iykkB1ARUasZDkm";
  const options = {
    method: 'POST',
    url: `https://ipqualityscore.com/api/json/url/${key}/${url}`,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      // 'IPQS-KEY': 'gK9daycB4hvyLu7b0iykkB1ARUasZDkm',
      'Access-Control-Allow-Origin': '*',
    },
    // data: encodedParams,
  };

  fetch(`https://ipqualityscore.com/api/json/url?key=gK9daycB4hvyLu7b0iykkB1ARUasZDkm&url=https%3A%2F%2Fgoogle.com`, {
    method: "GET",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      // 'IPQS-KEY': 'gK9daycB4hvyLu7b0iykkB1ARUasZDkm',
      'Access-Control-Allow-Origin': '*',
      // "mode": "no-cors"
    }
  }).then(r => r.json()).then(data => console.log(data))


  // const options = {
  //   method: 'POST',
  //   url: 'https://www.virustotal.com/api/v3/urls',
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //     'x-apikey': '7aaa038e271ce99f15f498ba2a9bc34f0b926bd0244783cc7a0cb040aff53ae6',
  //     'Access-Control-Allow-Origin': '*',
  //   },
  //   data: encodedParams,
  // };

  // axios
  //   .request(options)
  //   .then(function (response) {
  //     // getAnalysis(response.data.data.id);
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.error(error);
  //   });

}

// function getAnalysis(id){
//   const options = {
//   method: 'GET',
//   url: `https://www.virustotal.com/api/v3/analyses/${id}`,
//   headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/x-www-form-urlencoded',
//       'x-apikey': '7aaa038e271ce99f15f498ba2a9bc34f0b926bd0244783cc7a0cb040aff53ae6',
//       'Access-Control-Allow-Origin': '*',
//     }
//   };

//   axios
//     .request(options)
//     .then(function (response) {
//       console.log("Response ==>" ,response.data.data.attributes.stats);
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
// }





// Convert timestamp to date
// new Date(timestamp * 1000).toUTCString()

// website ==> https://db.aa419.org/fakebankslist.php

















//  ##################################################################################



// export function website(url) {
//   const apiKey = API_KEY;
//   const urlToCheck = urlencode(url);
//   // const urlToCheckHashed = sha256(urlToCheck);
//   // const urlToCheckHashedEncoded = encodeURIComponent(urlToCheckHashed);
//   const urlToCheckHashedEncodedWithAPIKey = `https://www.virustotal.com/api/v3/urls/${urlToCheck}/analyse?apikey=${apiKey}`;
//   fetch(urlToCheckHashedEncodedWithAPIKey, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       'x-apikey': apiKey,
//       // add header to bypass CORS
//       'Access-Control-Allow-Origin': '*',

//       },
//       })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       if (data.data.attributes.last_analysis_stats.malicious > 0) {
//         document.querySelector('#app').innerHTML = `
//           <div>
//             <p>URL: <input type="url" id="url" /></p>
//             <p><button id="button">Check website</button></p>
//             <p>Website is not safe</p>
//             <p>Number of malicious websites that the website is linked to: ${data.data.attributes.last_analysis_stats.malicious}</p>
//           </div>
//         `;
//       } else {
//         document.querySelector('#app').innerHTML = `
//           <div> 
//             <p>URL: <input type="url" id="url" /></p>
//             <p><button id="button">Check website</button></p>
//             <p>Website is safe</p>
//           </div>
//         `;
//       }
//     });
// }

// create function to hash the url
// function sha256(str) {
//   return crypto.createHash('sha256').update(str).digest('hex');
// }

// create function to encode the url
// function urlencode(str) {
//   return encodeURIComponent(str);
// }



// const Check = function () { }
// export { Check };

// Check.prototype.checkWebsite = website;


 function urlencode(str) {
  
    str = (str + '').toString();

    return encodeURIComponent(str)
      .replace(/!/g, '%21')
      .replace(/'/g, '%27')
      .replace(/\(/g, '%28')
      .replace(/\)/g, '%29')
      .replace(/\*/g, '%2A')
      .replace(/%20/g, '+');
  }























// #################################################################################################




// export function checkWebsite(url) {
//     // check if the element is a website
    
//     // if (element.value.startsWith('http://') || element.value.startsWith('https://')) {
//     //     return true
//     // }
//     // else {
//     //     return false
//     // }

//     // Manage core logic by this variable
//   var Settlement = [];
  // Settlement.urlencode = function(str) {
  
  //   str = (str + '').toString();

  //   return encodeURIComponent(str)
  //     .replace(/!/g, '%21')
  //     .replace(/'/g, '%27')
  //     .replace(/\(/g, '%28')
  //     .replace(/\)/g, '%29')
  //     .replace(/\*/g, '%2A')
  //     .replace(/%20/g, '+');
  // }
//   Settlement.http_build_query = function(formdata, numeric_prefix, arg_separator)
//   {
//     var value, key, tmp = [];
//     var _http_build_query_helper = function(key, val, arg_separator)
//     {
//       var k, tmp = [];
//       if (val === true)
//       {
//         val = '1';
//       }
//       else if (val === false)
//       {
//         val = '0';
//       }
//       if (val != null)
//       {
//         if (typeof val === 'object')
//         {
//           for (k in val)
//           {
//             if (val[k] != null)
//             {
//               tmp.push(_http_build_query_helper(
//                             key + '[' + k + ']', val[k], arg_separator));
//             }
//           }
//           return tmp.join(arg_separator);
//         }
//         else if (typeof val !== 'function')
//         {
//           return Settlement.urlencode(key) + '=' + Settlement.urlencode(val);
//         }
//         else
//         {
//           throw new Error('There was an error processing for http_build_query().');
//         }
//       }
//       else
//       {
//         return '';
//       }
//     };
//     if (!arg_separator)
//     {
//       arg_separator = '&';
//     }
//     for (key in formdata)
//     {
//       value = formdata[key];
//       if (numeric_prefix && !isNaN(key))
//       {
//         key = String(numeric_prefix) + key;
//       }
//       var query = _http_build_query_helper(key, value, arg_separator);
//       if (query !== '')
//       {
//         tmp.push(query);
//       }
//     }
//     return tmp.join(arg_separator);
//   }
//   Settlement.sprintf = function()
//   {
//     const regex = /%%|%(?:(\d+)\$)?((?:[-+#0 ]|'[\s\S])*)(\d+)?(?:\.(\d*))?([\s\S])/g
//     const args = arguments
//     let i = 0
//     const format = args[i++]
//     const _pad = function(str, len, chr, leftJustify)
//     {
//       if (!chr)
//       {
//         chr = ' '
//       }
//       const padding = (str.length >= len) ? '' : 
//                 new Array(1 + len - str.length >>> 0).join(chr)
//       return leftJustify ? str + padding : padding + str
//     }
//     const justify = function(value, prefix, leftJustify, minWidth, padChar)
//     {
//       const diff = minWidth - value.length
//       if (diff > 0)
//       {
//         // when padding with zeros
//         // on the left side
//         // keep sign (+ or -) in front
//         if (!leftJustify && padChar === '0')
//         {
//           value = [
//             value.slice(0, prefix.length),
//             _pad('', diff, '0', true),
//             value.slice(prefix.length)
//           ].join('')
//         }
//         else
//         {
//           value = _pad(value, minWidth, padChar, leftJustify)
//         }
//       }
//       return value
//     }
//     const _formatBaseX = function(value, base, 
//                                     leftJustify, minWidth, precision, padChar)
//     {
//       // Note: casts negative numbers to positive ones
//       const number = value >>> 0
//       value = _pad(number.toString(base), precision || 0, '0', false)
//       return justify(value, '', leftJustify, minWidth, padChar)
//     }
//     // _formatString()
//     const _formatString = function(value, leftJustify, 
//                                       minWidth, precision, customPadChar)
//     {
//       if (precision !== null && precision !== undefined)
//       {
//         value = value.slice(0, precision)
//       }
//       return justify(value, '', leftJustify, minWidth, customPadChar)
//     }
//     // doFormat()
//     const doFormat = function(substring, argIndex, 
//                                 modifiers, minWidth, precision, specifier)
//     {
//       let number, prefix, method, textTransform, value
//       if (substring === '%%')
//       {
//         return '%'
//       }
//       // parse modifiers
//       let padChar = ' ' // pad with spaces by default
//       let leftJustify = false
//       let positiveNumberPrefix = ''
//       let j, l
//       for (j = 0, l = modifiers.length; j < l; j++)
//       {
//         switch (modifiers.charAt(j))
//         {
//           case ' ':
//           case '0':
//             padChar = modifiers.charAt(j)
//             break
//           case '+':
//             positiveNumberPrefix = '+'
//             break
//           case '-':
//             leftJustify = true
//             break
//           case "'":
//             if (j + 1 < l)
//             {
//               padChar = modifiers.charAt(j + 1)
//               j++
//             }
//             break
//         }
//       }
//       if (!minWidth)
//       {
//         minWidth = 0
//       }
//       else
//       {
//         minWidth = +minWidth
//       }
//       if (!isFinite(minWidth))
//       {
//         throw new Error('Width must be finite')
//       }
//       if (!precision)
//       {
//         precision = (specifier === 'd') ? 0 : 
//               'fFeE'.indexOf(specifier) > -1 ? 6 : undefined
//       }
//       else
//       {
//         precision = +precision
//       }
//       if (argIndex && +argIndex === 0)
//       {
//         throw new Error('Argument number must be greater than zero')
//       }
//       if (argIndex && +argIndex >= args.length)
//       {
//         throw new Error('Too few arguments')
//       }
//       value = argIndex ? args[+argIndex] : args[i++]
//       switch (specifier)
//       {
//         case '%':
//           return '%'
//         case 's':
//           return _formatString(value + '', 
//                                       leftJustify, minWidth, 
//                                       precision, padChar)
//         case 'c':
//           return _formatString(String.fromCharCode(+value), 
//                                       leftJustify, minWidth, precision, padChar)
//         case 'b':
//           return _formatBaseX(value, 2, leftJustify, 
//                                       minWidth, precision, padChar)
//         case 'o':
//           return _formatBaseX(value, 8, leftJustify, 
//                                       minWidth, precision, padChar)
//         case 'x':
//           return _formatBaseX(value, 16, leftJustify,
//                                       minWidth, precision, padChar)
//         case 'X':
//           return _formatBaseX(value, 16, leftJustify, 
//                                       minWidth, precision, padChar).toUpperCase()
//         case 'u':
//           return _formatBaseX(value, 10, leftJustify, 
//                                       minWidth, precision, padChar)
//         case 'i':
//         case 'd':
//           number = +value || 0
//           // Plain Math.round doesn't just truncate
//           number = Math.round(number - number % 1)
//           prefix = number < 0 ? '-' : positiveNumberPrefix
//           value = prefix + _pad(String(Math.abs(number)), 
//                                         precision, '0', false)
//           if (leftJustify && padChar === '0')
//           {
//             // can't right-pad 0s on integers
//             padChar = ' '
//           }
//           return justify(value, prefix, leftJustify, minWidth, padChar)
//         case 'e':
//         case 'E':
//         case 'f': 
//         case 'F':
//         case 'g':
//         case 'G':
//           number = +value
//           prefix = number < 0 ? '-' : positiveNumberPrefix
//           method = ['toExponential', 'toFixed', 'toPrecision']['efg'.indexOf(specifier.toLowerCase())]
//           textTransform = ['toString', 'toUpperCase']['eEfFgG'.indexOf(specifier) % 2]
//           value = prefix + Math.abs(number)[method](precision)
//           return justify(value, prefix, 
//                                 leftJustify, minWidth, padChar)[textTransform]()
//         default:
//           // unknown specifier, consume that char and return empty
//           return ''
//       }
//     }
//     try
//     {
//       return format.replace(regex, doFormat)
//     }
//     catch (err)
//     {
//       return false
//     }
//   }
//   //---------------------------------
//   // kalkicode.com 
//   // These methods have not been changed by our tools.
//   // curl_init
//   // curl_setopt
//   // curl_exec
//   // curl_close
//   // json_decode
//   //----------------------------

//   // Your API Key.
//   const key = 'gK9daycB4hvyLu7b0iykkB1ARUasZDkm';
//   /*
//   * URL to scan - URL Encoded in cURL function below.
//   */
//   const URL = url;
//   // Adjustable strictness level from 0 to 2. 0 is the least strict and recommended for most use cases. Higher strictness levels can increase false-positives.
//   const strictness = 0;
//   // Create parameters array.
//   const parameters = {'strictness':strictness};
//   // Format Parameters
//   const formatted_parameters = Settlement.http_build_query(parameters);
//   // Create API URL
//   url = Settlement.sprintf('https://www.ipqualityscore.com/api/json/url/%s/%s?%s', key, Settlement.urlencode(URL), formatted_parameters);
//   // Fetch The Result
//   const timeout = 5;
//   // curl = curl_init();
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', url, false);
//   xhr.setRequestHeader('Content-Type', 'application/json');
//   xhr.setRequestHeader('Accept', 'application/json');
//   xhr.send();

//   // curl_setopt(curl, CURLOPT_URL, url);
//   // curl_setopt(curl, CURLOPT_RETURNTRANSFER, 1);
//   // curl_setopt(curl, CURLOPT_FOLLOWLOCATION, 1);
//   // curl_setopt(curl, CURLOPT_CONNECTTIMEOUT, timeout);
//   // json = curl_exec(curl);
//   // curl_close(curl);
//   // Decode the result into an array.
//   const result = json_decode(json, true);
//   // Check to see if our query was successful.
//   if (typeof result['success'] !== 'undefined' && result['success'] === true) {
//       // NOTICE: If you want to use one of the examples below, remove
//       // any lines containing /*, */ and *-, then remove * from any of the
//       // the remaining lines.
//       /*
//       *- Example 1: Identify suspicious URLs regardless of Risk Score
//       * 
//       * if($result['suspicious'] === true){
//       *	// flag suspicious URL
//       * }
//       */
//       /*
//       *- Example 2: We'd like to block all malicious URLs suspected of being used for phishing or malware
//       *
//       * if($result['phishing'] === true || $result['malware'] === true || $result['risk_score'] > 85){
//       *	// flag high risk URLs likely to be malicious
//       * }
//       */
//       /*
//       *- Example 3: We'd like to block all links on parked domains
//       *
//       * if($result['parking'] === true){
//       *	// flag parked domains
//       * }
//       */
//       /*
//       * If you are confused with these examples or simply have a use case
//       * not covered here, please feel free to contact IPQualityScore's support
//       * team. We'll craft a custom piece of code to meet your requirements.
//       */
//   }
// }
