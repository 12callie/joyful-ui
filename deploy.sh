rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m 'update' &&
git remote add origin git@github.com:12callie/joyful-website.git &&
git branch -M main &&
git push -f -u origin main &&
cd ..
echo https://12callie.github.io/joyful-website/index.html