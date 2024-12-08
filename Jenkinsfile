node {
    def app
    stage('Clone repository') {
        git 'https://github.com/thatsgoodd/opensourceteam9.git'
    }
    stage('Build image') {
        app = docker.build("yumyummm/test")
    }
    stage('Test image') {
        app.inside {
            sh 'make test'
        }
    }
    stage('Push image') {
        docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
        }
    }
}

