FROM nginx:1.20-alpine
RUN apk add --update npm git
COPY docker-entrypoint.sh /

ENTRYPOINT ["/docker-entrypoint.sh"]
