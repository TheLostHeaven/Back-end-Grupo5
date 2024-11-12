import { Router } from 'express';
import { readdirSync } from 'fs';

const PATH_ROUTERS = `${__dirname}`;
const router = Router();
const cleanFileName = (fileName:string) => {
    const file = fileName.split('.').shift();
    return file
};

readdirSync(PATH_ROUTERS).filter((fileName) => {
    const cleanName = cleanFileName(fileName);
    if (cleanName !== "index"){
        import(`./${cleanName}`).then((moduleRouter) => {
            console.log(`Se carga la ruta /${cleanName}`);
            
            router.use (`/${cleanName}`, moduleRouter.router)
        });
    }
});

export { router };