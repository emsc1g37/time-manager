FROM postgres:latest
ENV POSTGRES_USER postgres
ENV POSTGRES_PASSWORD root
ENV POSTGRES_DB time_manager
ADD schema.sql /docker-entrypoint-initdb.d/
EXPOSE 5432