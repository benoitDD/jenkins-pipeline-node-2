pipeline {
    agent {
        docker {
            image 'node:latest'
            args '-p 9191:3000'
        }
    }
    environment {
        UN_SECRET = credentials('mysecret')
        CI = 'true'
        STARWARS_DB_CREDS = credentials('DB_STARWARS_CREDENTIAL')
        PRIVATE_KEY_TOKEN = credentials('STARWARS_PRIVATE_KEY_TOKEN')

        DB_LOGIN = '$STARWARS_DB_CREDS_USR'
        DB_PASSWORD = '$STARWARS_DB_CREDS_PSW'
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
