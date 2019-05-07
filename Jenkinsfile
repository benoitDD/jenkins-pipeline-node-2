pipeline {
    agent {
        docker {
            image 'node:latest'
            args '-p 9191:3000'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'echo toto > rere.txt'
            }
        }
        stage('Deliver') {
            steps {
                sh 'cat rere.txt'
                sh './jenkins/scripts/deliver.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh './jenkins/scripts/kill.sh'
            }
        }
    }
}
