FROM n8nio/base:22

# install additional packages
RUN apk add --no-cache --update openssh sudo shadow bash rsync dos2unix
# setup non-root user with sudo access
RUN echo node ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/node && chmod 0440 /etc/sudoers.d/node
# create workspaces directory and set ownership
RUN mkdir -p /workspaces && chown -R node:node /workspaces

# copy sync script from repo
COPY sync-back.sh /usr/local/bin/sync-back.sh
RUN chmod +x /usr/local/bin/sync-back.sh

RUN npm install -g pnpm

USER node

RUN pnpm config set store-dir /pnpm-store --global
