import Viagem from '#models/viagem'
import type { HttpContext } from '@adonisjs/core/http'

export default class ViagensController {
public async index ({ response }: HttpContext) {
const viagens = await Viagem.query().preload('usuario').preload('destino')
return response.json(viagens)
}

public async store ({ request, response }: HttpContext) {
const data = request.only(['usuario_id', 'destino_id', 'data_inicio', 'data_fim'])
const viagem = await Viagem.create({
usuarioId: data.usuario_id,
destinoId: data.destino_id,
dataInicio: new Date(data.data_inicio),
dataFim: new Date(data.data_fim)
})
return response.json(viagem)
}

public async show ({ params, response }: HttpContext) {
const viagem = await Viagem.query().where('id', params.id).preload('usuario').preload('destino').firstOrFail()
return response.json(viagem)
}

public async update ({ params, request, response }: HttpContext) {
const viagem = await Viagem.findOrFail(params.id)
const data = request.only(['usuario_id', 'destino_id', 'data_inicio', 'data_fim'])
viagem.merge({
usuarioId: data.usuario_id,
destinoId: data.destino_id,
dataInicio: new Date(data.data_inicio),
dataFim: new Date(data.data_fim)
})
await viagem.save()
return response.json(viagem)
}

public async destroy ({ params, response }: HttpContext) {
const viagem = await Viagem.findOrFail(params.id)
await viagem.delete()
return response.json({ message: 'Viagem deletada com sucesso' })
}
}