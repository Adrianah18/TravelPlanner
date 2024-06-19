/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import ComentariosController from '#controllers/comentarios_controller'
import DestinosController from '#controllers/destinos_controller'
import ReservasController from '#controllers/reservas_controller'
import UsuariosController from '#controllers/usuarios_controller'
import ViagensController from '#controllers/viagens_controller'
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.resource('/viagem', ViagensController).apiOnly()
router.resource('/destinos', DestinosController).apiOnly()
router.resource('/reservas', ReservasController).apiOnly()
router.resource('/usuarios', UsuariosController).apiOnly()
router.resource('/comentarios', ComentariosController).apiOnly()



