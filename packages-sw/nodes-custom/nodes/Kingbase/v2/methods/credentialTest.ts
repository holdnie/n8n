import type {
	ICredentialsDecrypted,
	ICredentialTestFunctions,
	INodeCredentialTestResult,
} from 'n8n-workflow';

import { configureKingbase } from '../../transport';
import type { KbpConnection, KingbaseNodeCredentials } from '../helpers/interfaces';

export async function kingbaseConnectionTest(
	this: ICredentialTestFunctions,
	credential: ICredentialsDecrypted,
): Promise<INodeCredentialTestResult> {
	const credentials = credential.data as KingbaseNodeCredentials;

	let connection: KbpConnection | undefined;

	try {
		const { db } = await configureKingbase.call(this, credentials, {});

		connection = await db.connect();
	} catch (error) {
		let message = error.message as string;

		if (error.message.includes('ECONNREFUSED')) {
			message = 'Connection refused';
		}

		if (error.message.includes('ENOTFOUND')) {
			message = 'Host not found, please check your host name';
		}

		if (error.message.includes('ETIMEDOUT')) {
			message = 'Connection timed out';
		}

		return {
			status: 'Error',
			message,
		};
	} finally {
		if (connection) {
			await connection.done();
		}
	}
	return {
		status: 'OK',
		message: 'Connection successful!',
	};
}
