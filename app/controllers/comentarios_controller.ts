
import Comentario from '#models/comentario'
import type { HttpContext } from '@adonisjs/core/http'

export default class ComentariosController {
  public async index ({ response }: HttpContext) {
    const comentarios = await Comentario.query().preload('usuario').preload('viagem')
    return response.json(comentarios)
  }

  public async store ({ request, response }: HttpContext) {
    const data = request.only(['usuario_id', 'viagem_id', 'comentario'])
    const comentario = await Comentario.create(data)
    return response.json(comentario)
  }

  public async show ({ params, response }: HttpContext) {
    const comentario = await Comentario.query().where('id', params.id).preload('usuario').preload('viagem').firstOrFail()
    return response.json(comentario)
  }

  public async update ({ params, request, response }: HttpContext) {
    const comentario = await Comentario.findOrFail(params.id)
    const data = request.only(['usuario_id', 'viagem_id', 'comentario'])
    comentario.merge(data)
    await comentario.save()
    return response.json(comentario)
  }

  public async destroy ({ params, response }: HttpContext) {
    const comentario = await Comentario.findOrFail(params.id)
    await comentario.delete()
    return response.json({ message: 'Comentário deletado com sucesso' })
  }
}
