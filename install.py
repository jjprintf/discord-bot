import requests, subprocess, getch, time, sys
from colorama import Fore
try:
    time.sleep(3)
    print(f"{Fore.BLUE}==> {Fore.WHITE}Instalando paquetes")
    time.sleep(2)
    subprocess.run(["npm", "install", "typescript", "eslint", "@typescript-eslint/parser", "@typescript-eslint/eslint-plugin", "nodemon", "ts-node", "-D"])
    subprocess.run(["npm", "install", "discord.js", "mysql", "@types/mysql"])
    time.sleep(3)
    print(f"{Fore.BLUE}==> {Fore.WHITE}Paquetes instalados")
    time.sleep(2)
    print(f"{Fore.BLUE}==> {Fore.WHITE}Transpilando Codigo.")
    time.sleep(2)
    subprocess.run(["tsc"])
    print(f"{Fore.BLUE}==> {Fore.WHITE}Mostrando rama de carpetas")
    time.sleep(3)
    if sys.platform == "windows":
        subprocess.run(["tree", "-Exclude", "node_modules"])
    else:
        subprocess.run(["tree", "-I", "node_modules"])
    print(f"{Fore.BLUE}==> {Fore.WHITE}Presiona cualquier tecla para salir...")
    key = getch.getch()
    print(f"{Fore.BLUE}==> {Fore.WHITE}Saliendo del programa de instalacion...")
    time.sleep(2)
    exit()
except KeyboardInterrupt:
    print(f"{Fore.BLUE}==> {Fore.WHITE}Saliendo del programa de instalacion...")
    time.sleep(2)
    exit()


