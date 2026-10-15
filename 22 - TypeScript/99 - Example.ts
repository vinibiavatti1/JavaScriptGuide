/**
 * Example.ts
 * A clean compilation playground for testing TypeScript features. Run "npx tsc" in this directory,
 * and check the generated .js file in .dist folder.
 */

enum Role {
    Admin = 'ADMIN',
    User = 'USER'
}

const enum Status {
    Active = 1,
    Inactive = 0
}

interface User {
    readonly id: string
    name: string
    role: Role
}

type UserProfile = Pick<User, 'name' | 'role'>

const CONFIG = {
    endpoint: '/api',
    timeout: 3000
} as const

interface Identifiable {
    id: string
}

function findById<T extends Identifiable>(items: T[], id: string): T | undefined {
    return items.find(item => item.id === id)
}

function parse(value: string): string
function parse(value: number): number
function parse(value: string | number): string | number {
    return value
}

const users: User[] = [
    { id: '1', name: 'Alice', role: Role.Admin }
]

const found = findById(users, '1')
console.log(found, Status.Active, CONFIG.timeout, parse(100))

export { }
