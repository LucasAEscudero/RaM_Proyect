const { describe } = require('test');
const app = require('../app.js');
const request = require('supertest');
const agent = request(app);

describe('test de RUTAS', () => {

    describe('GET /rickandmorty/character/:id', () => {

        it('Responde con status: 200', async () => {
            const res = await agent.get('/rickandmorty/character/1');
            expect(res.statusCode).toBe(200);
        });

        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"',
            async () => {
            const res = await agent.get('/rickandmorty/character/1');
            const props = ['id', 'name', 'species', 'gender', 'status', 'origin', 'image'];
            
            props.forEach(prop => {
                expect(res.body).toHaveProperty(prop);
            });
        });

        it('Si hay un error responde con status: 500', async () => {
            const res = await agent.get('/rickandmorty/character/0');
            expect(res.statusCode).toBe(500);
        });
    });

    describe('GET /rickandmorty/login', () => {

        it('Si se pasan los datos correctos, responde con un objeto { access: true }', async () => {
            const res = await agent.get('/rickandmorty/login/?email=gmail@gmail.com&password=pass123');
            expect(res.body).toHaveProperty('access', true);
        });

        it('Si se pasan los datos incorrectos, responde con un objeto { access: false }', async () => {
            const res = await agent.get('/rickandmorty/login/?email=hola@gmail.com&password=pa12356');
            expect(res.body).toHaveProperty('access', false);
        });

    });

    describe('POST /rickandmorty/fav', () => {
        
        it('Lo que se envia por body debe ser devuelto en un array', async () => {
            const res = await agent.post('/rickandmorty/favorites')
            .send({ 
                    id: 1000,
                    name: 'Rick',
                    status: 'Alive',
                    gender: 'Male',
                    origin: { name: 'Earth' },
                    species: 'Human',
                    image: 'imageRick.jpg' 
                });
            expect(res.body).toBe(1);

            const res2 = await agent.post('/rickandmorty/favorites').send({ 
                id: 1001,
                name: 'Morty',
                status: 'Alive',
                gender: 'Male',
                origin: { name: 'Earth' },
                species: 'Human',
                image: 'imageMorty.jpg' 
            });
            expect(res2.body.length).toBe(2);
        });
    });

    describe('DELETE /rickandmorty/fav/:id', () => {
        //carga del array
        // agent.post('/rickandmorty/favorites').send({ id: 1 });
        // agent.post('/rickandmorty/favorites').send({ id: 2 });

        it('Devuelve el mismo array si el ID no coincide con el de ningun personaje', async () => {
            const res = agent.delete('/rickandmorty/favorites/5')
            expect(res.body).toBe(2);
        });

        it('Devuelve un array con todos los personajes previos, a excepcion del mandado por ID', async () => {
            const res = agent.delete('/rickandmorty/favorites/1')
            expect(res.body).toBe(1);
        });
    });
});