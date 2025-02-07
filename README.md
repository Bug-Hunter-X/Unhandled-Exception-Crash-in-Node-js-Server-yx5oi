# Node.js Server Crash: Unhandled Exception

This repository demonstrates a common error in Node.js applications: crashing due to unhandled exceptions when performing synchronous file I/O on large files.  The synchronous `readFileSync` blocks the event loop, making the server unresponsive and prone to crashes if the file is too large or the file system is slow.  The solution showcases using asynchronous I/O to prevent this issue.

## Bug
The `bug.js` file demonstrates the problematic code: it attempts to synchronously read a large file and send its contents as a response. This approach is highly inefficient and can lead to the application crashing under load.

## Solution
The `bugSolution.js` file illustrates the correct approach: using asynchronous file I/O via `fs.readFile` to prevent the event loop from being blocked. This allows the server to remain responsive, even when dealing with large files.