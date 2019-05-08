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

        
        NODE_ENV='development'
        DIRECTORY_IMAGE=server'/public/images/'
        DIRECTORY_IMAGE_EXT='/images/'
        DIRECTORY_LOCALES_I18N='/public/locales/{{lng}}/{{ns}}.json'
        CORS_ORIGIN='http://localhost:5000'
        SWAPI_URL='https://vast-thicket-17621.herokuapp.com'
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
