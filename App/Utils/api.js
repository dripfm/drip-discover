var api = {
  getDrip(dripId){
    var url = `http://drip.com/api/creatives/${dripId}`;
    return fetch(url).then((res) => res.json())
  },
  getFeed(dripId){
    var url = `http://drip.com/api/creatives/${dripId}/feed`;
    return fetch(url).then((res) => res.json())
  },
  getPosts(dripId){
    var url = `http://drip.com/api/creatives/${dripId}/posts`;
    return fetch(url).then((res) => res.json())
  },
  signIn(email, password){
    fetch(`http://localhost:8080/api/users/logout`)
    var url = `http://localhost:8080/api/users/login`;
    return fetch(
      url,
      {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password,
        })
      }
    )
    .then((res) => res.json())
  },
};

module.exports = api;