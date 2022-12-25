const notFoundHandler = (req, res, next) => {
    res.status(404).json({
        message: 'this route is not exist'
    });
};

module.exports = {
    notFoundHandler
};