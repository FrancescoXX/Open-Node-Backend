exports.getVersion = (req, res, next) => {
    console.log('VERSION 0.0.1');
    res.status(200).json({
        version: "Version 0.0.1"
    })
};