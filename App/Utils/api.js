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
  }
};

module.exports = api;