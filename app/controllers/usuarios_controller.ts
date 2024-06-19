
import Usuario from '#models/usuario'
import type { HttpContext } from '@adonisjs/core/http'

export default class UsuariosController {
  public async index ({ response }: HttpContext) {
    const usuarios = await Usuario.all()
    return response.json(usuarios)
  }

  public async store ({ request, response }: HttpContext) {
    const data = request.only(['nome', 'email', 'senha'])
    const usuario = await Usuario.create(data)
    return response.json(usuario)
  }

  public async show ({ params, response }: HttpContext) {
    const usuario = await Usuario.findOrFail(params.id)
    return response.json(usuario)
  }

  public async update ({ params, request, response }: HttpContext) {
    const usuario = await Usuario.findOrFail(params.id)
    const data = request.only(['nome', 'email', 'senha'])
    usuario.merge(data)
    await usuario.save()
    return response.json(usuario)
  }

  public async destroy ({ params, response }: HttpContext) {
    const usuario = await Usuario.findOrFail(params.id)
    await usuario.delete()
    return response.json({ message: 'Usuário deletado com sucesso' })
  }
}
