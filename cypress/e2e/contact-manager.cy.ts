describe('Contact Manager', () => {
    const storageKey = 'contact-manager:contacts'

    const resetContacts = () => {
        cy.visit('/', {
            onBeforeLoad(window) {
                window.localStorage.setItem(storageKey, '[]')
            }
        })
    }

    const addContact = (
        name: string,
        email: string,
        phone: string
    ) => {
        cy.contains('button', 'Add new contact').click()

        cy.url().should('include', '/novo')

        cy.get('#name').type(name)
        cy.get('#email').type(email)
        cy.get('#phone').type(phone)

        cy.contains('button', 'Save contact').click()

        cy.url().should('eq', `${Cypress.config('baseUrl')}/`)
    }

    beforeEach(() => {
        resetContacts()
    })

    it('loads the contact manager successfully', () => {
        cy.contains('Contact Manager').should('be.visible')
        cy.contains('People').should('be.visible')
        cy.contains('Your contact list is empty').should('be.visible')
        cy.contains('saved contacts').should('be.visible')
        cy.contains('0 results').should('be.visible')
    })

    it('creates and persists a new contact', () => {
        addContact(
            'Alex Morgan',
            'Alex.Morgan@Example.com',
            '21987654321'
        )

        cy.contains('Alex Morgan').should('be.visible')
        cy.contains('alex.morgan@example.com').should('be.visible')
        cy.contains('(21) 98765-4321').should('be.visible')

        cy.window().then((window) => {
            const storedContacts = JSON.parse(
                window.localStorage.getItem(storageKey) || '[]'
            )

            expect(storedContacts).to.have.length(1)
            expect(storedContacts[0].nome).to.equal('Alex Morgan')
            expect(storedContacts[0].email).to.equal(
                'alex.morgan@example.com'
            )
            expect(storedContacts[0].telefone).to.equal(
                '(21) 98765-4321'
            )
        })

        cy.reload()

        cy.contains('Alex Morgan').should('be.visible')
    })

    it('validates invalid contact data', () => {
        cy.contains('button', 'Add new contact').click()

        cy.get('#name').type('A')
        cy.get('#email').type('invalid-email')
        cy.get('#phone').type('123')

        cy.contains('button', 'Save contact').click()

        cy.contains('Enter at least 2 characters.').should('be.visible')
        cy.contains('Enter a valid email address.').should('be.visible')
        cy.contains('Enter a valid phone number.').should('be.visible')

        cy.url().should('include', '/novo')
    })

    it('searches contacts by name', () => {
        addContact(
            'Alex Morgan',
            'alex@example.com',
            '21987654321'
        )

        cy.contains('button', 'Add new contact').click()

        cy.get('#name').type('Taylor Reed')
        cy.get('#email').type('taylor@example.com')
        cy.get('#phone').type('11912345678')

        cy.contains('button', 'Save contact').click()

        cy.get('[aria-label="Search contacts"]').type('Taylor')

        cy.contains('Taylor Reed').should('be.visible')
        cy.contains('Alex Morgan').should('not.exist')
        cy.contains('1 result').should('be.visible')

        cy.get('[aria-label="Clear search"]').click()

        cy.contains('Alex Morgan').should('be.visible')
        cy.contains('Taylor Reed').should('be.visible')
        cy.contains('2 results').should('be.visible')
    })

    it('edits an existing contact', () => {
        addContact(
            'Alex Morgan',
            'alex@example.com',
            '21987654321'
        )

        cy.contains('button', 'Edit contact').click()

        cy.get('input[type="text"]')
            .clear()
            .type('Alex Johnson')

        cy.get('input[type="email"]')
            .clear()
            .type('alex.johnson@example.com')

        cy.get('input[type="tel"]')
            .clear()
            .type('21999998888')

        cy.contains('button', 'Save changes').click()

        cy.contains('Alex Johnson').should('be.visible')
        cy.contains('alex.johnson@example.com').should('be.visible')
        cy.contains('(21) 99999-8888').should('be.visible')

        cy.contains('Alex Morgan').should('not.exist')
    })

    it('removes an existing contact', () => {
        addContact(
            'Alex Morgan',
            'alex@example.com',
            '21987654321'
        )

        cy.on('window:confirm', (message) => {
            expect(message).to.equal(
                'Remove Alex Morgan from your contacts?'
            )

            return true
        })

        cy.contains('button', 'Remove').click()

        cy.contains('Alex Morgan').should('not.exist')
        cy.contains('Your contact list is empty').should('be.visible')

        cy.window().then((window) => {
            const storedContacts = JSON.parse(
                window.localStorage.getItem(storageKey) || '[]'
            )

            expect(storedContacts).to.have.length(0)
        })
    })
})