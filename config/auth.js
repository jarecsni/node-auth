module.exports = {

    // TODO hosts and ports are hardcoded, needs fixing
    'facebookAuth' : {
        'clientID'      : '341567182697899', // your App ID
        'clientSecret'  : '3c2b03ee1e763e9ff5ecb3370cae1ed3', // your App Secret
        'callbackURL'   : 'http://localhost:3000/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'fJF5KbO7TpJAM3XunLbeu9zUl',
        'consumerSecret'    : 'W4Xp5XOXlFsAE9JHZ8m3beFsztPj2J9Z9K4G4j0PeTx1oMzvBf',
        'callbackURL'       : 'http://localhost:3000/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : 'your-secret-clientID-here',
        'clientSecret'  : 'your-client-secret-here',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};