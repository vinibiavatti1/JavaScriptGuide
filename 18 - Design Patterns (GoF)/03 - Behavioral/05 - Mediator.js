/**
 * Mediator
 *
 * Defines an object that encapsulates how a set of objects interact, preventing components from
 * referencing each other explicitly. In JavaScript, we can implement this functionally by passing
 * a central mediator closure or message hub to component factories.
 *
 * Output:
 * Alice sends: Hello everyone!
 * Bob received: Hello everyone!
 * Charlie received: Hello everyone!
 */
const createChatMediator = () => {
    const colleagues = []
    return {
        register: (colleague) => {
            colleagues.push(colleague)
        },
        send: (sender, message) => {
            console.log(sender.name + ' sends: ' + message)
            for (const colleague of colleagues) {
                if (colleague !== sender) {
                    colleague.receive(message)
                }
            }
        }
    }
}
const createColleague = (name, mediator) => {
    const colleague = {
        name,
        send: (message) => mediator.send(colleague, message),
        receive: (message) => console.log(name + ' received: ' + message)
    }
    mediator.register(colleague)
    return colleague
}
const mediator = createChatMediator()
const alice = createColleague('Alice', mediator)
const bob = createColleague('Bob', mediator)
const charlie = createColleague('Charlie', mediator)
alice.send('Hello everyone!')
