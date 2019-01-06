module.exports = function(appliction){
    appliction.get('/', function(req,res){
        appliction.app.controllers.home.index(appliction, req, res);
    });
}