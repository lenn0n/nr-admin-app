pipeline {
  agent any

  stages {
    stage('Display all files') {
      steps {
        sh 'ls'
        sh 'cat package.json'
      }
    }
    
    stage('Check Node Version') {
      steps {
        sh 'node -v'
      }
    }

    stage('Check GIT Version') {
      steps {
        sh 'git -v'
      }
    }

  }
}
