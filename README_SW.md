# 启动
pnpm install --ignore-scripts

pnpm dev --filter n8n

# 带环境变量启动
N8N_SECURE_COOKIE=false pnpm dev --filter n8n

# 扩展开发测试
pnpm build --filter n8n-nodes-custom
N8N_CUSTOM_EXTENSIONS=/workspaces/packages-sw/nodes-custom pnpm dev --filter n8n

# 访问
http://192.168.203.150:8088/
http://localhost:8088/

# cmd
## 查看所有文件，包括隐藏文件
ls -la

## 修复CRLF
dos2unix /workspaces/packages/cli/bin/n8n
