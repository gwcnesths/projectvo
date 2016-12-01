/*
*  Define API routes here
*
*/

const router = require('express').Router();

// GET example
router.get('/api/test/:token', function (req, res) {

    var token = req.params.token

    console.log( token );

    res.json({
        token: token
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