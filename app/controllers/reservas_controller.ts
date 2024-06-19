
import Reserva from '#models/reserva'
import type { HttpContext } from '@adonisjs/core/http'

export default class ReservasController {
  public async index ({ response }: HttpContext) {
    const reservas = await Reserva.query().preload('viagem')
    return response.json(reservas)
  }

  public async store ({ request, response }: HttpContext) {
    const data = request.only(['viagem_id', 'descricao'])
    const reserva = await Reserva.create(data)
    return response.json(reserva)
  }

  public async show ({ params, response }: HttpContext) {
    const reserva = await Reserva.query().where('id', params.id).preload('viagem').firstOrFail()
    return response.json(reserva)
  }

  public async update ({ params, request, response }: HttpContext) {
    const reserva = await Reserva.findOrFail(params.id)
    const data = request.only(['viagem_id', 'descricao'])
    reserva.merge(data)
    await reserva.save()
    return response.json(reserva)
  }

  public async destroy ({ params, response }: HttpContext) {
    const reserva = await Reserva.findOrFail(params.id)
    await reserva.delete()
    return response.json({ message: 'Reserva deletada com sucesso' })
  }
}
