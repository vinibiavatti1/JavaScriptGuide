/**
 * Bridge
 *
 * Decouples an abstraction from its implementation so that the two can vary independently. In
 * JavaScript, we can implement this functionally by injecting implementation functions directly
 * into higher-order factory functions.
 */
const sendSms = (to, message) => console.log(`[SMS to ${to}] ${message}`)
const sendEmail = (to, message) => console.log(`[EMAIL to ${to}] ${message}`)
// --- Bridge ---
const createNotificationService = (sendFn) => ({
    sendAlert: (to, message) => sendFn(to, `Alert: ${message}`),
})
const smsService = createNotificationService(sendSms)
const emailService = createNotificationService(sendEmail)
smsService.sendAlert('john', 'Server is down')   // Output: [SMS to john] Alert: Server is down
emailService.sendAlert('john', 'Server is down') // Output: [EMAIL to john] Alert: Server is down
