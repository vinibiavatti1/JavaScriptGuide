/**
 * Example.ts
 * A clean compilation playground for testing TypeScript features. Run "npx tsc" in this directory,
 * and check the generated .js file in .dist folder.
 */
var Role;
(function (Role) {
    Role["Admin"] = "ADMIN";
    Role["User"] = "USER";
})(Role || (Role = {}));
const CONFIG = {
    endpoint: '/api',
    timeout: 3000
};
function findById(items, id) {
    return items.find(item => item.id === id);
}
function parse(value) {
    return value;
}
const users = [
    { id: '1', name: 'Alice', role: Role.Admin }
];
const found = findById(users, '1');
console.log(found, 1 /* Status.Active */, CONFIG.timeout, parse(100));
export {};
