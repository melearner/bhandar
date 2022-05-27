const http = require('http')
const url = "http://localhost:5000/";
function apicall(){
http.get(url, res => {
  let data = '';
  res.on('data', chunk => {
    data += chunk;
  });
  res.on('end', () => {
    data = JSON.parse(data);
    window.alert('success');
  })
}).on('error', err => {
  console.log(err.message);
})}