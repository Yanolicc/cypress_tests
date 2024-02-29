describe('template spec', () => {
  it('Вход на сайт через URL', () => {
    cy.visit('https://coffee-cart.app/')
  })
  it('Добавить товар по акции в корзину', () => {
    cy.visit('https://coffee-cart.app/')
    cy.get('.cup[data-v-400a88f7]:first').click()
    cy.get('.cup[data-v-400a88f7]:first').click()
    cy.get('.cup[data-v-400a88f7]:first').click()
    cy.get('.yes').click()
  })
  it('Получить чек об оплате', () => {
    const name = 'Yana';
    const email = 'yana@mail.com';
    cy.visit('https://coffee-cart.app/')
    cy.get('.cup[data-v-400a88f7]:first').click()
    cy.get('.pay').click()
    cy.get('input[type="text"]').type(`${name}{enter}`)
    cy.get('input[type="email"]').type(`${email}{enter}`)
  })
  it('Добавить все товары в корзину', () => {
    cy.visit('https://coffee-cart.app/')
    cy.get('.cup[data-v-400a88f7]').click({ multiple: true })
  })
  it('Добавить 10 товаров, а потом удалить 1', () => {
    cy.visit('https://coffee-cart.app/')
    cy.get('.cup[data-v-400a88f7]:first').click()
    cy.get('a[href="/cart"]').click()
    cy.get('.unit-controller button[data-v-8965af83]:first').click()
    cy.get('.unit-controller button[data-v-8965af83]:first').click()
    cy.get('.unit-controller button[data-v-8965af83]:first').click()
    cy.get('.unit-controller button[data-v-8965af83]:first').click()
    cy.get('.unit-controller button[data-v-8965af83]:first').click()
    cy.get('.unit-controller button[data-v-8965af83]:first').click()
    cy.get('.unit-controller button[data-v-8965af83]:first').click()
    cy.get('.unit-controller button[data-v-8965af83]:first').click()
    cy.get('.unit-controller button[data-v-8965af83]:first').click()
    cy.get('.unit-controller button[data-v-8965af83]:nth-child(2)').click()
  })
  it('удалить товар из корзины', () => {
    cy.visit('https://coffee-cart.app/')
    cy.get('.cup[data-v-400a88f7]:first').click()
    cy.get('a[href="/cart"]').click()
    cy.get('.delete[data-v-8965af83]').click()
  })
})