const request = require('request');
const btoa = require('btoa');

module.exports = {
    twGet,
};

function twGet(hashtag) {
    tag = encodeURIComponent(hashtag);
    const consumerKey = 'wXrgxNLBhrsV45wbxx3agovCb';
    const consumerSecret = 'W1wLvdQEv0zwimP8jBhjMFVt5JMhPurpgwMQErm1bVEEGsuZpW';

    const key = btoa(consumerKey + ':' + consumerSecret);
    const reqOptions = {
        url: 'https://api.twitter.com/oauth2/token',
        method: 'POST',
        json: true,
        headers: {
            'Authorization': 'Basic ' + key,
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        qs: {
            grant_type: 'client_credentials'
        }
    };
    return new Promise((resolve, reject) => {
        request(reqOptions, (err, res) => {
            if (!err) {
                const token = res.body.access_token;
                const reqOptions = {
                    url: 'https://api.twitter.com/1.1/search/tweets.json',
                    method: 'GET',
                    json: true,
                    headers: {
                        'Authorization': 'Bearer ' + token
                    },
                    qs: {
                        q: tag,
                        count: 50
                    }
                };
                request(reqOptions, (err, res) => {
                    if (!err) {
                        resolve(res.body);
                    } else {
                        reject(err);
                    }
                });
            } else {
                reject(err);
            }
        });
    });
}
