'use strict'

const contentful = require('contentful');

module.exports = {

    // Returns page content to the autheictedRoutes file when it is called
    getContent : function(conSpace, conToken, id) {
        console.log('Getting page content from Contentful');
        
        var contentfulClient = contentful.createClient({
            space: conSpace,
            accessToken: conToken
        })

        return new Promise( (fulfill, reject) => {
            contentfulClient.getEntries({
                'sys.id' : id,
                include : 5
            }).then( (entries) => {
                // Content sent to page .items[0]
                fulfill(entries.items[0]);
            }).catch( (error) => {
                console.log('An error has occurred');
                reject(error);
            })
        })
    }
}