var score = require("scripts/object/score");
var scoreNumber = 0;
    exports.initScore = function(){
        scoreNumber = 0;
    };

exports.changeScore = function(flag){
    if(flag == 1){
        score.number(++scoreNumber);
    } else if(flag == 2){
        score.number(--scoreNumber);
    } else{
        return scoreNumber;
    }
};
