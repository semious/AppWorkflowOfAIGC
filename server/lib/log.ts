import winston from "winston";
import DailyRotateFile from 'winston-daily-rotate-file';

var transport = new DailyRotateFile({
	filename: 'monitor-%DATE%.log',
	datePattern: 'YYYY-MM-DD',
	maxSize: '200m',
	maxFiles: '360d',
	dirname: 'logs'
});

export const logger = winston.createLogger({
	level: 'info',
	format: winston.format.simple(),
	transports: [
		// new winston.transports.Console(),
		transport,
		// new winston.transports.File({ filename: 'debugger.log', level: 'error' }),
		// new winston.transports.File({ filename: 'logs/combined.log' })
	]
});

export function log(...args: any[]) {
	const message = args.map(arg => {
		if (typeof arg === 'object') {
			return JSON.stringify(arg);
		}
		if (typeof arg === 'string') {
			const color = /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g;
			arg = arg.replace(color, '');
			return arg;
		}
		return arg;
	})
	message.unshift(new Date().toLocaleString());
	logger.info(message.join(' '));
	console.log(...message);
}

export function recordLog(name: string, op: string, ...args: any[]) {
	log(`[${name}] ${op}`, ...args);
}
