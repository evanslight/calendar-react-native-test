This is an attempt to ios and android development based on react native

index.ios.js have all the code.

I used follow commands:
cd ./thisfolder
npm install moment --save
npm install --save react-native-calendar-select
npm install --save react-native-modal-datetime-picker

state setting is important. Please pay attention to it.

I encounter a bug during run-ios
I solve it through deleting the 
rm -r ~/.rncache
and then I do:
npm install -g react-native-git-upgrade
react-native-git-upgrade
to reinstall the package. 
