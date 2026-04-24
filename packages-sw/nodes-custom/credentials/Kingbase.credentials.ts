import type { ICredentialType, INodeProperties } from 'n8n-workflow';
import { sshTunnelProperties } from '../utils/sshTunnel.properties';

export class Kingbase implements ICredentialType {
  name = 'kingbase';

  displayName = 'KingbaseES';

  documentationUrl = 'kingbase';

  properties: INodeProperties[] = [
    {
      displayName: 'Host',
      name: 'host',
      type: 'string',
      default: 'localhost',
    },
    {
      displayName: 'Database',
      name: 'database',
      type: 'string',
      default: 'testdb',
    },
    {
      displayName: 'Schema',
      name: 'schema',
      type: 'string',
      default: 'sys',
      description: 'Default schema for KingbaseES (usually sys)',
    },
    {
      displayName: 'User',
      name: 'user',
      type: 'string',
      default: 'system',
    },
    {
      displayName: 'Password',
      name: 'password',
      type: 'string',
      typeOptions: {
        password: true,
      },
      default: '',
    },
    {
      displayName: 'Maximum Number of Connections',
      name: 'maxConnections',
      type: 'number',
      default: 50,
      description:
        'Make sure this value times the number of workers is lower than the maximum connections allowed by KingbaseES.',
    },
    {
      displayName: 'Ignore SSL Issues (Insecure)',
      name: 'allowUnauthorizedCerts',
      type: 'boolean',
      default: false,
      description: 'Connect even if SSL certificate validation is not possible',
    },
    {
      displayName: 'SSL',
      name: 'ssl',
      type: 'options',
      displayOptions: {
        show: {
          allowUnauthorizedCerts: [false],
        },
      },
      options: [
        {
          name: 'Allow',
          value: 'allow',
        },
        {
          name: 'Disable',
          value: 'disable',
        },
        {
          name: 'Require',
          value: 'require',
        },
      ],
      default: 'disable',
    },
    {
      displayName: 'Port',
      name: 'port',
      type: 'number',
      default: 54321,   // Kingbase 默认端口
    },
    {
      displayName: 'Read Only',
      name: 'readonly',
      type: 'boolean',
      default: false,
      description: 'Disallow INSERT, UPDATE and DELETE',
    },
    {
      displayName: 'Allowed Tables',
      name: 'allowedTables',
      type: 'string',
      default: '',
      description: 'Comma-separated whitelist of tables (optional)',
    },
    ...sshTunnelProperties,
  ];
}
