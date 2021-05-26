import Hapi from '@hapi/hapi';

const start = async()=>{
    const server = Hapi.server({
        port: 8000,
        host: 'localhost',
    });

    server.route({
        method: 'GET',
        path: '/hello',
        handler: (req, h)=>{
            return 'Hello!';
            //return res.response('Hello!').code(201); //Just a demo for sending your own status code
        }
    });

    await server.start();
    console.log(`Server is listning on ${server.info.uri}`);
}

process.on('unhandledRejection', err=>{
    console.log(err);
    process.exit(1);
});

start();