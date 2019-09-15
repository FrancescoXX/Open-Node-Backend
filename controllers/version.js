exports.getVersion = (req, res, next) => {
    var v = "Version 0.0.5"
    console.log(v);
    res.status(200).json({
        version: v
    })
};

exports.getInfo = (req, res, next) => {
    res.status(200).json({
        info: "added players get all"
    })
};