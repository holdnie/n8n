import type { INodeTypeBaseDescription, IVersionedNodeType } from 'n8n-workflow';
import { VersionedNodeType } from 'n8n-workflow';

import { KingbaseV2 } from "./v2/KingbaseV2.node"

export class Kingbase extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'Kingbase',
			name: 'kingbase',
			icon: 'file:kingbase.svg',
			group: ['input'],
			defaultVersion: 2.6,
			description: 'Get, add and update data in Kingbase',
			parameterPane: 'wide',
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			2: new KingbaseV2(baseDescription),
			2.1: new KingbaseV2(baseDescription),
			2.2: new KingbaseV2(baseDescription),
			2.3: new KingbaseV2(baseDescription),
			2.4: new KingbaseV2(baseDescription),
			2.5: new KingbaseV2(baseDescription),
			2.6: new KingbaseV2(baseDescription),
		};

		super(nodeVersions, baseDescription);
	}
}
