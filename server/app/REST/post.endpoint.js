import business from '../business/business.container';
const postEndpoint = (router) => {
    router.get('/api/posts', async (request, response, next) => {
        try {
            let result = await business.getPostManager().query();
            response.status(200).send(result);
        } catch (error) {
            console.log(error);
        }
    });
    router.get('/api/posts/:id', async (request, response, next) => {
        try {
            let result = await business.getPostManager().get(request.params.id);
            response.status(200).send(result);
        } catch (error) {
            console.log(error);
        }
    });
    router.post('/api/posts/add', async (request, response, next) => {
        try {
            console.log(request.body);
            let result = await business.getPostManager().createNewOrUpdate(request.body);
            response.status(200).send(result);
        } catch (error) {
            console.log(error);
        }
    });
};

export default postEndpoint;
