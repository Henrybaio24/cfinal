const { Router } = require('express');

const compra = require('../controllers/compra');
const horario = require('../controllers/horario');
const pelicula = require('../controllers/pelicula');
const persona = require('../controllers/persona');
const sala = require('../controllers/salaCRUD');
const sala_pelicula = require('../controllers/sala_pelicula');
const raw = require('../controllers/raw_CRUD');

const router = Router();

router.get('/', (req, res) => res.send('Bienvenido'))


router.get('/compra', compra.getData);
router.post('/compra', compra.postData);
router.put('/compra', compra.putData);
router.delete('/compra', compra.deleteData);

router.get('/horario', horario.getData);
router.post('/horario', horario.postData);
router.put('/horario', horario.putData);
router.delete('/horario', horario.deleteData);

router.get('/pelicula', pelicula.getData);
router.post('/pelicula', pelicula.postData);
router.put('/pelicula', pelicula.putData);
router.delete('/pelicula', pelicula.deleteData);

router.get('/persona', persona.getData);
router.post('/persona', persona.postData);
router.put('/persona', persona.putData);
router.delete('/persona', persona.deleteData);

router.get('/sala', sala.getData);
router.post('/sala', sala.postData);
router.put('/sala', sala.putData);
router.delete('/sala', sala.deleteData);

router.get('/sala_pelicula', sala_pelicula.getData);
router.post('/sala_pelicula', sala_pelicula.postData);
router.put('/sala_pelicula', sala_pelicula.putData);
router.delete('/sala_pelicula', sala_pelicula.deleteData);


router.get('/raw1', raw.raw1);
router.get('/raw2', raw.raw2);
router.get('/raw3', raw.raw3);
router.get('/raw4', raw.raw4);

module.exports = router;
