
import Destino from '#models/destino'
import type { HttpContext } from '@adonisjs/core/http'

export default class DestinosController {
  public async index ({ response }: HttpContext) {
    const destinos = await Destino.all()
    return response.json(destinos)
  }

  public async store ({ request, response }: HttpContext) {
    const data = request.only(['nome', 'descricao'])
    const destino = await Destino.create(data)
    return response.json(destino)
  }

  public async show ({ params, response }: HttpContext) {
    const destino = await Destino.findOrFail(params.id)
    return response.json(destino)
  }

  public async update ({ params, request, response }: HttpContext) {
    const destino = await Destino.findOrFail(params.id)
    const data = request.only(['nome', 'descricao'])
    destino.merge(data)
    await destino.save()
    return response.json(destino)
  }

  public async destroy ({ params, response }: HttpContext) {
    const destino = await Destino.findOrFail(params.id)
    await destino.delete()
    return response.json({ message: 'Destino deletado com sucesso' })
  }
}
