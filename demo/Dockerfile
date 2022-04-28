# stage 1 - génère le .jar de l'application
FROM maven:3.8.5-openjdk-17-slim AS maven
WORKDIR /app
COPY . .
RUN mvn clean package

# stage 2 - exécute le fichier jar de l'application
FROM openjdk:17-jdk-alpine3.14
COPY --from=maven /app/target/demo-0.0.1-SNAPSHOT.jar demo-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","/demo-0.0.1-SNAPSHOT.jar"]
