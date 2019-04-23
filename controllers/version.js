exports.getVersion = (req, res, next) => {
    var v = "Version 0.0.2"
    console.log(v);
    res.status(200).json({
        version: v
    })
};