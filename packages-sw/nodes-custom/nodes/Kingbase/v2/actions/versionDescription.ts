/* eslint-disable n8n-nodes-base/node-filename-against-convention */
import { NodeConnectionTypes, type INodeTypeDescription } from 'n8n-workflow';

export const versionDescription: INodeTypeDescription = {
	displayName: 'Kingbase',
	name: 'kingbase',
	icon: 'file:kingbase.svg',
	group: ['input'],
	version: [2, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6],
	subtitle: '={{ $parameter["operation"] }}',
	description: 'Get, add and update data in Kingbase',
	defaults: {
		name: 'Kingbase',
	},
	inputs: [NodeConnectionTypes.Main],
	outputs: [NodeConnectionTypes.Main],
	usableAsTool: true,
	credentials: [
		{
			name: 'kingbase',
			required: true,
			testedBy: 'kingbaseConnectionTest',
		},
	],
	properties: [
		{
			displayName: 'Resource',
			name: 'resource',
			type: 'hidden',
			noDataExpression: true,
			options: [
				{
					name: 'Database',
					value: 'database',
				},
			],
			default: 'database',
		}
	],
};
