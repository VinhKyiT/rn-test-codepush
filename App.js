import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import CodePush from 'react-native-code-push';

let CodePushOptions = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
  mandatoryInstallMode: CodePush.InstallMode.IMMEDIATE,
  updateDialog: {
    appendReleaseDescription: true,
    title: 'a new update is available!',
  },
};
const App = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'red', flex: 1}}>
      <Text style={{color: 'black'}}>App code push done</Text>
    </SafeAreaView>
  );
};

export default CodePush(App);
