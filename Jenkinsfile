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
        echo 'TRIGGER ONNLY' > test.txt
        sh 'git add .'
        sh "git commit -m 'Commit from Jenkins'"
        withCredentials([gitUsernamePassword(credentialsId: 'gh-cred', gitToolName: 'Default')]) {
            sh "git push -u origin master"
        }
      }
    }

  }
}
