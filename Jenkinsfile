pipeline {
  agent any

  stages {
    
   // stage('Build the Application') {
   //    steps {
   //      nodejs(nodeJSInstallationName: 'nodejs2') {
   //          sh 'npm install'
   //          sh 'npm run build'
   //      }
 
   //    }
   //  }
   stage('Reassign User'){
        steps {
          sh 'git config --global user.email "auto@jenkins.com"'
          sh 'git config --global user.name "Jenkins"'
        }
   }
   stage('Push to Github') {
      steps {
        sh 'git add .'
        sh "git commit -m 'Commit from Jenkins'"
        withCredentials([gitUsernamePassword(credentialsId: 'gh-secret', gitToolName: 'Default')]) {
            sh "git push -u origin master"
        }
      }
    }

  }
}
