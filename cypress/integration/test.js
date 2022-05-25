describe('Mid Mod tests', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations',
      {
        statusCode: 200,
        body: [
            {
              id: 1,
              name: "Christie",
              date: "12/29",
              time: "7:00",
              number: 12
            },
            {
              id: 2,
              name: "Leta",
              date: "4/5",
              time: "7:00",
              number: 2
            },
            {
              id: 3,
              name: "Pam",
              date: "1/21",
              time: "6:00",
              number: 4
            },
            {
              id: 4,
              name: "Khalid",
              date: "5/9",
              time: "7:30",
              number: 7
            },
            {
              id: 5,
              name: "Will",
              date: "5/15",
              time: "6:30",
              number: 2
            },
        ]
    })
    cy.visit('http://localhost:3000/')
  })
  it('Should have a title', () => {
    cy.get('.app-title').contains('Turing Cafe Reservations')
  })

  it('User should see 5 reservation preview cards', () => {
    cy.get('.reservations-container').contains('Christie')
    cy.get('.reservations-container').contains('Leta')
    cy.get('.reservations-container').contains('Pam')
    cy.get('.reservations-container').contains('Khalid')
    cy.get('.reservations-container').contains('Will')
  })
  it('Reservation preview card should show information', () => {
    cy.get('div #3').contains('Pam')
    cy.get('div #3').contains('1/21')
    cy.get('div #3').contains('6:00 pm')
    cy.get('div #3').contains('Number of guests: 4')


  })

  it('should have a live form', () => {
    cy.get('form > .name-input').type('Harold')
    cy.get('form > .name-input').should('have.value','Harold')
    cy.get('form > .date-input').type('5/30')
    cy.get('form > .date-input').should('have.value','5/30')
    cy.get('form > .time-input').type('5:45')
    cy.get('form > .time-input').should('have.value','5:45')
    cy.get('form > .number-input').type('4')
    cy.get('form > .number-input').should('have.value','4')
  })
})


/*
Now that the functionality is there for adding a reservation, write some tests:

Write tests covering what should be displayed on the page when the user first visits.
Write a test that checks that when data is put into the form, the value is reflected in that form input.
Write a test to check the user flow of adding a new reservation to the page.
*/
