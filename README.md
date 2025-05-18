# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh






in case of : 
sh: /volume1/web/portfolio/node_modules/.bin/vite: /bin/sh^M: bad interpreter: No such file or directory

do : 
sed -i 's/\r$//' ./node_modules/.bin/vite



//pour laisser le terminal activé
nohup npm start &

//affiché les processus 
ps aux | grep 'npm start'


//pour kill le processus (remplacer PID)
kill -9 {PID}
