
const routes = (app) => {

    app.route('/contact')
    .get((req, res, next) => {
        // this is the middleware
        console.log(`Request from: ${req.originalUrl}`);
        console.log(`Request type: ${req.method}`);
        next();
    }, (req, res, next) => {
        console.log('this is my another middleware');
        next();
    }, (req, res) => {
        res.send('GET request successful');
    })

    .post((req, res) => {
        res.send('POST request successful');
    });

    app.route('/contact/:contact_id')
    .put((req, res) => {
        res.send('PUT request successful');
    })

    .delete((req, res) => {
        res.send('DELETE request successful');
    })
}

export default routes;