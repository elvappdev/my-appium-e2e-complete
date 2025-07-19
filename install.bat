@echo off
echo Установка зависимостей...
npm install -g appium
npm install
echo Установка Android-драйвера...
appium driver install uiautomator2
pause
