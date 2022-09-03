#include <iostream>
#include <string>
#include "Checks.hpp"
#include <unistd.h>
#include <stdio.h>
#include <cstdlib>
#include <cstdio>

#define ANSI_COLOR_RED     "\x1b[31m"
#define ANSI_COLOR_GREEN   "\x1b[32m"
#define ANSI_COLOR_YELLOW  "\x1b[33m"
#define ANSI_COLOR_BLUE    "\x1b[34m"
#define ANSI_COLOR_MAGENTA "\x1b[35m"
#define ANSI_COLOR_CYAN    "\x1b[36m"
#define ANSI_COLOR_RESET   "\x1b[0m"
#define msg(s) printf(ANSI_COLOR_BLUE "==>" ANSI_COLOR_RESET " %s\n", s)

int main() {
    int existsNodeModules = 0;
    int existsPackageLockJson = 0;
    int existsOut = 0;
    int inDiscordBot = 0;
    int Exists = 0;

    msg("Buscando directorios y archivos.");
    sleep(5);
    if(checkFolder("node_modules") == 0) {
        msg("Node Modules encontrado.");
        existsNodeModules = 1;
        Exists += 1;
    }
    sleep(2);
    if(checkFile("package-lock.json") == 0) {
        msg("Package lock encontrado.");
        existsPackageLockJson = 1;
        Exists += 1;
    }
    sleep(2);
    if(checkFolder("out") == 0) {
        msg("OUT Encontrado.");
        existsOut = 1;
        Exists += 1;
    };

    if (checkShell() == 0) {
        if (Exists >= 1) {
            msg("Eliminando todos los directorios y archivos encontrado");
            sleep(3);
            if (existsNodeModules == 1)
                system("rm -rf node_modules");
            if(existsPackageLockJson == 1)
                system("rm -rf package-lock.json");
            if (existsOut == 1)
                system("rm -rf out");
            msg("Se elimino todo correctamente");
        }
        msg("Comprobando version de NPM");
        sleep(2);
        int g = system("npm --version");
        if(g == 1)
            exit(1);

        msg("Instalando paquetes necesarios para ejecutar bot.");
        sleep(3);
        system("npm i discord.js mysql @types/mysql");
        msg("Instalando dependencias de desarrollo");
        sleep(2);
        system("npm i typescript eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin nodemon ts-node -D");
        msg("Paquetes instalados");
        sleep(2);
        msg("Transpilando codigo.");
        system("tsc");
        sleep(2);
        msg("Listo, leyendo rama de ficheros.");
        system("tree -I node_modules -I install.cpp -I Checks.hpp -I install.py");
        sleep(2);
        msg("Mostrando package.json");
        sleep(1);
        system("cat package.json");
        msg("Saliendo del programa de instalacion...");
        sleep(2);

        exit(1);
        return 0;
    } else {
        if (Exists >= 1) {
            msg("Eliminando todos los directorios y archivos encontrado");
            sleep(3);
            if (existsNodeModules == 1)
                rmdir("/node_modules");
            if(existsPackageLockJson == 1)
                remove("package-lock.json");
            if (existsOut == 1)
                rmdir("/out");
            msg("Se elimino todo correctamente");
        }

        msg("Comprobando version de NPM");
        sleep(2);
        int g = system("npm --version");
        if(g == 1)
            exit(1);

        msg("Instalando paquetes necesarios para ejecutar bot.");
        sleep(3);
        system("npm i discord.js mysql @types/mysql");
        msg("Instalando dependencias de desarrollo");
        sleep(2);
        system("npm i typescript eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin nodemon ts-node -D");
        msg("Paquetes instalados");
        sleep(2);
        msg("Transpilando codigo.");
        system("tsc");
        msg("Listo, leyendo rama de ficheros.");
        system("tree -Exclude node_modules -Exclude install.cpp -Exclude Checks.hpp -Exclude install.py");
        msg("Mostrando package.json");
        system("TYPE package.json");
        msg("Saliendo del programa de instalacion...");
        sleep(2);
    }

    exit(1);
    return 0;
}
