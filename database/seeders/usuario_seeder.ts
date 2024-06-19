import Usuario from '#models/usuario'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class UsuarioSeeder extends BaseSeeder {
  public async run () {
    await Usuario.createMany([
      {
        nome: 'John Doe',
        email: 'john@example.com',
        senha: 'password123',
      },
      {
        nome: 'Jane Smith',
        email: 'jane@example.com',
        senha: 'password123',
      },
    ])
  }
}
