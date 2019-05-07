pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                nput message: 'Start install app ? (Click "Proceed" to continue)'
                sh 'npm install'
                nput message: 'Finish install app ? (Click "Proceed" to continue)'
            }
        }
        stage('Deliver') {
            steps {
                input message: 'Deploy app ? (Click "Proceed" to continue)'
                sh './deliver.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh './kill.sh'
            }
        }
    }
}
