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
          sh 'git config --global user.email "you@example.com"'
          sh 'git config --global user.name "Your Name"'
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
