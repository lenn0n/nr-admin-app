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
   stage('Assign global email and name'){
        steps {
          sh 'git config --global user.email "auto@jenkins.com"'
          sh 'git config --global user.name "Jenkins"'
        }
   }
   stage('Push to Github') {
      steps {
        sh 'touch something_new.txt'
        sh 'git add .'
        sh "git commit -m 'Commit from Jenkins'"
        withCredentials([gitUsernamePassword(credentialsId: 'gh-cred', gitToolName: 'Default')]) {
            sh "git push -u origin HEAD:master"
        }
      }
    }

  }
}
