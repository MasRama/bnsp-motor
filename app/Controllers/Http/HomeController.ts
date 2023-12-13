// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class HomeController {
  public async index({ view, request }) {
    return view.render('home', { page: request.url() })
  }
}
