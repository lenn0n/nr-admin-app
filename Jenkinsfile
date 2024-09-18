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

   stage('Build the Application') {
      steps {
        sh 'npm install'
        sh 'npm run build'
      }
    }

   stage('Push to Github') {
      steps {
        sh 'git add .'
        sh 'git commit -m "Commit from Jenkins"'
        sh 'git push origin master'
      }
    }

  }
}
