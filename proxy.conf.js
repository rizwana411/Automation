
var HttpsProxyAgent = require('https-proxy-agent');
var proxyConfig = [{
  context: '/cmp/api/*',
  target: 'https://webportal.ntt.com.sg',
  pathRewrite:{"/cmp/api/":"/cmp/basic/api/"},
  headers: {
    "Authorization": "Basic ZGQtc3RhZ2luZy1wYXJ0bmVyLWtleTpqQ1BeR05BYzJ4QUBAQA=="
    },
   secure: true,
  changeOrigin:true
},
{
  context: '/cmp/api/global/stackstorm-dd/',
  target: 'https://webportal.ntt.com.sg',
  pathRewrite:{"/cmp/api/global/stackstorm-dd/":"/cmp/basic/api/global/stackstorm-dd/"},
  headers: {
    "Authorization": "Basic ZGQtc3RhZ2luZy1wYXJ0bmVyLWtleTpqQ1BeR05BYzJ4QUBAQA=="
    },
   secure: true,
  changeOrigin:true
},
{
  context: '/static/cmp/*',
  target: 'https://webportal.ntt.com.sg',
  secure: true,
  changeOrigin:true
}];

function setupForCorporateProxy(proxyConfig) {
  var proxyServer = process.env.http_proxy || process.env.HTTP_PROXY;
  if (proxyServer) {
    var agent = new HttpsProxyAgent(proxyServer);
    console.log('Using corporate proxy server: ' + proxyServer);
    proxyConfig.forEach(function(entry) {
      entry.agent = agent;
    });
  }
  return proxyConfig;
}

module.exports = setupForCorporateProxy(proxyConfig);