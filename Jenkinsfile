pipeline {
  agent any

  stages {
    
    stage('Display all files') {
      steps {
        sh 'ls'
        sh 'cat package.json'
      }
    }
  

   stage('Build the Application') {
      steps {
        nodejs(nodeJSInstallationName: 'nodejs2') {
            sh 'npm install'
            sh 'npm run build'
        }
 
      }
    }

   stage('Push to Github') {
      steps {
        sh 'git add .'
        sh "git commit -m 'Commit from Jenkins'"
        sh 'git push origin master'
      }
    }

  }
}
