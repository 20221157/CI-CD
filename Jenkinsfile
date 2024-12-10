pipeline {
    agent any
    environment {
        DOCKER_IMAGE = 'opensourceteam9-image'
        DOCKER_HUB_REPO = '20221157/team9' // Docker Hub 계정 반영
        KUBERNETES_DEPLOYMENT = 'opensourceteam9-deployment'
    }
    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'master', url: 'https://github.com/20221157/CI-CD.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE .'
            }
        }
        stage('Run Docker Container') {
            steps {
                sh 'docker run --name $DOCKER_IMAGE-container -d $DOCKER_IMAGE'
            }
        }
        stage('Push Docker Image to Docker Hub') {
            steps {
                withDockerRegistry([credentialsId: 'docker-hub-credentials', url: '']) {
                    sh 'docker tag $DOCKER_IMAGE $DOCKER_HUB_REPO:latest'
                    sh 'docker push $DOCKER_HUB_REPO:latest'
                }
            }
        }
        stage('Deploy to Kubernetes') {
            steps {
                sh '''
                kubectl apply -f deployment.yaml
                kubectl rollout status deployment/$KUBERNETES_DEPLOYMENT
                '''
            }
        }
    }
}
