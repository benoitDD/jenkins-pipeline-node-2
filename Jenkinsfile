pipeline {
    agent {
        docker {
            image 'node:latest'
            args '-p 3000:9191'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Deliver') {
            steps {
                sh './jenkins/scripts/deliver.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh './jenkins/scripts/kill.sh'
            }
        }
    }
}
