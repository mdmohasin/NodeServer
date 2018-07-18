/**
 * @author mohammed.mohasin
 * @todo : logging service using {winston} need to be implemented
 */
import winston from 'winston';

const Logger = winston.Logger;

const logger = new Logger({
    transports: [
        new (winston.transports.File)({ filename: 'console.log' }),
    ],
});


export const consoleLog = payload => logger.info(payload);
export const consoleWarn = payload => logger.warn(payload);
export const consoleError = payload => logger.error(payload);
