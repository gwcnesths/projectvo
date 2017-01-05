/*
*  Define API routes here
*
*/

const router = require('express').Router();

var Cloudant = require('cloudant');


// GET All Volunteering Opportunities
router.get('/api/volunteer', function (req, res) {
    var cloudant = Cloudant({account:process.env.CLOUDANT_ACCOUNT,
                             key: process.env.CLOUDANT_API_KEY,
                             password:process.env.CLOUDANT_API_SECRET }
        ,function(err, cloudant) {
            if (err) {
                console.log('Failed to initialize Cloudant: ' + err.message);
            }
    });

    var db = cloudant.db.use("projectvo");


    db.list({include_docs:true}, function (err, data) {

        var opportunities = [];
        for ( p in data.rows ){
            var doc = data.rows[p].doc;
            if( doc.kind && doc.kind == 'suggestions'){
                wishlists.push(doc);
            }
        }
        res.json({
            list: opportunities
        });
    });

    

    res.json({
        id: 'hello'
    });
});


// GET A Specific Volunteering Opportunity
router.get('/api/volunteer/:id', function (req, res) {

    var id = req.params.id
    console.log( req.params );



//         db.get( client_id, function (err, doc) {        
//             var response = { 
//                 wishlistid: wishlist_id, 
//                 clientid: client_id,
//                 doc: {
//                     _id: client_id,
//                     wishlistid: wishlist_id,
//                     avatarid: 1,
//                     kind: 'suggestions',
//                     items: []
//                 }
//             }
//             if( doc != undefined ){
//                 response.doc = doc;
//             }
//             res.json(response);
//         });


//  db.insert(req.body.doc, function(err, body) {
//             if (err){
//                 console.log( req.params);
//                 console.log( req.body.doc );
//                 console.log(err);
//             }
//             else{
//                 // update with the new revision
//                 req.body.doc._rev = body.rev;
//                 res.json(req.body)
//                 var socketio = req.app.get('socketio'); // tacke out socket instance from the app container
//                 socketio.sockets.emit('wishlist.updated', req.body.doc );
//             }
//         });

    res.json({
        id: id
    });


});


// GET, POST example
router.route('/api/posttest/:clientid')
    .get( function (req, res) {
        console.log( req.params);
        
        var clientid = req.params.clientid;
        res.json({ clientid: clientid });
    })
    .post( function(req, res){

        console.log( req.params);
        console.log( req.body );
        
        // get socket instance from the app container
        var socketio = req.app.get('socketio'); 
        socketio.sockets.emit('wishlist.updated', req.body.doc );
    });


function methodNotAllowed(req, res) {
    res.status(405).json({error: {message: 'Method not allowed'}});
}

module.exports = router;