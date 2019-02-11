const {format, createLogger, transports} = require('winston');

module.exports = label => createLogger({
    transports: [new transports.Console()],
    format: format.combine(
        format.label({label}),
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss',
        }),
        format.colorize({all: true}),
        format.printf(info => `${info.timestamp} - ${info.level}: [${label}] ${info.message}`)
    ),
});
