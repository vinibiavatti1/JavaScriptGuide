/**
 * Watch
 *
 * Monitors changes in files or directories asynchronously using native OS notification APIs.
 * It returns an AsyncIterator that continuously yields event objects during file system activity.
 *
 * The example below continuously listens for file system events using an async iterator loop with
 * 'for await...of'. Uses an AbortController signal to gracefully terminate the infinite watching
 * loop after a 2-second timeout.
 */
import fs from 'node:fs/promises'

const ac = new AbortController()
setTimeout(() => ac.abort(), 2000) // Automatically aborts watching after 2 seconds
try {
    const watcher = fs.watch('./.resources', { signal: ac.signal })
    for await (const event of watcher) {
        if (event.eventType === 'change') {
            console.log(`File content updated: ${filename}`)
        } else {
            console.log(`File created, deleted, or renamed: ${filename}`)
        }
    }
} catch {
    console.log('terminated')
}
