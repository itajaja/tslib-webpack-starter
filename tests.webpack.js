const context = require.context('./test', true, /\.ts$/)
context.keys().forEach(context)
