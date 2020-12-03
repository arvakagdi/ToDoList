//jshint esversion:6

exports.getDate = function(){   //export is use to make modules available to other modules
    const today = new Date();   
    const options= {      // options for getting date in different format
        weekday:"long",
        day: "numeric",
        month: "long"
    };

    return today.toLocaleString("en-US", options); // converting date to string formate using options
};