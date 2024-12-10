pipeline {
    agent any
    environment {
	PROJECT_ID = 'aerobic-pivot-436605-v4'
	CLUSTER_NAME = 'kube'
	LOCATION = 'asia-northeast3-a'
	CREDENTIALS_ID = 'gke'
        DOCKER_IMAGE = 'team9'
        DOCKER_HUB_REPO = '20221157/team9' // Docker Hub 계정 반영.
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
                sh 'docker build -t team9:${env.BUILD_ID} .'
            }
        }
        stage('Run Docker Container') {
            steps {
		sh '''
                # 기존 컨테이너가 존재하면 중지하고 삭제
                if docker ps -a | grep team9-container; then
                    docker stop team9-container || true
                    docker rm team9-container || true
                fi
                
                # 새 컨테이너 실행
                docker run --name team9-container -d team9:${env.BUILD_ID}
                '''
            }
        }
        stage('Push Docker Image to Docker Hub') {
            steps {
                withDockerRegistry([credentialsId: '20221157', url: '']) {
                    sh 'docker tag $DOCKER_IMAGE $DOCKER_HUB_REPO:latest'
                    sh 'docker push $DOCKER_HUB_REPO:latest'
                }
            }
        }
        stage('Deploy to GKE') {
	    when {
		branch 'master'
	    }
            steps {
		sh "sed -i 's/team9:latest/team9:${env.BUILD_ID}/g' deployment.yaml"
		step([$class: 'KubernetesEngineBuilder', projectId: env.PROJECT_ID, clusterName: env.CLUSTER_NAME, location: env.LOCATION, manifestPattern: 'deployment.yaml', credentialsId: env.CREDENTIALS_ID, verifyDeployments: true])
            }
        }
    }
}
