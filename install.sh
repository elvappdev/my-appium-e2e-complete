#!/bin/bash
echo "Installing dependencies..."
npm install -g appium
npm install
echo "Installing Android driver..."
appium driver install uiautomator2
