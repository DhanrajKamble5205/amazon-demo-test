import {Page} from '@playwright/test'
import { StripTypeScriptTypesOptions } from 'module'

export class LoginPage {
    readonly page:Page
    log_username: any // this is a type of value, now it can access any type of value
    log_password: any
    log_button: any

    constructor(page:Page) { // declare the constructor to access class properties.
        this.page = page
        this.log_username = page.getByRole('textbox', { name: 'Username' }) // locator element
        this.log_password = page.getByRole('textbox', { name: 'Password' })
        this.log_button = page.getByRole('button', { name: ' Login' })
    }

    async login_url(){
        await this.page.goto('https://the-internet.herokuapp.com/login');
    }
    async login(username: String, password: any){ // create instance of the object and passing the value
        await this.log_username.fill(username)
        await this.log_password.fill(password)
        await this.log_button.click()
    }
}