import type { IDataObject, INodeExecutionData, SSHCredentials } from 'n8n-workflow';
import type pgPromise from 'pg-promise';
import { type IFormattingOptions } from 'pg-promise';
import type pg from 'pg-promise/typescript/pg-subset';

export type QueryMode = 'single' | 'transaction' | 'independently';

export type QueryValue = string | number | IDataObject | string[];
export type QueryValues = QueryValue[];
export type QueryWithValues = { query: string; values?: QueryValues; options?: IFormattingOptions };

export type WhereClause = { column: string; condition: string; value: string | number };
export type SortRule = { column: string; direction: string };
export type ColumnInfo = {
	column_name: string;
	data_type: string;
	is_nullable: string;
	udt_name?: string;
	column_default?: string | null;
	is_generated?: 'ALWAYS' | 'NEVER';
	identity_generation?: 'ALWAYS' | 'NEVER' | 'BY DEFAULT';
};
export type EnumInfo = {
	typname: string;
	enumlabel: string;
};

export type KbpClient = pgPromise.IMain<{}, pg.IClient>;
export type KbpDatabase = pgPromise.IDatabase<{}, pg.IClient>;
export type KbpConnectionParameters = pg.IConnectionParameters<pg.IClient>;
export type KbpConnection = pgPromise.IConnected<{}, pg.IClient>;
export type ConnectionsData = { db: KbpDatabase; pgp: KbpClient };

export type QueriesRunner = (
	queries: QueryWithValues[],
	options: IDataObject,
) => Promise<INodeExecutionData[]>;

export type KingbaseNodeOptions = {
	nodeVersion?: number;
	operation?: string;
	cascade?: boolean;
	connectionTimeout?: number;
	delayClosingIdleConnection?: number;
	queryBatching?: QueryMode;
	queryReplacement?: string;
	outputColumns?: string[];
	largeNumbersOutput?: 'numbers' | 'text';
	skipOnConflict?: boolean;
	replaceEmptyStrings?: boolean;
	treatQueryParametersInSingleQuotesAsText?: boolean;
};

export type KingbaseNodeCredentials = {
	host: string;
	port: number;
	database: string;
	user: string;
	password: string;
	maxConnections: number;
	allowUnauthorizedCerts?: boolean;
	ssl?: 'disable' | 'allow' | 'require' | 'verify' | 'verify-full';
} & (
		| { sshTunnel: false }
		| ({
			sshTunnel: true;
		} & SSHCredentials)
	);
